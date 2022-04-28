module.exports = {
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       prependData: `
  //         @import "~@/_variables.scss";
  //       `
  //     }
  //   }
  // },
  
  // chainWebpack: config => {
  //   config.module.rules.delete('eslint');
  // },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/e-commence/'
    : './'
}