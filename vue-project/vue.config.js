// const path = require('path')
// const webpack = require('webpack')
const merge = require('webpack-merge')
const publicPath = process.env.NODE_ENV === 'production' ? '/subpath/' : '/'

module.exports = {
  publicPath,
  outputDir: 'dist',
  productionSourceMap: true,
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .tap(options =>
        merge(options, {
          limit: 5120
        })
      )
  },
  devServer: {
    open: true, // 是否自动打开浏览器页面
    host: '0.0.0.0', // 指定使用一个 host。默认是 localhost
    port: 8080, // 端口地址
    proxy: null // string | Object 代理设置
  }
}
