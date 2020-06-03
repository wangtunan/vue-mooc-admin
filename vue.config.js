import path from 'path'
function resolve (dir) {
  return path.resolve(__dirname, dir)
}

export default {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  productionSourceMap: false,
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('api', resolve('src/api'))
      .set('components', resolve('stc/components'))
      .set('views', resolve('src/views'))
      .set('utils', resolve('src/utils'))
  }
}
