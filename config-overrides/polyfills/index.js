module.exports = function rewirePolyfills(config) {
  config.entry = [require.resolve('./polyfills'), ...config.entry]

  return config
}
