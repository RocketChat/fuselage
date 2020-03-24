'use strict';

const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

const { EnvironmentPlugin } = require('webpack');

module.exports = async ({ config, mode }) => {
  const jsRule = config.module.rules.find(({ test }) => test.test('index.js'));
  jsRule.include = [
    ...jsRule.include,
    /node_modules\/loki/,
  ];
  delete jsRule.exclude;

  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader/useable',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 2,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: () => [
            require('postcss-custom-properties')(),
            require('postcss-logical')({ preserve: true }),
            require('autoprefixer')(),
          ],
        },
      },
      'sass-loader',
    ],
  });

  config.module.rules.push({
    test: /\.mdx$/,
    use: [
      'babel-loader',
      {
        loader: '@mdx-js/loader',
        options: {
          compilers: [createCompiler({})],
        },
      },
    ],
  });

  config.module.rules.push({
    test: /(stories|story)\.js$/,
    loader: require.resolve('@storybook/source-loader'),
    exclude: [/node_modules/],
    enforce: 'pre',
  });

  config.plugins.push(new EnvironmentPlugin(['NODE_ENV']));

  return config;
};
