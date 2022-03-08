import type { Story, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import CreateCloudWorkspaceSimplifiedPage from './CreateCloudWorkspaceSimplifiedPage';

type Args = ComponentProps<typeof CreateCloudWorkspaceSimplifiedPage>;

export default {
  title: 'pages/CreateCloudWorkspaceSimplifiedPage',
  component: CreateCloudWorkspaceSimplifiedPage,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
  args: {
    currentStep: 1,
    stepCount: 2,
    serverRegionOptions: [
      ['us', 'US'],
      ['br', 'BR'],
    ],
    validateUrl: async (url) => url !== 'rocket',
    validateEmail: async (email) => email !== 'rocket',
    domain: 'rocket.chat',
  },
} as Meta<Args>;

export const _CreateCloudWorkspaceSimplifiedPage: Story<Args> = (args) => (
  <CreateCloudWorkspaceSimplifiedPage {...args} />
);
_CreateCloudWorkspaceSimplifiedPage.storyName =
  'CreateCloudWorkspaceSimplifiedPage';
