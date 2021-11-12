const path = require('path')

const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  mode: 'development',
  entry: {
    main: resolve('src/index.js')
  },
  output: {
    filename: '[name].js',
    path: resolve('dist')
  },
  devServer: {
    static: resolve('dist'),
    port: 8000
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
