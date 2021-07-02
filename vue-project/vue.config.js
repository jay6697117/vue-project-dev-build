// const path = require('path')
// const webpack = require('webpack')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CompressionWebpackPlugin = require('compression-webpack-plugin') // 开启gzip压缩,按需引用
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i // 开启gzip压缩,按需写入
const TerserPlugin = require('terser-webpack-plugin')
const merge = require('webpack-merge')

const express = require('express')
// eslint-disable-next-line
const app = express()
// console.log(`app:`, app)
const publicPath = process.env.NODE_ENV === 'production' ? '/prod/' : '/dev/'

// function resolve(dir) {
//   return path.join(__dirname, dir)
// }

module.exports = {
  publicPath, // 二级目录
  outputDir: 'dist', // 打包输出的文件名
  productionSourceMap: true, // 开启关闭source map
  // 合并修改webpack配置
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .tap(options =>
        merge(options, {
          limit: 5120 // 5M
        })
      )
  },
  // eslint-disable-next-line
  configureWebpack: config => {
    return {
      plugins: [
        // new BundleAnalyzerPlugin({
        //   // analyzerMode: 'disabled',
        //   analyzerMode: 'server',
        //   analyzerHost: '127.0.0.1',
        //   analyzerPort: 8888, // 运行后的端口号
        //   reportFilename: 'report.html',
        //   defaultSizes: 'parsed',
        //   // openAnalyzer: true,
        //   openAnalyzer: false, // 自动打开analyzer
        //   generateStatsFile: false,
        //   statsFilename: 'stats.json',
        //   statsOptions: null,
        //   logLevel: 'info'
        // }),
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: productionGzipExtensions,
          threshold: 100,
          minRatio: 0.8
        })
      ],
      optimization: {
        minimizer: [
          new TerserPlugin({
            sourceMap: false,
            terserOptions: {
              compress: {
                warnings: false,
                drop_console: true, // 去除console
                drop_debugger: true, // 去除debugger
                pure_funcs: ['console.log']
              }
            }
          })
        ]
      }
    }
  },
  devServer: {
    open: true, // 是否自动打开浏览器页面
    host: '0.0.0.0', // 指定使用一个 host。默认是 localhost
    port: 8080, // 端口地址
    https: false, // 使用https提供服务
    proxy: null, // string | Object 代理设置
    // 提供在服务器内部的其他中间件之前执行自定义中间件的能力
    before: app => {
      // `app` 是一个 express 实例
      console.log(`\ndevServer app:`, app)
    }
  }
}
