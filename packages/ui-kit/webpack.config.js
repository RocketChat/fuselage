'use strict';

const path = require('path');

const webpack = require('webpack');

const pkg = require('./package.json');

module.exports = (env, argv) => ({
  entry: {
    index: path.resolve(__dirname, 'src/index.ts'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'RocketChatUiKit',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    environment: {
      arrowFunction: false,
      bigIntLiteral: false,
      const: false,
      destructuring: false,
      dynamicImport: false,
      forOf: false,
      module: false,
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: argv.mode === 'production' ? false : 'source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.VERSION': JSON.stringify(pkg.version),
    }),
  ],
});
