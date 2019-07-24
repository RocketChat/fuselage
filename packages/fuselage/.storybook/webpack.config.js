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
          getLocalIdent: (_, __, localName) => {
            const localIdentName = localName
              .replace(/_([A-Z])/g, (_, initialLetter) => `_${ initialLetter.toLowerCase() }`)
              .replace(/\.?([A-Z])/g, (_, initialLetter) => `-${ initialLetter.toLowerCase() }`)
              .replace(/^-/, '');
            return `rcx-${ localIdentName }`;
          },
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
