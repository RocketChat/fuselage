'use strict';

const path = require('path');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        type: 'javascript/auto',
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.svg$/,
        include: /packages\/icons/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        include: /packages\/icons/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader/useable',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              getLocalIdent: (_, __, localName) => {
                const localIdentName = localName
                  .replace(/_([A-Z])/g, (_, initialLetter) => `_${ initialLetter.toLowerCase() }`)
                  .replace(/\.?([A-Z])/g, (_, initialLetter) => `-${ initialLetter.toLowerCase() }`)
                  .replace(/^-/, '');
                return `rcx-${ localIdentName }`;
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      generateStatsFile: false,
      reportFilename: '../bundle-report.html',
      openAnalyzer: false,
    }),
  ],
  externals: [
    {
      react: {
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'React',
        root: 'React',
      },
    },
    'css-vars-ponyfill',
  ],
  output: {
    filename: 'fuselage.js',
    path: path.join(__dirname, './dist'),
    library: 'RocketChatFuselage',
    libraryTarget: 'umd',
  },
  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'eval-source-map',
};
