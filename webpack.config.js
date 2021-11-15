const path = require('path')

const resolve = (dir) => path.resolve(__dirname, dir)

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: resolve('src/index.js')
  },
  output: {
    /**
     * ## 单独存放js/css/img
     * 在output的path指定js目录
     * 在MiniCssExtractPlugin的filenam指定css目录
     * 在url-loader的options.outputPath指定img目录
     */
    filename: 'js/[name].js',
    path: resolve('dist'),
    publicPath: '/'
    /* 设定url可以从哪个路径获取path: resolve('dist')所指定的dist这个磁盘目录的内容，
    如果跟devServer.static为directory提供的路径重名，直接覆盖掉static的，会让static的directory没法访问了 */
  },
  devServer: {
    static: {
      // 其实这个定义不要也行！！！因为其实是output的publicPath决定dist的访问
      directory: resolve('img'), // 告诉服务器从哪里提供内容
      publicPath: '/abc/' // 告诉服务器在哪个 URL 上提供 static.directory 的内容
    },
    port: 8000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'eslint-loader',
          options: {
            enforce: 'pre', // 设置匹配js文件时，先走这个loader（这里还有babel-loader，所以要配置这个）
            include: resolve('src'), // 只校验自己写的js
            exclude: /node_modules/ // 不校验node_modules文件
          }
        }
      },
      /**
       * 使用'babel-loader'配合选项预设@babel/preset-env来转译ES6、ES7高级语法
       */
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              [
                /**
                 * Babel 对一些公共方法使用了非常小的辅助代码，比如 _extend。默认情况下会被添加到每一个需要它的文件中
                 * 所以安装@babel/plugin-transform-runtime,@babel/runtime来避免重复引入
                 */
                '@babel/plugin-transform-runtime',
                {
                  corejs: false,
                  helpers: true,
                  regenerator: true,
                  useESModules: true
                }
              ]
            ]
          }
        }
      },
      /**
       * 为了浏览器的兼容性，有时候，我们必须加入-webkit,-ms,-o,-moz这些前缀
       * Trident内核：代表IE浏览器，前缀:-ms
       * Gecko内核：代表Firefox浏览器，前缀：-moz
       * Presto内核：代表Opera浏览器，前缀：-o
       * Webkit内核：代表Chrome和Safari浏览器，前缀：-webkit
       */
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
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
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
            publicPath: '/fonts'
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
    }),
    // 修改1：去除html中的jquery手动引入cdn；
    // 修改2：去除webpack配置文件中的externals选项，添加如下插件并配置
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'jquery', // 包名
          entry: 'http://code.jquery.com/jquery-migrate-1.2.1.min.js', // cdn名
          global: '$' // 从全局对象的哪个属性（全局变量）获取jQuery
        }
      ]
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: resolve('src/static'), to: resolve('dist/static') }]
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
  // externals: {
  //   /**
  //    * 当我们再模块再次import $ from 'jquery'的时候，webpack构建不会再打包jquery
  //    * 而是找到window.$，将这个值赋值给import $的$这个变量。
  //    * 不过这种方式也是有缺陷的：使用的时候必须手动在html中引入cdn，然后在这里配置externals
  //    * 解决的方式是：使用html-webpack-external-plugin
  //    */
  //   jquery: '$' // key是包名，值是包名的全局变量名
  // }
}
