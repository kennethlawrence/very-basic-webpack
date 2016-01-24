/* Webpack configuration options for production mode */
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var packageJson = require('./package.json');

// Set output directory
webpackConfig.output.path = 'dist';

// Change output filenames to reflect minimization
webpackConfig.output.filename = [
  'js/', packageJson.name,
  '-', packageJson.version, '.min.js',
].join('');

// Set node environment to 'development'
webpackConfig.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': '"development"',
    },
  })
);

module.exports = webpackConfig;
