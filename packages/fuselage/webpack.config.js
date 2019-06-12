const path = require('path');


module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader/useable',
          'css-loader',
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'url-loader',
        }],
      },
      {
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
      },
    ],
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'index.js',
    library: 'RocketChatFuselage',
    libraryTarget: 'umd',
    publicPath: '/dist/',
    umdNamedDefine: true,
  },
};
