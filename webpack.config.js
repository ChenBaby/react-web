const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    path.resolve(__dirname, 'src/index.jsx'),
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', 'css', 'less'],
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        // 只有jsx或者js文件会被编译

        loader: 'babel-loader',

        // 在node_modules的文件不被babel编译
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],

        // src的文件会被babel编译
        include: [
          path.resolve(__dirname, 'src'),
        ],

        query: {

          // babel支持把以下格式编译成 ES5语法
          presets: [
            'es2015', // ES6
            'stage-0', // ES7
            'react', // JSX
          ],
        },
      }, { // Webpack 中针对 node_modules 中的依赖包单独写一个 loader 规则，不开启 css module ，并且给自己的代码打开 css module
        test: /\.css|.less$/,
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        loader: 'style-loader!css-loader?modules&localIdentName=[local]!less-loader',
      }, { // 下面是 ant design 样式专属配置文件
        test: /\.css$/,
        exclude: path.resolve(__dirname, 'src'),
        loader: 'style-loader!css-loader?importLoaders=1',
      }, {
        test: /\.png|.jpg$/,
        loader: 'url-loader?limit=8192',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    port: 3000,
    stats: 'errors-only', // 命令行只打印错误的显示
    inline: true, // 自动刷新页面
    historyApiFallback: { // 解决BrowserRouter刷新问题
      index: './',
    },
  },
}
