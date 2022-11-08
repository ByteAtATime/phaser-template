import { Configuration } from "webpack";
import { join, resolve } from "path";
import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as CopyWebpackPlugin from "copy-webpack-plugin";

const config: Configuration = {
  entry: ["./src/index.ts"],
  output: {
    path: resolve(__dirname, "../build"),
    filename: "[name].bundle.js",
    chunkFilename: "[name].chunk.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [{ test: /\.tsx?$|\.jsx?$/, include: join(__dirname, "../src"), loader: "ts-loader" }],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
          filename: "[name].bundle.js",
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({ gameName: "My Phaser Game", template: "./index.html" }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "./res", to: "res" },
        { from: "./favicon.ico", to: "" },
      ],
    }),
  ],
};

export default config;
