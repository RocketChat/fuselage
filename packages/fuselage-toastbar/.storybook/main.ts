import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';

import type { StorybookConfig } from '@storybook/react-vite';

const require = createRequire(import.meta.url);

const config: StorybookConfig = {
  addons: [
    getAbsolutePath('storybook-dark-mode'),
    getAbsolutePath('@storybook/addon-docs'),
  ],

  stories: ['../src/**/*.stories.tsx', '../src/**/stories.tsx'],

  framework: '@storybook/react-vite',
  // swc: () => ({
  //   jsc: {
  //     transform: {
  //       react: {
  //         runtime: 'automatic',
  //       },
  //     },
  //   },
  // }),

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
