const { tsRewireJest, tsRewireWebpack } = require('./ts')
const rewirePolyfills = require('./polyfills')
const rewireBundleAnalyzer = require('./bundleAnalyzer')

module.exports = {
  webpack: (config, env) => {
    tsRewireWebpack(config)
    rewirePolyfills(config)
    rewireBundleAnalyzer(config)

    return config
  },
  jest: config => {
    return tsRewireJest(config)
  }
}
