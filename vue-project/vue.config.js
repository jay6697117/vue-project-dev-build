const publicPath = process.env.NODE_ENV === 'production' ? '/subpath/' : '/'

module.exports = {
  publicPath,
  outputDir: 'output',
  devServer: {
    open: true, // 是否自动打开浏览器页面
    host: '0.0.0.0', // 指定使用一个 host。默认是 localhost
    port: 8080, // 端口地址
    proxy: null // string | Object 代理设置
  }
}
