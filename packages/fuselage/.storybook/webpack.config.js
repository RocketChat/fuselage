module.exports = async ({ config, mode }) => {
  const jsRule = config.module.rules.find(({ test }) => test.test('index.js'))
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
          importLoaders: 1,
          modules: true,
          getLocalIdent: (_, __, localName) => {
            const localIdentName = localName
              .replace(/\.?([A-Z])/g, (_, initialLetter) => `-${ initialLetter.toLowerCase() }`)
              .replace(/^-/, '');
            return `rcx-${ localIdentName }`;
          },
        },
      },
      'sass-loader',
    ],
  });

  return config;
};
