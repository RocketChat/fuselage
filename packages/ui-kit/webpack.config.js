'use strict';

const path = require('path');

const ReplacePlugin = require('webpack-plugin-replace');

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
    new ReplacePlugin({
      include: ['index.ts'],
      values: {
        '"VERSION"': JSON.stringify(pkg.version),
      },
    }),
  ],
});
