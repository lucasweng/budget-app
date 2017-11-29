const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const VENDOR_LIBS = [
  'react',
  'react-dom',
  'react-redux',
  'react-router-dom',
  'react-dates',
  'redux',
  'uuid',
  'moment',
  'numeral'
];

module.exports = {
  entry: {
    bundle: './src/app.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['public/dist']),
    // Browsers will do assets caching for vendor
    // 3rd party libs don't change very often, so the load-time will decrease at second visit.
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: '../index.html'
    }),
    new ExtractTextPlugin('style.css')
  ],
  devtool: 'source-map'
};
