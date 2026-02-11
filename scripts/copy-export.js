const fs = require("fs");
const path = require("path");

const sourceDir = path.join(__dirname, "..", "out");
const targetDir = path.join(__dirname, "..", "dist");

if (!fs.existsSync(sourceDir)) {
  console.error("Expected export folder not found: out");
  process.exit(1);
}

fs.rmSync(targetDir, { recursive: true, force: true });
fs.cpSync(sourceDir, targetDir, { recursive: true });

console.log("Copied static export from out/ to dist/");
