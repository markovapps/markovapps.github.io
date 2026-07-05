// Self-contained port of the jbang `app_ads_txt --update` script.
// Fetches the CAS.ai reference app-ads.txt and, if it contains records
// missing from our local file, replaces everything after the `### CAS.ai`
// marker with the fetched data. No changes are written when up to date.

import { readFile, writeFile } from "node:fs/promises";

const REFERENCE_URL =
  "https://raw.githubusercontent.com/cleveradssolutions/App-ads.txt/refs/heads/main/app-ads.txt";
const TARGET_FILE = "public/app-ads.txt";
const MARKER = "### CAS.ai";

// non-empty, non-comment lines, trimmed, de-duplicated (order preserved)
function extractRecords(content) {
  const records = new Set();
  for (const raw of content.split("\n")) {
    const line = raw.trim();
    if (line === "" || line.startsWith("#")) continue;
    records.add(line);
  }
  return records;
}

async function fetchContent(url) {
  const res = await fetch(url, { redirect: "follow" });
  if (res.status >= 400) {
    throw new Error(`HTTP ${res.status} for ${url}`);
  }
  return res.text();
}

async function main() {
  console.log(`[info] Fetching reference data from: ${REFERENCE_URL}`);
  const fetchedData = (await fetchContent(REFERENCE_URL)).trim();
  if (fetchedData === "") {
    throw new Error("Fetched reference data is empty");
  }

  const fileContent = await readFile(TARGET_FILE, "utf8");
  const lines = fileContent.replaceAll("\r\n", "\n").split("\n");

  const markerLineIndex = lines.findIndex((l) => l.trim() === MARKER);
  if (markerLineIndex < 0) {
    throw new Error(`Marker line not found: ${MARKER}`);
  }

  const currentTail = lines.slice(markerLineIndex + 1).join("\n");
  const fetchedRecords = extractRecords(fetchedData);
  const currentRecords = extractRecords(currentTail);

  const missing = [...fetchedRecords].filter((r) => !currentRecords.has(r));

  if (missing.length === 0) {
    console.log("app-ads.txt is up to date.");
    return;
  }

  console.log(`[warn] Missing records found: ${missing.length}`);
  console.log(`[info] Replacing everything after marker: ${MARKER}`);

  const prefix = lines.slice(0, markerLineIndex + 1).join("\n");
  const updated = `${prefix}\n${fetchedData}\n`;
  await writeFile(TARGET_FILE, updated, "utf8");

  console.log(`[ok] Updated file: ${TARGET_FILE}`);
}

try {
  await main();
} catch (err) {
  console.error(err);
  process.exit(1);
}
