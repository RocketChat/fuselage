'use strict';

const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env, argv) => ({
  entry: {
    fuselage: path.resolve(__dirname, 'src/fuselage.scss'),
  },
  output: {
    filename: '[name].css',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: argv.mode === 'production' ? 'source-map' : 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => [
                  require('autoprefixer')(),
                  require('cssnano'),
                ],
              },
            },
            'sass-loader',
          ],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
  ],
});
