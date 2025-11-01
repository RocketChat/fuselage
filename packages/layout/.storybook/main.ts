import { dirname, join } from 'path';

import type { StorybookConfig } from '@storybook/react-vite';

export default {
  addons: [
    getAbsolutePath('storybook-dark-mode'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-docs'),
  ],
  logLevel: 'silent',

  stories: ['../src/**/*.stories.tsx', '../src/**/stories.tsx'],

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
