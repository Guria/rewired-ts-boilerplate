const { compose } = require('react-app-rewired')
const { tsRewireJest, tsRewireWebpack } = require('./ts')
const rewirePolyfills = require('./polyfills')
const rewireOptimizeChunks = require('./chunks')
const rewireBundleAnalyzer = require('./bundleAnalyzer')

module.exports = {
  webpack: compose(
    tsRewireWebpack,
    rewireOptimizeChunks,
    rewirePolyfills,
    rewireBundleAnalyzer
  ),
  jest: compose(tsRewireJest)
}
