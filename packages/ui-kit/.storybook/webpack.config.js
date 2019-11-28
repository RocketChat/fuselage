'use strict';

const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

module.exports = async ({ config, mode }) => {
  const jsRule = config.module.rules.find(({ test }) => test.test('index.js'));
  jsRule.include = [
    ...jsRule.include,
    /node_modules\/loki/,
  ];
  delete jsRule.exclude;
  config.resolve.extensions.push(".ts");
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
            require('autoprefixer')(),
            require('cssnano'),
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
    test: /(stories|story)\.[tj]sx?$/,
    loader: require.resolve('@storybook/source-loader'),
    exclude: [/node_modules/],
    enforce: 'pre',
  });

  config.module.rules.push({
    test: /\.ts$/,
    loader: 'ts-loader',
    options:{ configFile: '../tsconfig.json'} ,
    exclude: /node_modules/,
  });
  return config;
};
