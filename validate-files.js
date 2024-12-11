#!/usr/bin/env node

const fs = require('fs');

const requiredFiles = ['out/app-ads.txt', 'out/.nojekyll'];

const missingFiles = requiredFiles.filter(file => !fs.existsSync(file));

if (missingFiles.length > 0) {
    console.error(`Error: Missing required files:\n- ${missingFiles.join('\n- ')} \n use 'npm run build' first`);
    process.exit(1); // Exit with error
}

console.log("All required files are present.");
