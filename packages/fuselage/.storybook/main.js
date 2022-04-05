const webpack = require('webpack');

module.exports = {
  core: {
    builder: 'webpack5',
  },
  features: {
    postcss: false,
  },
  addons: ['@storybook/addon-essentials'],
  stories: ['../src/**/*.stories.{mdx,js,tsx}'],
  webpackFinal: (config) => {
    config.module.rules.push({
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
