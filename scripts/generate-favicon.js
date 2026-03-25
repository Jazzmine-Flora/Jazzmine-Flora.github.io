/**
 * Build favicon files from src/assets/favicon.png into public/.
 * Run: node scripts/generate-favicon.js
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = path.join(__dirname, "..");
const src = path.join(root, "src", "assets", "favicon.png");
const publicDir = path.join(root, "public");

async function main() {
  if (!fs.existsSync(src)) {
    console.error("Missing src/assets/favicon.png. Add your favicon image there first.");
    process.exit(1);
  }

  const buf32 = await sharp(src)
    .resize(32, 32, { fit: "cover", position: "centre" })
    .png()
    .toBuffer();

  const buf16 = await sharp(src)
    .resize(16, 16, { fit: "cover", position: "centre" })
    .png()
    .toBuffer();

  const faviconPng = path.join(publicDir, "favicon.png");
  fs.writeFileSync(faviconPng, buf32);

  const { default: pngToIco } = await import("png-to-ico");
  const icoBuf = await pngToIco([buf16, buf32]);
  fs.writeFileSync(path.join(publicDir, "favicon.ico"), icoBuf);

  await sharp(src)
    .resize(180, 180, { fit: "cover", position: "centre" })
    .png()
    .toFile(path.join(publicDir, "apple-touch-icon.png"));

  console.log("Wrote public/favicon.png, favicon.ico, apple-touch-icon.png from src/assets/favicon.png");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
