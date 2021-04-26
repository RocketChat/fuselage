const webpack = require('webpack');

module.exports = {
  addons: ['@storybook/addon-essentials'],
  stories: ['../src/**/*.stories.{mdx,js}'],
  webpackFinal: (config) => {
    config.plugins.push(new webpack.EnvironmentPlugin(['NODE_ENV']));

    return config;
  },
};
