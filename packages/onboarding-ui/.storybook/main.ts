import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';

import { defineMain } from '@storybook/react-vite/node';

const require = createRequire(import.meta.url);

export default defineMain({
  addons: [
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('storybook-dark-mode'),
    getAbsolutePath('@storybook/addon-docs'),
  ],

  stories: ['../src/**/*.stories.tsx', '../src/**/stories.tsx'],

  framework: '@storybook/react-vite',

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
});

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
