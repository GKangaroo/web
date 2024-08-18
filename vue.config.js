const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true,
		// disableHostCheck: true,
    proxy: {
			'/ipv6api': {
                target: 'http://202.112.51.127:9870',
                changeOrigin: true,
                pathRewrite: { '^/ipv6api': '' },
            },
      '/ipv6api2': {
                target: 'http://192.168.117.143:9870',
                changeOrigin: true,
                pathRewrite: { '^/ipv6api2': '' },
            },
      '/dnssecapi': {
                target: 'http://192.168.2.16:9870',
                changeOrigin: true,
                pathRewrite: { '^/dnssecapi': '' },
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
