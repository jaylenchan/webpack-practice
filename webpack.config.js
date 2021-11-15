const commonConfig = require('./webpack.common')
const developmentConfig = require('./webpack.dev')
const productionConfig = require('./webpack.prod')
const { merge } = require('webpack-merge')

module.exports = (_env, args) => {
  console.log('args.mode=>', args.mode)
  switch (args.mode) {
    case 'development':
      return merge(commonConfig, developmentConfig)
    case 'production':
      return merge(commonConfig, productionConfig)
    default:
      throw new Error('No matching configuration was found!')
  }
}
