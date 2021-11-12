const path = require('path')

const resolve = (dir) => path.resolve(__dirname, dir)

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: resolve('src/index.js')
  },
  output: {
    filename: '[name].js',
    path: resolve('dist'),
    publicPath: '/'
    /*设定url可以从哪个路径获取path: resolve('dist')所指定的dist这个磁盘目录的内容，
    如果跟devServer.static为directory提供的路径重名，直接覆盖掉static的，会让static的directory没法访问了*/
  },
  devServer: {
    static: {
      //其实这个定义不要也行！！！因为其实是output的publicPath决定dist的访问
      directory: resolve('img'), //告诉服务器从哪里提供内容
      publicPath: '/abc/' //告诉服务器在哪个 URL 上提供 static.directory 的内容
    },
    port: 8000
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(jpg|png|jpeg|gif|svg|webep)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img/', // 放到output的path目录下的什么地方，这里就是放到output的path（这里是dist）下的img下
            publicPath: '/img', // 指定图片的访问url，必须以output的publicPath为基准，最起码output中的publicPath有的这也要有
            limit: 7000 // 小于7k的图片全部变base64内嵌
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolve('public/index.html'),
      filename: 'index.html',
      hash: true,
      inject: 'body'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css', // name是代码块chunk的名字
      chunkFilename: 'css/[id].css' // 在异步加载的时候使用的
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true, // 开启并行打包
      })
    ]
  }
}
