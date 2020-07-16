module.exports = {
  devServer: {
    port: 8111,
    open: true,
    overlay: false
  },
  css: {
    loaderOptions: {
      sass: {
        // eslint-disable-next-line quotes
        prependData: `@import "~@/style/index.scss";`
      }
    }
  }
}
