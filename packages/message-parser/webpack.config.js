const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.pegjs$/,
        use: [path.resolve(__dirname, './loaders/pegloader.js')],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.pegjs'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    library: 'messageParser',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true,
  },
};
