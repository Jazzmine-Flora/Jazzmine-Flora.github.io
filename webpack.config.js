const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const isProd = argv.mode === "production";

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
        template: "./public/index.html",
        filename: "index.html",
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        filename: "404.html",
        inject: true,
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
      historyApiFallback: true,
      port: 8080,
      open: true,
    },
  };
};
