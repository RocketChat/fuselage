import { createRequire } from 'node:module';
import { resolve } from 'node:path';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import WrapperPlugin from 'wrapper-webpack-plugin';

import pkg from './package.json' with { type: 'json' };

const require = createRequire(import.meta.url);

export default (env, { mode = 'production' }) =>
  /** @type {import('webpack').Configuration} */ ({
    entry: {
      fuselage: resolve(import.meta.dirname, 'src/index.ts'),
    },
    output: {
      filename: `[name].${mode}.js`,
      path: resolve(import.meta.dirname, 'dist'),
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
              configFile: resolve(import.meta.dirname, './tsconfig.build.json'),
            },
          },
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'babel-loader',
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
      ...Object.keys(pkg.dependencies ?? {}).map(
        (dep) => new RegExp(`^${dep}(/.+)?$`),
      ),
      ...Object.keys(pkg.peerDependencies ?? {}).map(
        (dep) => new RegExp(`^${dep}(/.+)?$`),
      ),
    ],
    plugins: [
      new MiniCssExtractPlugin(),
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
