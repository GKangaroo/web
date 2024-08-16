const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true,
		// disableHostCheck: true,
    proxy: {
			'/ipv6api': {
                target: 'http://202.112.51.127:8000',
                changeOrigin: true,
                pathRewrite: { '^/ipv6api': '' },
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
