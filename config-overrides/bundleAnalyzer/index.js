var RuntimeAnalyzerPlugin = require('webpack-runtime-analyzer')
var { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = function rewireBundleAnalyzer(config, env) {
  if (process.env.ANALYZE_BUILD === 'true') {
    config.plugins = [
      ...config.plugins,
      // run npx rempl-cli to check report
      new RuntimeAnalyzerPlugin({
        mode: 'publisher',
        watchModeOnly: true
      }),
      // open bundle/report.html to check report
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: 'report.html',
        defaultSizes: 'parsed',
        generateStatsFile: false,
        logLevel: 'info',
        openAnalyzer: false
      })
    ]
  }

  return config
}
