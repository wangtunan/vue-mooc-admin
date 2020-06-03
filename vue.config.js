const path = require('path')

function resolve (dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  productionSourceMap: false,
  lintOnSave: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        api: resolve('src/api'),
        assets: resolve('src/assets/styles'),
        components: resolve('src/components'),
        utils: resolve('src/utils'),
        views: resolve('src/views'),
        types: resolve('src/types')
      }
    }
  },
  devServer: {
    port: 3000
  }
}
