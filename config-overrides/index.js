const { tsRewireJest, tsRewireWebpack } = require('./ts')

module.exports = {
  webpack: (config, env) => {
    tsRewireWebpack(config)

    return config
  },
  jest: config => {
    return tsRewireJest(config)
  }
}
