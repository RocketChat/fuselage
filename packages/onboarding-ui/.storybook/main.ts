import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
  },

  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    'storybook-dark-mode',
  ],

  stories: ['../src/**/*.stories.tsx', '../src/**/stories.tsx'],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  docs: {
    autodocs: true,
  },
};

export default config;
