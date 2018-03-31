const { compose, getBabelLoader, getLoader } = require('react-app-rewired')
const paths = require('react-app-rewired/scripts/utils/paths')

function rewireBabel(config) {
  config.resolve.extensions.push('.ts', '.tsx')
  const babelLoader = getBabelLoader(config.module.rules)
  Object.assign(babelLoader, {
    test: /\.tsx?$/,
    use: [
      { loader: babelLoader.loader, options: babelLoader.options },
      {
        loader: 'ts-loader',
        options: {
          compilerOptions: {
            noUnusedLocals: process.env.NODE_ENV === 'production'
          }
        }
      }
    ]
  })
  delete babelLoader.options
  delete babelLoader.loader

  return config
}

function rewireEslint(config) {
  const eslintLoader = getLoader(
    config.module.rules,
    rule => rule.loader && rule.loader === require.resolve('eslint-loader')
  )
  const preLoaders = getLoader(
    config.module.rules,
    rule => rule.enforce === 'pre'
  )
  preLoaders.test = /\.(ts|tsx|js|jsx)$/

  eslintLoader.options.useEslintrc = true
  eslintLoader.options.ignore = true
  return config
}

function tsRewireJest(config) {
  return Object.assign(config, {
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
    // setupTestFrameworkScriptFile: '<rootDir>/src/setupTests.ts',
    moduleFileExtensions: [
      'web.ts',
      'ts',
      'web.tsx',
      'tsx',
      ...config.moduleFileExtensions
    ],
    testMatch: [
      '<rootDir>/src/**/__tests__/**/*.(t|j)s?(x)',
      '<rootDir>/src/**/?(*.)(spec|test).(t|j)s?(x)'
    ],
    transform: Object.assign(
      { '^.+\\.tsx?$': require.resolve('./typescriptTransform.js') },
      config.transform
    ),
    transformIgnorePatterns: [
      '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$'
    ],
    globals: {
      'ts-jest': {
        tsConfigFile: require.resolve(paths.appPath + '/tsconfig.test.json')
      }
    }
  })
}

module.exports = {
  tsRewireWebpack: compose(rewireBabel, rewireEslint),
  tsRewireJest: compose(tsRewireJest)
}
