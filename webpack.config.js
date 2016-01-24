/* A default webpack configuration, that gets adjusted for development, testing
 * and production needs. See webpack.development.config, karma.conf.js, and
 * webpack.production.config
 */
var path = require('path');
var packageJson = require('./package.json');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/main',
  ],
  output: {
    path: 'build',
    publicPath: '/',
    filename: [ 'js/', packageJson.name, '-', packageJson.version, '.js' ].join(''),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: [ 'es2015' ],
          plugins: [ 'transform-runtime' ],
        },
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'src'),
        loader: ExtractTextPlugin.extract('style', 'css', 'sass'),
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        include: path.join(__dirname, 'src'),
        loaders: [
          'file?hash=sha512&digest=hex&name=img\/[hash].[ext]',
          'image-webpack?bypassOnDebug&optimationLevel=7&interlaced=false',
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: [ packageJson.name, '-', packageJson.description ].join(' '),
      template: path.join(__dirname, 'src/index.tpl.html'),
      hash: true,
    }),
    new ExtractTextPlugin([ 'css/', packageJson.name, '-', packageJson.version, '.css' ].join('')),
  ],
  sassLoader: {
    includePaths: [ path.resolve(__dirname, './src') ],
  },
};
