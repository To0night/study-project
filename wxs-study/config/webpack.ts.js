const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./vue3_ts/code/index.js",
  output: {
    path: path.resolve(__dirname),
    filename: "base/123123.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./vue3_ts/code/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: "/node_modules",
        options: {
          configFile: path.resolve(__dirname, "../vue3_ts/code/ts.config.json"),
        },
      },
    ],
  },

  devServer: {
    host: "localhost",
    port: "7002",
    open: true,
    hot: true,
  },
  devtool: "eval-cheap-source-map",
  mode: "development",
};
