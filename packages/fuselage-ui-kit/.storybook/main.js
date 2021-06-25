const webpack = require('webpack');

module.exports = {
  core: {
    builder: 'webpack5',
  },
  features: {
    postcss: false,
  },
  addons: ['@storybook/addon-essentials'],
  stories: ['../src/**/*.stories.{mdx,js}'],
  webpackFinal: (config) => {
    config.plugins.push(new webpack.EnvironmentPlugin(['NODE_ENV']));

    return config;
  },
};
