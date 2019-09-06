'use strict';

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
      {
        loader: 'style-loader/useable',
        options: {
          singleton: true,
          hmr: mode === 'development',
        },
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 2,
          modules: true,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: () => [
            require('autoprefixer')(),
            require('cssnano'),
          ],
        },
      },
      'sass-loader',
    ],
  });

  return config;
};
