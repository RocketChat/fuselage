import { resolve } from 'node:path';

import autoprefixer from 'autoprefixer';
import cssnanoPlugin from 'cssnano';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
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
        type: 'commonjs2',
      },
    },
    devtool: mode === 'production' ? false : 'source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader',
            options: {
              configFile: resolve(import.meta.dirname, './tsconfig.build.json'),
              transpileOnly: true,
            },
          },
        },
        {
          test: /\.woff2$/,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext]',
          },
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 3,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    autoprefixer(),
                    mode === 'production' && cssnanoPlugin,
                  ].filter(Boolean),
                },
              },
            },
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.json'],
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
      new MiniCssExtractPlugin({
        // Production keeps the published `fuselage.css` name that consumers
        // import; development is suffixed like the bundles are. Sharing one
        // name meant the production run overwrote the development stylesheet
        // but not its `.map`, leaving a map describing a file that was gone.
        filename: mode === 'production' ? '[name].css' : `[name].${mode}.css`,
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
