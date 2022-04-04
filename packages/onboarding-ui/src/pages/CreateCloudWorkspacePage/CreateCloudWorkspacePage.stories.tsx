import type { Story, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import CreateCloudWorkspacePage from './CreateCloudWorkspacePage';

type Args = ComponentProps<typeof CreateCloudWorkspacePage>;

export default {
  title: 'pages/CreateCloudWorkspacePage',
  component: CreateCloudWorkspacePage,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
  args: {
    serverRegionOptions: [
      ['us', 'US'],
      ['br', 'BR'],
    ],
    languageOptions: [
      ['en', 'English'],
      ['pt', 'Português'],
    ],
    domain: 'rocket.chat',
    validateUrl: async (url) => (url === 'rocket' ? 'invalid url' : true),
    validateEmail: async (email) =>
      email === 'rocket@rocket.chat' ? 'invalid email' : true,
  },
} as Meta<Args>;

export const _CreateCloudWorkspacePage: Story<Args> = (args) => (
  <CreateCloudWorkspacePage {...args} />
);
_CreateCloudWorkspacePage.storyName = 'CreateCloudWorkspacePage';
