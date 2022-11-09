import { merge } from "webpack-merge";
import common from "./webpack.common";
import WebpackObfuscator from "webpack-obfuscator";

const prod = {
  mode: "production" as "production",
  stats: "errors-warnings" as "errors-warnings",
  output: {
    filename: "[name].[contenthash].bundle.js",
    chunkFilename: "[name].[contenthash].chunk.js",
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          filename: "[name].[contenthash].bundle.js",
        },
      },
    },
  },
  plugins: [
    new WebpackObfuscator(
      {
        rotateStringArray: true,
        stringArray: true,
        stringArrayThreshold: 0.75,
      },
      ["vendors.*.js", "sw.js"],
    ),
  ],
};

module.exports = merge(common, prod);
