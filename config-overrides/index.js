const { tsRewireJest, tsRewireWebpack } = require('./ts')
const rewirePolyfills = require('./polyfills')

module.exports = {
  webpack: (config, env) => {
    tsRewireWebpack(config)
    rewirePolyfills(config)

    return config
  },
  jest: config => {
    return tsRewireJest(config)
  }
}
