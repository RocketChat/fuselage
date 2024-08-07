import type { StorybookConfig } from '@storybook/react-webpack5';

export default {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    'storybook-dark-mode',
    '@storybook/addon-webpack5-compiler-swc',
  ],

  stories: ['../src/**/*.stories.tsx', '../src/**/stories.tsx'],

  framework: {
    name: '@storybook/react-webpack5',
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
} satisfies StorybookConfig;
