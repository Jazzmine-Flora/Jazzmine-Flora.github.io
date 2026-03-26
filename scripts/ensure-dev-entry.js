/**
 * Ensures root index.html points to the Vite dev entry (/src/index.tsx)
 * instead of a pre-built asset bundle.
 *
 * WHY: When merging the deployed `main` branch (which contains built HTML)
 * into the development branch, Git overwrites index.html with the production
 * version that references hashed JS/CSS bundles. Vite then builds against
 * those stale bundles instead of our source code, producing a broken build
 * with ~4 modules instead of ~700.
 *
 * This script runs automatically before `dev` and `build` via npm hooks.
 */
const fs = require("fs");
const path = require("path");

const indexPath = path.join(__dirname, "..", "index.html");

if (!fs.existsSync(indexPath)) {
  console.error("ensure-dev-entry: index.html not found at project root.");
  process.exit(1);
}

let html = fs.readFileSync(indexPath, "utf-8");

const devEntry = '<script type="module" src="/src/index.tsx"></script>';
const builtPattern = /\s*<script\b[^>]*\bsrc="\/assets\/index-[^"]+\.js"[^>]*><\/script>\s*\n?\s*<link\b[^>]*\bhref="\/assets\/index-[^"]+\.css"[^>]*>/;

if (html.includes("/src/index.tsx")) {
  // Already correct
  process.exit(0);
}

if (builtPattern.test(html)) {
  html = html.replace(builtPattern, `\n    ${devEntry}`);
  fs.writeFileSync(indexPath, html, "utf-8");
  console.log("ensure-dev-entry: Fixed index.html — replaced built asset refs with /src/index.tsx");
} else {
  console.error(
    "ensure-dev-entry: index.html has no /src/index.tsx entry and no recognisable built pattern.\n" +
    "  Please manually set the script tag to: " + devEntry
  );
  process.exit(1);
}
