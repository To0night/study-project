const path = require("path");

const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.resolve(__dirname, "../webpack/src/js/index.js"),
  output: {
    // path 配置  所有文件的输出目录 包括但不限于 入口文件 还包括css、less、sass、ts、图片等等
    path: path.resolve(__dirname, "../webpack/dist"),
    // filename配置 主入口文件输出目录
    filename: "js/[name].js",
    // 其他打包文件 一般指动态导入
    chunkFilename: "js/[name].chunk.js",
    // 在打包前 将path整个目录清空删除
    clean: true,
    // 输出资源打包输出目录及文件名
    assetModuleFilename: "images/[hash][ext][query]",
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
            use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
            exclude: "/node_modules",
          },
          {
            test: /\.(png|jpg|gif|svg)$/,
            type: "asset",
            parser: {
              dataUrlCondition: {
                maxSize: 10 * 1024,
              },
            },
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
    new MiniCssExtractPlugin({
      filename: "index.css",
    }),
  ],
  mode: "production",
  devtool: "eval-cheap-source-map",
};
