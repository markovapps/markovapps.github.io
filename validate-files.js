#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const requiredFiles = ['out/.nojekyll'];
const additionalDir = 'additional';
const outDir = 'out';

const listFiles = (dir, baseDir = dir) => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const files = [];

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            files.push(...listFiles(fullPath, baseDir));
            continue;
        }
        files.push(path.relative(baseDir, fullPath));
    }

    return files;
};

const missingFiles = requiredFiles.filter(file => !fs.existsSync(file));
const contentMismatches = [];

if (fs.existsSync(additionalDir)) {
    const additionalFiles = listFiles(additionalDir);
    for (const relativePath of additionalFiles) {
        const sourcePath = path.join(additionalDir, relativePath);
        const outPath = path.join(outDir, relativePath);

        if (!fs.existsSync(outPath)) {
            missingFiles.push(outPath);
            continue;
        }

        const sourceContent = fs.readFileSync(sourcePath);
        const outContent = fs.readFileSync(outPath);
        if (!sourceContent.equals(outContent)) {
            contentMismatches.push(`${sourcePath} -> ${outPath}`);
        }
    }
}

if (missingFiles.length > 0 || contentMismatches.length > 0) {
    if (missingFiles.length > 0) {
        console.error(`Error: Missing required files:\n- ${missingFiles.join('\n- ')}\nUse 'npm run build' first.`);
    }
    if (contentMismatches.length > 0) {
        console.error(`Error: Files in '${additionalDir}' do not match '${outDir}':\n- ${contentMismatches.join('\n- ')}`);
    }
    process.exit(1);
}

console.log('All required files are present and additional content is in out.');
