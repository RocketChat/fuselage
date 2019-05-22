const path = require('path');

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
        },
      },
      'sass-loader',
    ],
    include: path.resolve(__dirname, '../'),
  });

  return config;
};
