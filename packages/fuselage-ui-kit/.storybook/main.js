const webpack = require('webpack');

module.exports = {
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-docs',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
  ],
  stories: [
    '../src/**/*.stories.{mdx,js}',
  ],
  webpackFinal: (config) => {
    config.plugins.push(new webpack.EnvironmentPlugin(['NODE_ENV']));

    return config;
  },
};
