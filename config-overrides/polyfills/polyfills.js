// React 16 relies on Set and Map
require('core-js/fn/set')
require('core-js/fn/map')
// Some ES6 syntax features transpiled by Babel requires ES6 runtime features
require('core-js/fn/array/find')
require('core-js/fn/array/includes')
require('core-js/fn/number/is-nan')

// Required for React 16
global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0)
}
