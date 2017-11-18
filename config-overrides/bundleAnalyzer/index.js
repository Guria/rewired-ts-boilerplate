var RuntimeAnalyzerPlugin = require('webpack-runtime-analyzer')
var { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = function rewireBundleAnalyzer(config, env) {
  config.plugins = [
    ...config.plugins,
    // run npx rempl-cli to check report
    process.env.ANALYZE_RUNTIME === 'true'
      ? new RuntimeAnalyzerPlugin({
          mode: 'publisher',
          watchModeOnly: false
        })
      : [],
    // open bundle/report.html to check report
    process.env.ANALYZE_BUNDLE === 'true'
      ? new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: 'report.html',
          defaultSizes: 'parsed',
          generateStatsFile: false,
          logLevel: 'info',
          openAnalyzer: false
        })
      : []
  ]

  return config
}
