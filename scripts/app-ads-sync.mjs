// Sync the CAS.ai section of public/app-ads.txt from the per-account files
// downloaded by hand from platform.cas.ai (Applications → APP-ADS status →
// "Full file" → Download), one per store developer account (iOS, Android).
//
// Usage:
//   npm run app-ads-sync            — rewrite public/app-ads.txt, report changes
//   npm run app-ads-sync -- <dir>   — read the files from <dir>
//
// Input folder (default: app-ads.txt/, git-ignored) must contain exactly one
// Full file for iOS and one for Android: file names containing "ios" /
// "android" and NOT containing "missing". Both are required: each carries its
// own account's `cas.ai, <id>, DIRECT` line, and dropping it would invalidate
// every CAS record for that account.
//
// Optional "missing" files (names containing "missing", downloaded from the
// "Missing" tab) are used only as a cross-check: the records this sync adds
// must equal the union of the Missing lists, otherwise a warning is printed.
//
// What it does: replaces everything below the `### CAS.ai` marker with the
// union of the two Full files (iOS first, then Android records not already
// present). Everything above the marker (our non-CAS partners) is untouched.
// Never commits or deploys.

import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const TARGET_FILE = "public/app-ads.txt";
const MARKER = "### CAS.ai";
const DEFAULT_DIR = "app-ads.txt";

const dir = process.argv[2] ?? DEFAULT_DIR;

const toLines = (text) => text.replaceAll("\r\n", "\n").split("\n");
const isRecord = (line) => line !== "" && !line.startsWith("#");

// Exact identity of a line (dedup inside the CAS section): fields trimmed,
// case-insensitive. Keeps variants that differ only by certification ID,
// exactly as CAS ships them.
const lineId = (line) =>
  line.split(",").map((f) => f.trim().toLowerCase()).join(", ");

// How CAS decides whether a record is present: domain, account ID and
// relationship, case-insensitive; the optional certification ID is ignored.
// Variable lines (`OwnerDomain=cas.ai`) compare as a whole.
function recordKey(line) {
  if (line.includes("=") && !line.includes(",")) return lineId(line);
  return lineId(line).split(", ").slice(0, 3).join(", ");
}

function isValidRecord(line) {
  if (/^[A-Za-z]+=\S+$/.test(line)) return true;
  const f = line.split(",").map((x) => x.trim());
  return f.length >= 3 && f.length <= 4 && f[0] && f[1] && /^(DIRECT|RESELLER)$/i.test(f[2]);
}

const recordsOf = (lines) => lines.map((l) => l.trim()).filter(isRecord);
const keysOf = (lines) => new Set(recordsOf(lines).map(recordKey));

async function pickInputFiles() {
  const names = (await readdir(dir)).filter((n) => n.toLowerCase().endsWith(".txt"));
  const find = (platform, missing) =>
    names.filter((n) => {
      const l = n.toLowerCase();
      return l.includes(platform) && l.includes("missing") === missing;
    });

  const fullIos = find("ios", false);
  const fullAndroid = find("android", false);
  if (fullIos.length !== 1 || fullAndroid.length !== 1) {
    throw new Error(
      `Expected exactly one iOS and one Android Full file in ${dir}/, ` +
        `found iOS: [${fullIos.join(", ")}], Android: [${fullAndroid.join(", ")}]`,
    );
  }
  return {
    full: [fullIos[0], fullAndroid[0]],
    missing: [...find("ios", true), ...find("android", true)],
  };
}

const readLines = async (name) => toLines(await readFile(path.join(dir, name), "utf8"));

// Union of the Full files: the first file as-is (keeps its comments/order),
// then records from the others not already present.
function unionFull(files) {
  const seen = new Set();
  const out = [];
  files.forEach((lines, i) => {
    for (const raw of lines) {
      const line = raw.trim();
      if (!isRecord(line)) {
        if (i === 0 && line !== "") out.push(line);
        continue;
      }
      const id = lineId(line);
      if (seen.has(id)) continue;
      seen.add(id);
      out.push(line);
    }
  });
  return out;
}

async function main() {
  const { full, missing } = await pickInputFiles();
  console.log(`[info] Full files: ${full.join(", ")}`);

  const fullLines = await Promise.all(full.map(readLines));
  const newTail = unionFull(fullLines);

  const invalid = recordsOf(newTail).filter((l) => !isValidRecord(l));
  if (invalid.length > 0) {
    console.log(`[warn] ${invalid.length} line(s) don't look like app-ads records:`);
    invalid.slice(0, 20).forEach((l) => console.log(`  ${l}`));
  }

  const current = toLines(await readFile(TARGET_FILE, "utf8"));
  const markerIndex = current.findIndex((l) => l.trim() === MARKER);
  if (markerIndex < 0) throw new Error(`Marker '${MARKER}' not found in ${TARGET_FILE}`);
  const prefix = current.slice(0, markerIndex + 1);
  const oldTail = current.slice(markerIndex + 1);

  const currentKeys = keysOf(current);
  const resultKeys = keysOf([...prefix, ...newTail]);
  const added = [...resultKeys].filter((k) => !currentKeys.has(k));
  const removed = [...currentKeys].filter((k) => !resultKeys.has(k));

  console.log(
    `[info] CAS section: ${recordsOf(oldTail).length} → ${recordsOf(newTail).length} records`,
  );
  console.log(`[info] Added (by domain, ID, relationship): ${added.length}`);
  added.forEach((k) => console.log(`  + ${k}`));
  console.log(`[info] Removed: ${removed.length}`);
  removed.forEach((k) => console.log(`  - ${k}`));
  if (removed.length > 0) {
    console.log(`[warn] ${removed.length} record(s) will be REMOVED — check they were dropped by CAS.`);
  }

  if (missing.length > 0) {
    const missingKeys = new Set();
    for (const name of missing) for (const k of keysOf(await readLines(name))) missingKeys.add(k);
    // Every Missing record must end up in the result (it may already be there
    // on a re-run), and nothing outside the Missing lists may be added.
    const absent = [...missingKeys].filter((k) => !resultKeys.has(k));
    const extra = added.filter((k) => !missingKeys.has(k));
    if (absent.length === 0 && extra.length === 0) {
      console.log(`[ok] Consistent with the Missing files (${missing.join(", ")}).`);
    } else {
      console.log(`[warn] Result disagrees with the Missing files (${missing.join(", ")}):`);
      absent.forEach((k) => console.log(`  in Missing, absent from result: ${k}`));
      extra.forEach((k) => console.log(`  added, not in Missing: ${k}`));
    }
  }

  await writeFile(TARGET_FILE, `${[...prefix, ...newTail].join("\n")}\n`, "utf8");
  console.log(`\n[ok] Wrote ${TARGET_FILE}. Review with git diff, then commit/deploy yourself.`);
}

main().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
