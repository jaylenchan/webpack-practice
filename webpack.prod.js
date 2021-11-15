const path = require('path')
const resolve = (dir) => path.resolve(__dirname, dir)

const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { DefinePlugin } = require('webpack')

module.exports = {
  mode: 'development',
  plugins: [
    /**
     * 使用DefinePlugin会将里头定义的键值对的key作为全局对象的属性
     * 而值只不过书写形式上是字符串，实际上引用的时候并不是一个个字符串，而是写入的一串串代码，就像你在vscode当中用手敲的一样
     * webpack会在编译时，直接将代码替换成对应的值。
     * 比如：你在前端代码中写入PRODUCTION这个变量，实际上在webpack编译后这个变量会直接变成true。相当于代码的二次加工，最后生成的代码是true，而不是PROCUTION
     */
    new DefinePlugin({
      PRODUCTION: JSON.stringify('true')
    })
  ],
  optimization: {
    minimize: false, // true为在开发环境下启用 CSS 优化
    minimizer: [
      new TerserPlugin({
        parallel: true // 开启并行打包
      }),
      new CssMinimizerPlugin({
        parallel: true
      })
    ]
  }
}
