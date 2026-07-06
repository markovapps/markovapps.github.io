// Workflow (GitHub Actions) entry point.
//
// Runs the core check and writes the `deploy_needed` step output that
// .github/workflows/app-ads-daily.yml gates its build/deploy steps on. Kept at
// this path so the workflow YAML needs no changes. All logic lives in
// app-ads-lib.mjs; this file only adapts the result to GitHub Actions.

import { appendFile } from "node:fs/promises";
import { checkAndRefresh } from "./app-ads-lib.mjs";

try {
  const { deployNeeded } = await checkAndRefresh();

  const line = `deploy_needed=${deployNeeded}\n`;
  const outputFile = process.env.GITHUB_OUTPUT;
  if (outputFile) {
    await appendFile(outputFile, line);
  } else {
    // Local sanity run without GitHub Actions: just print what would be emitted.
    process.stdout.write(line);
  }
} catch (err) {
  console.error(err);
  process.exit(1);
}
