'use strict';
const webpack = require('webpack');

module.exports = {
  entry: {
    Slate: "./js/components/slate/slate-editor.js",
  },
  output: {
    filename: '[name].js',
    path: __dirname + "/js/components/",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            plugins: ['transform-runtime']
          },
        }],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  }
};