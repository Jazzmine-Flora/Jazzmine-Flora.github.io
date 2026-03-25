import { readFileSync } from "fs";
import { resolve } from "path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

const pkg = JSON.parse(readFileSync(resolve(process.cwd(), "package.json"), "utf-8")) as {
  version: string;
};

function faviconVersionPlugin(): Plugin {
  return {
    name: "favicon-version",
    transformIndexHtml(html) {
      return html.replace(/%FAVICON_V%/g, pkg.version);
    },
  };
}

const devPort = (() => {
  const n = Number.parseInt(process.env.PORT || "", 10);
  return Number.isFinite(n) && n > 0 ? n : 8080;
})();

export default defineConfig({
  plugins: [react(), faviconVersionPlugin()],
  base: "/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },
  server: {
    host: "127.0.0.1",
    port: devPort,
    open: true,
    strictPort: false,
  },
  preview: {
    port: 4173,
  },
});
