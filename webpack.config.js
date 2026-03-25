const fs = require("fs");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const publicDir = path.join(__dirname, "public");
const faviconNames = ["favicon.ico", "favicon.png", "apple-touch-icon.png"];

const faviconSource = path.join(__dirname, "src", "assets", "favicon.png");
if (!fs.existsSync(faviconSource)) {
  console.warn(
    "[webpack] Missing src/assets/favicon.png. Add it, then run npm run generate:favicon (prestart runs before dev)."
  );
}

const pkg = require("./package.json");

const devServerPort = Number.parseInt(process.env.PORT || "", 10);
const devPort = Number.isFinite(devServerPort) && devServerPort > 0 ? devServerPort : 8080;

module.exports = (env, argv) => {
  const isProd = argv.mode === "production";
  // Pass faviconV on plugin options (htmlWebpackPlugin.options), not templateParameters.
  const htmlPluginOptions = {
    template: "./public/index.html",
    faviconV: pkg.version,
  };

  return {
    entry: "./src/index.tsx",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      // Root deployment at https://jazzmine-flora.github.io (user site)
      publicPath: "/",
      clean: true,
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(ico|png|jpg|jpeg|gif|svg)$/i,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        ...htmlPluginOptions,
        filename: "index.html",
      }),
      new HtmlWebpackPlugin({
        ...htmlPluginOptions,
        filename: "404.html",
        inject: true,
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: "public/favicon.png", to: "favicon.png" },
          { from: "public/favicon.ico", to: "favicon.ico" },
          { from: "public/apple-touch-icon.png", to: "apple-touch-icon.png" },
          {
            from: "public/.nojekyll",
            to: ".nojekyll",
            toType: "file",
            noErrorOnMissing: true,
          },
        ],
      }),
    ],
    devServer: {
      static: {
        directory: publicDir,
        publicPath: "/",
        watch: true,
      },
      // Only fall back to index.html for navigations that expect HTML (not /favicon.ico, assets, etc.)
      historyApiFallback: {
        index: "/index.html",
        disableDotRule: true,
      },
      setupMiddlewares: (middlewares, devServer) => {
        if (!devServer) {
          throw new Error("webpack-dev-server is not defined");
        }
        // Serve tab icons from public/ before SPA fallback (fixes default “globe” on localhost)
        const servePublicIcons = (req, res, next) => {
          // Strip query (e.g. ?v=1.0.1). On Windows, path.basename("/favicon.png?v=1") is "favicon.png?v=1"
          // and would never match the favicon filenames.
          const pathname = String(req.path || req.url || "").split("?")[0];
          const base = path.posix.basename(pathname.replace(/\\/g, "/"));
          if (!faviconNames.includes(base)) {
            return next();
          }
          const filePath = path.join(publicDir, base);
          if (!fs.existsSync(filePath)) {
            return next();
          }
          res.setHeader("Cache-Control", "no-cache");
          return res.sendFile(path.resolve(filePath));
        };
        middlewares.unshift(servePublicIcons);
        return middlewares;
      },
      port: devPort,
      open: true,
    },
  };
};
