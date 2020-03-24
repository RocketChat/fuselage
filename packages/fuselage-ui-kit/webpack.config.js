'use strict';

const path = require('path');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (env, { mode = 'production' }) => ({
  entry: {
    'fuselage-ui-kit': path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    filename: `[name].${ mode }.js`,
    path: path.resolve(__dirname, 'dist'),
    library: 'RocketChatFuselageUiKit',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  devtool: mode === 'production' ? false : 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-react', {
                useBuiltIns: true,
                development: mode !== 'production',
              }],
            ],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader/useable',
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
                require('postcss-custom-properties')(),
                require('autoprefixer')(),
                require('cssnano'),
              ],
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
    '@rocket.chat/fuselage',
    '@rocket.chat/fuselage-hooks',
    '@rocket.chat/ui-kit',
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
