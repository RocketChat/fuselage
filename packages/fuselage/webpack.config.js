'use strict';

const path = require('path');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (env, { mode = 'production' }) => ({
  entry: {
    fuselage: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    filename: `[name].${ mode }.js`,
    path: path.resolve(__dirname, 'dist'),
    library: 'RocketChatFuselage',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  devtool: mode === 'production' ? false : 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              injectType: 'lazySingletonStyleTag',
            },
          },
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
                require('postcss-svg')(),
                require('postcss-custom-properties')(),
                require('postcss-logical')({ preserve: true }),
                require('postcss-dir-pseudo-class')({ dir: 'ltr' }),
                require('autoprefixer')(),
                mode === 'production' && require('cssnano'),
              ].filter(Boolean),
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  externals: [
    {
      react: {
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'react',
        root: 'React',
      },
    },
    'react-dom',
    '@rocket.chat/icons',
    '@rocket.chat/fuselage-hooks',
  ],
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      generateStatsFile: false,
      reportFilename: '../bundle-report.html',
      openAnalyzer: false,
    }),
  ],
});
