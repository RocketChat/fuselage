import path from 'path';
import webpack from 'webpack';
import type { Configuration } from 'webpack';

const packageJson = require('./package.json');

const config = (argv: any): Configuration => {
  const mode = argv.mode || 'production';

  return {
    mode,
    entry: path.resolve(__dirname, 'src/index.ts'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
      library: {
        type: 'umd',
        name: 'RocketChatLayout',
        umdNamedDefine: true,
      },
      globalObject: 'this',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    devtool: mode === 'development' ? 'source-map' : false,
    externals: [
        '@rocket.chat/fuselage',
        '@rocket.chat/fuselage-tokens',
        

    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, './tsconfig.esm.json'), // or .cjs.json depending on your output
            },
          },
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
