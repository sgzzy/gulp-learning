const HtmlWebpackPlugin = require('html-webpack-plugin'); // 自动插入生成html插件
const extractTextPlugin = require('extract-text-webpack-plugin'); // 从vue模块中提取css插件
// const webpack = require('webpack')
const path = require('path');

module.exports = {
  entry: './src/js/main.js', // 入口文件

  output: { // 出口配置
    path: path.resolve(__dirname, './dist/'), // 出口文件的路径
    filename: 'bundle.js', // 出口文件的文件名
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
        use: ['babel-loader', 'eslint-loader',]
      },
      {
        test: /\.css$/,
        loader: extractTextPlugin.extract('css-loader'), // style为插入html的样式，css为href引入的样式
      },
    ],
  },

  devtool: 'eval-source-map',

  devServer: {
    // 配置监听接口
    port: 8080,

    // historyApiFallback用来配置页面重定向
    historyApiFallback: true,

    color: true,

    inline: true,

    hot: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new extractTextPlugin({
      filename: './style.css', // 被导出的css文件的路径及名字
      allChunks: true, // 从所有附加块中提取（默认只从初始块提取）
    }),
  ],
  // resolve: {
  //   // require时省略的扩展名，如：require('app') 不需要app.js
  //   extensions: ['.js', '.vue',],
  //   // 别名，可以直接使用别名来代表设定的路径以及其他
  //   // alias: {
  //   //   filter: path.join(__dirname, './src/filters'),
  //   //   vue$: 'vue/dist/vue.common.js',
  //   //   components: path.join(__dirname, './src/components')
  //   // }
  // },
};
