// export rewired config for 3rd party tools like react-cosmos
// TODO: contribute back helper to react-app-rewired
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const paths = require('react-app-rewired/scripts/utils/paths')
// Load environment variables from .env files
require(paths.scriptVersion + '/config/env')

const webpackConfig = paths.scriptVersion + '/config/webpack.config.dev'
const config = require(webpackConfig)
const override = require(paths.configOverrides)
const overrideFn =
  typeof override === 'function'
    ? override
    : override.webpack || ((config, env) => config)

module.exports = overrideFn(config, process.env.NODE_ENV)
