const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true,
		historyApiFallback: true,
    allowedHosts: "all",
    proxy: {
      '/iPv6api2': {
                target: 'http://192.168.117.143:9870',
                changeOrigin: true,
                pathRewrite: { '^/iPv6api2': '' },
            },
			'/ipv6api': {
                target: 'http://202.112.51.127:9870',
                changeOrigin: true,
                pathRewrite: { '^/ipv6api': '' },
            },
      '/liushimingApi1': {
                target: 'http://192.168.2.16:5000',
                changeOrigin: true,
                pathRewrite: { '^/liushimingApi1': '' },
            },
      '/liushimingApi2': {
                target: 'http://192.168.2.29:5000',
                changeOrigin: true,
                pathRewrite: { '^/liushimingApi2': '' },
            },
      '/cuishiboApi1': {
                target: 'http://192.168.2.3:5000',
                changeOrigin: true,
                pathRewrite: { '^/cuishiboApi1': '' },
            },
      '/cuishiboApi2': {
                target: 'http://192.168.2.2:5000',
                changeOrigin: true,
                pathRewrite: { '^/cuishiboApi2': '' },
            },
		},
    port: 3030
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'web';
      return args;
    })
  }
})
