module.exports = function rewirePolyfills(config) {
  const entry = config.entry.main || config.entry
  entry.unshift(require.resolve('./polyfills'))

  return config
}
