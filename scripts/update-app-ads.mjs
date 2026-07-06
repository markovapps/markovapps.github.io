// Self-contained port of the jbang `app_ads_txt --update` script.
//
// Compares the CAS.ai reference against the LIVE deployed file
// (https://markovapps.github.io/app-ads.txt) — NOT the repo copy — and reports
// whether a redeploy is needed via the `deploy_needed` GitHub Actions output.
// When the live site is out of sync, it also rewrites the repo's app-ads.txt
// (everything after the `### CAS.ai` marker) from the reference, so the workflow
// can commit the refreshed file.
//
// The deploy decision comes from this explicit output, not from `git diff`: the
// repo copy may already match the reference while the live copy is stale (e.g. a
// previous deploy failed), and that case must still trigger a redeploy.

import { appendFile, readFile, writeFile } from "node:fs/promises";

const REFERENCE_URL =
  "https://raw.githubusercontent.com/cleveradssolutions/App-ads.txt/refs/heads/main/app-ads.txt";
// The live, deployed copy we compare against (gh-pages, served at the site root).
const DEPLOYED_URL = "https://markovapps.github.io/app-ads.txt";
const TARGET_FILE = "public/app-ads.txt";
const MARKER = "### CAS.ai";

// non-empty, non-comment lines, trimmed, de-duplicated
function extractRecords(content) {
  const records = new Set();
  for (const raw of content.split("\n")) {
    const line = raw.trim();
    if (line === "" || line.startsWith("#")) continue;
    records.add(line);
  }
  return records;
}

// Records after the `### CAS.ai` marker; null if the marker is absent.
function tailRecordsAfterMarker(content) {
  const lines = content.replaceAll("\r\n", "\n").split("\n");
  const i = lines.findIndex((l) => l.trim() === MARKER);
  if (i < 0) return null;
  return extractRecords(lines.slice(i + 1).join("\n"));
}

function setsDiffer(a, b) {
  if (a.size !== b.size) return true;
  for (const x of a) if (!b.has(x)) return true;
  return false;
}

async function fetchContent(url, { allow404 = false } = {}) {
  const res = await fetch(url, {
    redirect: "follow",
    cache: "no-store",
    headers: { "Cache-Control": "no-cache" },
  });
  if (res.status === 404 && allow404) return null;
  if (res.status >= 400) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.text();
}

// Emit a GitHub Actions step output (no-op with a local log when run outside CI).
async function setOutput(name, value) {
  const out = process.env.GITHUB_OUTPUT;
  if (out) {
    await appendFile(out, `${name}=${value}\n`);
  } else {
    console.log(`[local] output ${name}=${value}`);
  }
}

// The record set currently served live, or null if it can't be determined
// (404, missing marker, or a fetch error) — in which case we treat the live
// copy as "not matching" so it gets refreshed rather than left stale.
async function fetchDeployedRecords() {
  // Cache-buster: the Pages CDN can serve a stale copy for minutes otherwise.
  const url = `${DEPLOYED_URL}?nocache=${Date.now()}`;
  try {
    const content = await fetchContent(url, { allow404: true });
    if (content === null) {
      console.log(`[warn] Deployed file 404 at ${DEPLOYED_URL}.`);
      return null;
    }
    const records = tailRecordsAfterMarker(content);
    if (records === null) {
      console.log(`[warn] No '${MARKER}' marker in the deployed file.`);
    }
    return records;
  } catch (err) {
    console.log(`[warn] Could not fetch deployed file: ${err.message}`);
    return null;
  }
}

// Rewrite the repo file's tail (after the marker) from the reference, preserving
// everything above the marker (our own non-CAS partner records live there).
async function writeRepoFileFromReference(fetchedData) {
  const fileContent = await readFile(TARGET_FILE, "utf8");
  const lines = fileContent.replaceAll("\r\n", "\n").split("\n");

  const markerLineIndex = lines.findIndex((l) => l.trim() === MARKER);
  if (markerLineIndex < 0) {
    throw new Error(`Marker line not found in ${TARGET_FILE}: ${MARKER}`);
  }

  const prefix = lines.slice(0, markerLineIndex + 1).join("\n");
  await writeFile(TARGET_FILE, `${prefix}\n${fetchedData}\n`, "utf8");
}

async function main() {
  console.log(`[info] Fetching reference data from: ${REFERENCE_URL}`);
  const fetchedData = (await fetchContent(REFERENCE_URL)).trim();
  if (fetchedData === "") {
    throw new Error("Fetched reference data is empty");
  }
  const fetchedRecords = extractRecords(fetchedData);

  console.log(`[info] Comparing reference against deployed: ${DEPLOYED_URL}`);
  const deployedRecords = await fetchDeployedRecords();

  // Redeploy whenever the live copy differs from the reference (or couldn't be
  // read). This is the authoritative signal the workflow gates build/deploy on.
  const deployNeeded =
    deployedRecords === null || setsDiffer(fetchedRecords, deployedRecords);

  if (deployNeeded) {
    // Refresh the repo file so the workflow can commit it. A no-op write (repo
    // already matched the reference) leaves no git diff → nothing to commit, but
    // deploy_needed still triggers the rebuild + redeploy of the live site.
    await writeRepoFileFromReference(fetchedData);
    console.log(`[ok] Deploy needed. Refreshed ${TARGET_FILE} from the reference.`);
  } else {
    console.log("Deployed app-ads.txt already matches the reference. No deploy needed.");
  }

  await setOutput("deploy_needed", deployNeeded ? "true" : "false");
}

try {
  await main();
} catch (err) {
  console.error(err);
  process.exit(1);
}
