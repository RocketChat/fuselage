module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
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
