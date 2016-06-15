// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: {
      NODE_ENV: '"production"'
    },
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // gzip off by default as many popular static hosts such as
    // surge or netlify already gzip all static assets for you
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: {
      NODE_ENV: '"development"'
    },
    port: 8080,
    proxyTable: {}
  },
  tesing: {
    env: {
      NODE_ENV: '"testing"'
    }
  }
}
