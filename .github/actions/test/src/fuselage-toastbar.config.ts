import path from 'path';
import webpack from 'webpack';
import type { Configuration } from 'webpack';

const packageJson = require('./package.json');

const config = ( argv: any): Configuration => {
  const mode = argv.mode || 'production';

  return {
    mode,
    entry: path.resolve(__dirname, 'src/index.ts'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
      library: {
        type: 'umd',
        name: 'FuselageToastBar',
        umdNamedDefine: true,
      },
      globalObject: 'this',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    devtool: mode === 'development' ? 'source-map' : false,
    externals: [
        '@rocket.chat/icons',
        '@rocket.chat/fuselage-polyfills',
        '@rocket.chat/fuselage',
        '@rocket.chat/fuselage-hooks',
        '@rocket.chat/fuselage-tokens',
        '@rocket.chat/layout',
        '@rocket.chat/styled',
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.VERSION': JSON.stringify(packageJson.version),
      }),
    ],
  };
};

export default config;
