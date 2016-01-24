/* Webpack configuration options for development mode */
var path = require('path');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

// Start webpack-dev-server auto reload
webpackConfig.entry.push('webpack-dev-server/client?http://localhost:8000');

// Turn on sourcemaps
webpackConfig.devtool = 'source-map';

// Enable loader debug mode
webpackConfig.debug = true;

// Configure wepack-dev-server
webpackConfig.devServer = {
  port: 8000,
  contentBase: './build',
};

// Add linting before ES6 transpiling
webpackConfig.module.preLoaders = [
  {
    test: /\.js$/,
    include: path.join(__dirname, 'src'),
    loader: 'eslint-loader',
  },
];

// Set node environment to 'development'
webpackConfig.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"',
      },
    })
);

module.exports = webpackConfig;
