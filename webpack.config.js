// const HtmlWebpackPlugin = require('html-webpack-plugin'); // 自动插入生成html插件
// const extractTextPlugin = require('extract-text-webpack-plugin'); // 从vue模块中提取css插件
// const webpack = require('webpack');
import path from 'path';
import glob from 'glob';
// import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  // entry: {
  //  index: './dist/js/views/index.js'
  // }, // 入口文件

  output: { // 出口配置
    // path: __dirname + '/dist/js/', // 出口文件的路径
    filename: '[name].js', // 出口文件的文件名
  },

  module: {
    rules: [ // 加载器的集合
      // {
      //   test: /\.vue$/,
      //   loader: 'vue-loader',
      //   exclude: '/node_modules/'
      //   // options: {
      //   //   loaders: {
      //   //     css: extractTextPlugin.extract({
      //   //       loader: 'css-loader', // 比填项，用于将资源转换为css导出模块
      //   //       fallbackLoader: 'vue-style-loader' // 当css没有被导出的时候这里的 loader(s) 会被使用 （即当在plugins模块中设置allChunks:false的时候）
      //   //     })
      //   //   }
      //   // }
      // },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: ['babel-loader', 'eslint-loader', ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader',], // style为插入html的样式，css为href引入的样式
      },
    ],
  },

  // devtool: 'eval-source-map',

  devServer: {
    // 配置监听接口
    port: 8080,

    // historyApiFallback用来配置页面重定向
    historyApiFallback: true,

    inline: true,

    hot: true,
  },

  plugins: [
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    // }),
    // new HtmlWebpackPlugin({
    //   template: './index.html',
    // }),
    // new extractTextPlugin({
    //   filename: './dist/css/style.css', // 被导出的css文件的路径及名字s
    //   allChunks: true, // 从所有附加块中提取（默认只从初始块提取）
    // }),

  ],
  resolve: {
    // require时省略的扩展名，如：require('app') 不需要app.js
    // extensions: ['.js', '.vue',],
    // 别名，可以直接使用别名来代表设定的路径以及其他
    // alias: {
    //   jquery: 'dist/libs/jquery/jquery-3.1.1.js',
    // },
  },
};
