'use strict';

const path = require('path');

const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const WrapperPlugin = require('wrapper-webpack-plugin');

const pkg = require('./package.json');

module.exports = (env, { mode = 'production' }) => ({
  entry: {
    fuselage: path.resolve(__dirname, 'src/index.ts'),
  },
  output: {
    filename: `[name].${mode}.js`,
    path: path.resolve(__dirname, 'dist'),
    library: 'RocketChatFuselage',
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
  devtool: mode === 'production' ? false : 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: path.resolve(__dirname, './tsconfig.build.json'),
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          'babel-loader',
          {
            loader: 'style-loader',
            options: {
              attributes: {
                id: 'fuselage-style',
              },
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
              postcssOptions: {
                plugins: [
                  require('postcss-svg')(),
                  require('postcss-custom-properties')(),
                  require('postcss-logical')({ preserve: true }),
                  require('postcss-dir-pseudo-class')({ dir: 'ltr' }),
                  require('autoprefixer')(),
                  mode === 'production' && require('cssnano'),
                ].filter(Boolean),
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
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
    'react-aria',
    'react-stately',
    '@rocket.chat/css-in-js',
    '@rocket.chat/css-supports',
    '@rocket.chat/fuselage-tokens',
    '@rocket.chat/memo',
    '@rocket.chat/styled',
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env.VERSION': JSON.stringify(pkg.version),
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      generateStatsFile: false,
      reportFilename: '../bundle-report.html',
      openAnalyzer: false,
    }),

    mode !== 'production' &&
      new WrapperPlugin({
        test: /development\.js$/, // only wrap output of bundle files with '.js' extension
        header: `'use strict';

if (process.env.NODE_ENV !== "production") {
(function() {
`,
        footer: `\n})();
}`,
      }),
  ].filter(Boolean),
});
