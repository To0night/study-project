const path = require("path");

const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "../webpack/src/js/index.js"),
  output: {
    // path 配置  所有文件的输出目录 包括但不限于 入口文件 还包括css、less、sass、ts、图片等等 但是
    // path: path.resolve(__dirname, "../webpack/dist"),
    path: undefined, // 开发模式在开发服务器上预览 其实可以不用定义
    // filename配置 主入口文件输出目录
    filename: "js/main.js",
    // 在打包前 将path整个目录清空删除
    // clean: true,
  },
  module: {
    rules: [
      // 处理ts文件的loader
      {
        oneOf: [
          {
            test: /\.ts$/,
            loader: "ts-loader",
            exclude: "/node_modules",
            options: {
              configFile: path.resolve(
                __dirname,
                "../vue3_ts/code/ts.config.json"
              ),
            },
          },
          // 使用style-loader处理css文件
          {
            test: /\.less$/,
            use: ["style-loader", "css-loader", "less-loader"],
            exclude: "/node_modules",
          },
          {
            test: /\.(png|jpg|gif|svg)$/,
            type: "asset",
          },
        ],
      },
    ],
  },
  plugins: [
    // 结构与原html文件结构一致 且会自动引入打包资源
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "../webpack/src/html/index.html"),
    }),
  ],
  devServer: {
    host: "localhost",
    port: "7002",
    open: true,
    hot: true,
  },
  mode: "development",
  devtool: "eval-cheap-source-map",
};
