const webpack = require('webpack');

module.exports = {
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-docs',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    ...(process.env.NODE_ENV === 'production' ? ['@storybook/addon-jest'] : []),
  ],
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

    return config;
  },
};
