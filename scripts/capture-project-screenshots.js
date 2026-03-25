/**
 * Capture viewport screenshots of project URLs into src/assets/projects/.
 * Requires: npx playwright install (Chromium).
 * Run: npm run capture:projects
 */
const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const OUT = path.join(__dirname, "..", "src", "assets", "projects");
fs.mkdirSync(OUT, { recursive: true });

const jobs = [
  ["https://zenius.ia.br", "zenius.png"],
  ["https://jazzmine-flora.github.io/news-explorer/", "news-explorer.png"],
  ["https://tmi-world-welcome.lovable.app/", "tmi-worldwide.png"],
  ["https://time-keeper-crafted.lovable.app/", "time-keeper.png"],
  ["https://jazzmine-flora.github.io", "portfolio.png"],
  ["https://www.wat2wear.twilightparadox.com/", "wtwr.png"],
  ["https://jazzmine-flora.github.io/expense-tracker/", "expense-tracker.png"],
  ["https://girly-blogspot.vercel.app/", "girly-blog.png"],
];

for (const [url, file] of jobs) {
  const outFile = path.join(OUT, file);
  const cmd = `npx playwright screenshot -b chromium --viewport-size 1440,810 --wait-for-timeout 6000 "${url}" "${outFile}"`;
  process.stdout.write(`Capturing ${file} ... `);
  try {
    execSync(cmd, { stdio: "pipe", cwd: path.join(__dirname, ".."), shell: true });
    console.log("ok");
  } catch (e) {
    console.log("failed");
    console.error(e.message);
  }
}
