/* Configuration for karma test runner to run jasmine spec tests */
var webpackConfig = require('./webpack.config.js');

// Remove default webpack entry points
webpackConfig.entry = [];

// Set inline source maps
webpackConfig.devtool = 'inline-source-map';

// Enable file watching
webpackConfig.module.watch = true;

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: [ 'jasmine' ],
    reporters: [ 'progress' ],
    browsers: [ 'PhantomJS' ],
    singleRun: false,
    port: 9876,
    autoWatch: true,
    files: [
      {
        pattern: 'webpack.testing.index.js',
        watched: false,
      },
    ],
    preprocessors: {
      'webpack.testing.index.js': [ 'webpack', 'sourcemap' ],
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true,
    },
    browserNoActivityTimeout: 15000,
  });
};
