import { dirname, join } from 'path';

import type { StorybookConfig } from '@storybook/react-webpack5';

const { TamaguiPlugin } = require('tamagui-loader');

const config: StorybookConfig = {
  addons: [
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('storybook-dark-mode'),
    getAbsolutePath('@storybook/addon-webpack5-compiler-swc'),
    {
      name: getAbsolutePath('@storybook/addon-styling-webpack'),

      options: {
        rules: [
          {
            test: /\.css$/,
            sideEffects: true,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                },
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  implementation: require.resolve('postcss'),
                },
              },
            ],
          },
          {
            test: /\.s[ac]ss$/,
            sideEffects: true,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 3,
                },
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  implementation: require.resolve('postcss'),
                },
              },
              require.resolve('resolve-url-loader'),
              {
                loader: require.resolve('sass-loader'),
                options: {
                  // Want to add more Sass options? Read more here: https://webpack.js.org/loaders/sass-loader/#options
                  implementation: require.resolve('sass'),
                  sourceMap: true,
                  sassOptions: {},
                },
              },
            ],
          },
        ],
      },
    },
    getAbsolutePath('@storybook/addon-docs'),
  ],

  stories: ['../src/**/*.stories.{mdx,js,tsx}', '../src/**/*.mdx'],

  framework: {
    name: getAbsolutePath('@storybook/react-webpack5'),
    options: {},
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  }),

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },

  webpackFinal: (config) => {
    if (!config.plugins) {
      config.plugins = [];
    }

    // Find existing DefinePlugin
    const existingDefinePluginIndex = config.plugins.findIndex(
      (plugin) =>
        plugin &&
        plugin.constructor &&
        plugin.constructor.name === 'DefinePlugin',
    );

    const processEnvDefinitions = {
      DEV: process.env['NODE_ENV'] === 'development' ? 'true' : 'false',
      NODE_ENV: JSON.stringify(process.env['NODE_ENV'] || 'development'),
      TAMAGUI_POSITION_STATIC: JSON.stringify('1'),
      TAMAGUI_TARGET: JSON.stringify('web'),
    };

    if (existingDefinePluginIndex >= 0) {
      // Modify existing DefinePlugin's definitions directly to avoid version mismatch
      const existingPlugin = config.plugins[existingDefinePluginIndex] as any;
      if (!existingPlugin.definitions) {
        existingPlugin.definitions = {};
      }

      // Extract existing process.env if it exists
      let existingProcessEnv = {};
      if (existingPlugin.definitions.process) {
        if (typeof existingPlugin.definitions.process === 'string') {
          try {
            existingProcessEnv =
              JSON.parse(existingPlugin.definitions.process)?.env || {};
          } catch {
            existingProcessEnv = {};
          }
        } else {
          existingProcessEnv = existingPlugin.definitions.process?.env || {};
        }
      }

      // Merge process definitions
      existingPlugin.definitions.process = {
        env: {
          ...existingProcessEnv,
          ...processEnvDefinitions,
        },
      };
    } else {
      // Try to get webpack from Storybook's builder, fallback to regular webpack
      let webpackModule: typeof import('webpack');
      try {
        // Try to resolve webpack from Storybook's builder first
        const webpackPath = require.resolve('webpack', {
          paths: [require.resolve('@storybook/builder-webpack5/package.json')],
        });
        webpackModule = require(webpackPath);
      } catch {
        // Fallback to regular webpack
        webpackModule = require('webpack');
      }

      // Resolve tamagui config path relative to this file
      const tamaguiConfigPath = join(
        dirname(require.resolve('./main.ts')),
        '../tamagui.config.ts',
      );

      config.plugins.unshift(
        new TamaguiPlugin({
          config: tamaguiConfigPath,
          components: ['tamagui', '@rocket.chat/fuselage-core'],
          // disable: true,
        }),
      );

      // Create new DefinePlugin
      config.plugins.unshift(
        new webpackModule.DefinePlugin({
          process: {
            env: processEnvDefinitions,
          },
        }) as any,
      );
    }

    return config;
  },
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
