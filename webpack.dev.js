const path = require('path')
const resolve = (dir) => path.resolve(__dirname, dir)
const { DefinePlugin } = require('webpack')

module.exports = {
  mode: 'development',
  watch: true,
  devtool: 'cheap-module-source-map',
  devServer: {
    static: {
      // 其实这个定义不要也行！！！因为其实是output的publicPath决定dist的访问
      directory: resolve('dist'), // 告诉服务器从哪里提供内容
      publicPath: '/' // 告诉服务器在哪个 URL 上提供 static.directory 的内容
    },
    port: 8000,
    // proxy: {
    //   /**
    //    * 工作流程：webpack devserver接到浏览器发来的http://localhost:8000/api/users的请求
    //    * webpack devserver获取/api/users路径，并将其重写，将/api替换成空，最终的重写路径是/users
    //    * 然后webpack devserver将这个路径发送给3000应用服务器，最终的请求是http://localhost:3000/users
    //    * 3000应用服务器发送给webpack devserver响应的数据之后，webpack devserver再将其发送回给浏览器
    //    */
    //   '/api': {
    //     target: 'http://localhost:3000',
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // },
    /**
     * 使用onAfterSetupMiddleware可以将devserver变成mock服务器
     * 这样子方便在后端的应用服务器没开发完成的时候前端自己进行数据mock
     */
    onAfterSetupMiddleware: ({ app }) => {
      app.get('/users', function (_req, res) {
        res.json([
          {
            id: 1,
            name: 'csy'
          },
          {
            id: 2,
            name: 'cjl'
          }
        ])
      })
    }
  },
  plugins: [
    /**
     * 使用DefinePlugin会将里头定义的键值对的key作为全局对象的属性
     * 而值只不过书写形式上是字符串，实际上引用的时候并不是一个个字符串，而是写入的一串串代码，就像你在vscode当中用手敲的一样
     * webpack会在编译时，直接将代码替换成对应的值。
     * 比如：你在前端代码中写入PRODUCTION这个变量，实际上在webpack编译后这个变量会直接变成true。相当于代码的二次加工，最后生成的代码是true，而不是PROCUTION
     */
    new DefinePlugin({
      PRODUCTION: JSON.stringify('false')
    })
  ]
}
