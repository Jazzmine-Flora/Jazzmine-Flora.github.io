/**
 * Copy hero avatar to public/ so Vite emits /avatar.png at the site root.
 * Stable URL survives GitHub Pages deploy (same pattern as favicon files in public/).
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const src = path.join(root, "src", "assets", "avatar.png");
const dest = path.join(root, "public", "avatar.png");

if (!fs.existsSync(src)) {
  console.error("copy-avatar-to-public: missing src/assets/avatar.png");
  process.exit(1);
}

fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.copyFileSync(src, dest);
console.log("copy-avatar-to-public: wrote public/avatar.png");
