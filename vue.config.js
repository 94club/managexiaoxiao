module.exports = {
  runtimeCompiler: true,
  publicPath: '/', // 设置打包文件相对路径
  devServer: {
    // open: process.platform === 'darwin',
    // host: 'localhost',
    port: 8071,
    open: true, //配置自动启动浏览器
    proxy: {
      '/interface': {
        target: 'http://123.124.175.239:7001/selfClaim/interface',
        changeOrigin: true,
        pathRewrite: {
          '^/interface': ''
        }
      }
    }
  }
}
