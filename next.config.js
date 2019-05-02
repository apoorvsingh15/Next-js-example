// next.config.js
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  cssModules: true
})

module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/next-js-example' : '',
}