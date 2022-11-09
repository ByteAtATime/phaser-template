import { merge } from "webpack-merge";
import common from "./webpack.common";

const dev = {
  mode: "development" as "development",
  stats: "errors-warnings" as "errors-warnings",
  devtool: "eval",
  devServer: {
    open: true,
    allowedHosts: [".gitpod.io"], // GitPod (gitpod.io) development
  },
};

export default merge(common, dev);
