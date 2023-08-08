const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

/** @type {import('@storybook/react/types').StorybookConfig} */
module.exports = {
  core: {
    builder: 'webpack5',
  },
  features: {
    postcss: false,
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript-plugin',
  },
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  stories: ['../src/**/*.stories.{mdx,js,tsx}'],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
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
              ],
            },
          },
        },
        'sass-loader',
      ],
    });

    config.plugins.push(new webpack.EnvironmentPlugin(['NODE_ENV']));
    config.plugins.push(new MiniCssExtractPlugin());

    // Workaround for @storybook/addon-jest on Webpack 5
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        path: require.resolve('path-browserify'),
      },
    };

    return config;
  },
};
