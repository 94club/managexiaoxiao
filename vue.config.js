module.exports = {
  runtimeCompiler: true,
  publicPath: '/', // 设置打包文件相对路径
  devServer: {
    // open: process.platform === 'darwin',
    // host: 'localhost',
    // port: 8071,
    // open: true, //配置自动启动浏览器
    // proxy: {
    //   '/interface': {
    //     target: 'http://123.124.175.239:7001/selfClaim/interface',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/interface': ''
    //     }
    //   }
    // }
  },
  baseUrl: '/', // 部署应用时的根路径(默认'/'),也可用相对路径(存在使用限制)

  outputDir: 'dist', // 运行时生成的生产环境构建文件的目录(默认''dist''，构建之前会被清除)

  assetsDir: 'public', //放置生成的静态资源(s、css、img、fonts)的(相对于 outputDir 的)目录(默认'')

  indexPath: 'index.html', //指定生成的 index.html 的输出路径(相对于 outputDir)也可以是一个绝对路径。
}
