import { resolve } from 'node:path';

import autoprefixer from 'autoprefixer';
import cssnanoPlugin from 'cssnano';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import postcssDirPseudoClass from 'postcss-dir-pseudo-class';
import postcssLogical from 'postcss-logical';
import WrapperPlugin from 'wrapper-webpack-plugin';

import pkg from './package.json' with { type: 'json' };

export default (env, { mode = 'production' }) =>
  /** @type {import('webpack').Configuration} */ ({
    entry: {
      fuselage: resolve(import.meta.dirname, 'src/index.ts'),
    },
    output: {
      filename: `[name].${mode}.js`,
      path: resolve(import.meta.dirname, 'dist'),
      library: {
        name: 'RocketChatFuselage',
        type: 'umd',
        umdNamedDefine: true,
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
                    postcssLogical({ preserve: true }),
                    postcssDirPseudoClass({ dir: 'ltr' }),
                    autoprefixer(),
                    mode === 'production' && cssnanoPlugin,
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
