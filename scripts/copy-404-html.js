/**
 * GitHub Pages SPA: duplicate dist/index.html as dist/404.html (same as previous webpack setup).
 */
const fs = require("fs");
const path = require("path");

const dist = path.join(__dirname, "..", "dist");
const indexPath = path.join(dist, "index.html");
const dest404 = path.join(dist, "404.html");

if (!fs.existsSync(indexPath)) {
  console.error("copy-404-html: dist/index.html missing — run vite build first.");
  process.exit(1);
}
fs.copyFileSync(indexPath, dest404);
console.log("Wrote dist/404.html from dist/index.html");
