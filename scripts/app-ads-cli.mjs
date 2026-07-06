// Local CLI adapter.
//
// Runs the core check and translates its boolean result into an EXIT CODE, so
// shell / package.json can act on it:
//   exit 0  — up to date, nothing to do
//   exit 10 — deploy needed (public/app-ads.txt was refreshed)
//   exit 1  — error
//
// Symmetric with scripts/update-app-ads.mjs, which instead writes the workflow
// `deploy_needed` output. All logic lives in app-ads-lib.mjs; this file only
// adapts the result to a CLI-friendly signal.

import { checkAndRefresh } from "./app-ads-lib.mjs";

// Distinct from the generic error code (1) so callers can tell "deploy needed"
// apart from a real failure, and from "up to date" (0).
const EXIT_DEPLOY_NEEDED = 10;

try {
  const { deployNeeded } = await checkAndRefresh();
  process.exit(deployNeeded ? EXIT_DEPLOY_NEEDED : 0);
} catch (err) {
  console.error(err);
  process.exit(1);
}
