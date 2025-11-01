// This file has been automatically migrated to valid ESM format by Storybook.
import { createRequire } from "node:module";
import { dirname, join } from 'path';

import type { StorybookConfig } from '@storybook/react-vite';

const require = createRequire(import.meta.url);

export default {
  addons: [
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('storybook-dark-mode'),
    // getAbsolutePath('@storybook/addon-webpack5-compiler-swc'),
    // {
    //   name: getAbsolutePath('@storybook/addon-styling-webpack'),

    //   options: {
    //     rules: [
    //       {
    //         test: /\.css$/,
    //         sideEffects: true,
    //         use: [
    //           require.resolve('style-loader'),
    //           {
    //             loader: require.resolve('css-loader'),
    //             options: {
    //               importLoaders: 1,
    //             },
    //           },
    //           {
    //             loader: require.resolve('postcss-loader'),
    //             options: {
    //               implementation: require.resolve('postcss'),
    //             },
    //           },
    //         ],
    //       },
    //       {
    //         test: /\.s[ac]ss$/,
    //         sideEffects: true,
    //         use: [
    //           require.resolve('style-loader'),
    //           {
    //             loader: require.resolve('css-loader'),
    //             options: {
    //               importLoaders: 3,
    //             },
    //           },
    //           {
    //             loader: require.resolve('postcss-loader'),
    //             options: {
    //               implementation: require.resolve('postcss'),
    //             },
    //           },
    //           require.resolve('resolve-url-loader'),
    //           {
    //             loader: require.resolve('sass-loader'),
    //             options: {
    //               // Want to add more Sass options? Read more here: https://webpack.js.org/loaders/sass-loader/#options
    //               implementation: require.resolve('sass'),
    //               sourceMap: true,
    //               sassOptions: {},
    //             },
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
    getAbsolutePath('@storybook/addon-docs'),
  ],

  stories: ['../src/**/*.stories.{mdx,js,tsx}', '../src/**/*.mdx'],

  framework: '@storybook/react-vite',
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
} satisfies StorybookConfig;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
