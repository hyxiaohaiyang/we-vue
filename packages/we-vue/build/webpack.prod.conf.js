const path = require('path')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const utils = require('./utils')

module.exports = merge(baseWebpackConfig, {
  entry: {
    'we-vue': './src/index.ts'
  },
  module: {
    rules: utils.styleLoaders({
      sourceMap: false,
      usePostCSS: true,
      extract: true
    })
  },
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/dist/',
    library: 'we-vue',
    libraryTarget: 'umd',
    libraryExport: 'default',
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  }
})