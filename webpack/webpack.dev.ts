const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const dev = {
  mode: "development",
  stats: "errors-warnings",
  devtool: "eval",
  devServer: {
    open: true,
    allowedHosts: [".gitpod.io"], // GitPod (gitpod.io) development
  },
};

module.exports = merge(common, dev);
