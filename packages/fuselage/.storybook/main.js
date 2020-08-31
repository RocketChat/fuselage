const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');
const { EnvironmentPlugin } = require('webpack');

module.exports = {
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-docs/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport/register',
    ...process.env.NODE_ENV === 'production' ? ['@storybook/addon-jest/register'] : [],
  ],
  stories: [
    '../src/**/stories.{mdx,js}',
    '../src/**/*.stories.{mdx,js}',
    '../src/**/stories/index.{mdx,js}',
  ],
  webpackFinal: (config) => {
    const jsRule = config.module.rules.find(({ test }) => test.test('index.js'));
    jsRule.include = [
      ...jsRule.include,
      /node_modules\/@loki/,
      /node_modules\/acorn-jsx/,
    ];
    delete jsRule.exclude;

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
            ident: 'postcss',
            plugins: () => [
              require('postcss-custom-properties')(),
              require('postcss-logical')({ preserve: true }),
              require('postcss-dir-pseudo-class')({ dir: 'ltr' }),
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
  },
};
