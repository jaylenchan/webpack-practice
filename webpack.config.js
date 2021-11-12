const path = require('path')

const resolve = (dir) => path.resolve(__dirname, dir)

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: {
    main: resolve('src/index.js')
  },
  output: {
    filename: '[name].js',
    path: resolve('dist'),
    publicPath: '/dist/' // publichPath这里指定的是一个非本地的服务器要部署资源的地方
    // 比如：127.0.0.1:5000/ 部署在这个服务器路径的/dist/就是相等于于底下在devserver指定的static:resolve('dist')的作用
  },
  devServer: {
    static: resolve('dist'), // static这里直接指定了server访问127.0.0.1:8000/的磁盘
    port: 8000
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|png|jpeg|gif|svg|webep)$/,
        use: 'file-loader'
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
    })
  ]
}
