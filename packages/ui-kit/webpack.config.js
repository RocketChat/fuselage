'use strict';

const path = require('path');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ReplacePlugin = require('webpack-plugin-replace');

const pkg = require('./package.json');

module.exports = (env, argv) => ({
  entry: {
    index: path.resolve(__dirname, 'src/index.ts'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'RocketChatFuselageUiKit',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  devtool: argv.mode === 'production' ? 'source-map' : 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        // options: { configFile: './tsconfig.json' },
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-react', {
                useBuiltIns: true,
                development: argv.mode !== 'production',
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
    '@rocket.chat/icons',
    '@rocket.chat/fuselage',
    '@rocket.chat/fuselage-hooks',
  ],
  plugins: [
    new ReplacePlugin({
      include: ['index.ts'],
      values: {
        '"VERSION"': JSON.stringify(pkg.version),

      },
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      generateStatsFile: false,
      reportFilename: '../bundle-report.html',
      openAnalyzer: false,
    }),
  ],
});
