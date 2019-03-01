module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://pro-api.coinmarketcap.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/sass/variables.scss";`
      }
    }
  }
}
