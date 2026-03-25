/**
 * Copy static images into public/ so Vite emits stable URLs at the site root
 * (same pattern as favicons). Avoids hashed assets/ URLs that can be missed on GitHub Pages deploy.
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");

function copyAvatar() {
  const src = path.join(root, "src", "assets", "avatar.png");
  const dest = path.join(root, "public", "avatar.png");
  if (!fs.existsSync(src)) {
    console.error("copy-static-assets: missing src/assets/avatar.png");
    process.exit(1);
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  console.log("copy-static-assets: wrote public/avatar.png");
}

function copyProjectScreenshots() {
  const srcDir = path.join(root, "src", "assets", "projects");
  const destDir = path.join(root, "public", "projects");
  if (!fs.existsSync(srcDir)) {
    console.error("copy-static-assets: missing src/assets/projects");
    process.exit(1);
  }
  fs.mkdirSync(destDir, { recursive: true });
  let n = 0;
  for (const name of fs.readdirSync(srcDir)) {
    if (!name.endsWith(".png")) continue;
    fs.copyFileSync(path.join(srcDir, name), path.join(destDir, name));
    n += 1;
  }
  console.log(`copy-static-assets: synced ${n} file(s) to public/projects/`);
}

copyAvatar();
copyProjectScreenshots();
