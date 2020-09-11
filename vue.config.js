module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/constraints.scss";`,
      },
    },
  },
}; // vue.config.js
