module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // eslint-disable-next-line quotes
        prependData: `@import "~@/style/index.scss";`
      }
    }
  }
}
