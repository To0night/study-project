// Node.js核心模块
const path = require("path");

// HtmlWebpackPlugin插件使用，将入口文件编译之后的文件自动插入到新建的html文件中去
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: `/src/js/index.js`,
    count: `/src/js/count.js`,
  },
  output: {
    path: path.resolve(__dirname, "../base"),
    filename: "[name].js",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader", "less-loader"],
          },
          {
            test: /\.less$/,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
    ],
  },
  //   插件
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/html/index.html",
    }),
  ],
  devServer: {
    host: "localhost",
    port: "7002",
    open: true,
    hot: true,
  },
  devtool: "eval-cheap-source-map",
  mode: "development",
};
