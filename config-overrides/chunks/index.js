const webpack = require('webpack')

// according to https://webpack.js.org/guides/caching/
module.exports = function rewireOptimizeChunks(config) {
  config.entry = {
    main: config.entry.main || config.entry,
    vendor: process.env.VENDOR
      ? process.env.VENDOR.split(',')
      : ['react', 'react-dom']
  }

  config.plugins = [
    ...config.plugins,
    // make module id's stable
    new webpack.HashedModuleIdsPlugin(),
    // extract shared modules to main chunk from dynamic imports
    new webpack.optimize.CommonsChunkPlugin({
      children: true,
      deepChildren: true,
      minChunks: parseFloat(process.env.MIN_CHUNKS) || 2
    }),
    // extract vendor chunk
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '[name].[chunkhash:8].bundle.js'
    }),
    // extract webpack manifest and runtime
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      filename: 'manifest.[hash:8].js',
      minChunks: Infinity
    })
  ]

  config.output.filename = '[name].[hash:8].bundle.js'
  config.output.chunkFilename = '[name].[chunkhash:8].bundle.js'

  return config
}
