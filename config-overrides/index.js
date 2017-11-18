const { compose } = require('react-app-rewired')
const { tsRewireJest, tsRewireWebpack } = require('./ts')
const rewirePolyfills = require('./polyfills')
const rewireBundleAnalyzer = require('./bundleAnalyzer')

module.exports = {
  webpack: compose(tsRewireWebpack, rewirePolyfills, rewireBundleAnalyzer),
  jest: compose(tsRewireJest)
}
