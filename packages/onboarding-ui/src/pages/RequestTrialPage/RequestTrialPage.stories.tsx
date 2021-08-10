import type { Story, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import RequestTrialPage from './RequestTrialPage';

type Args = ComponentProps<typeof RequestTrialPage>;

export default {
  title: 'pages/RequestTrialPage',
  component: RequestTrialPage,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
  args: {
    validateEmail: async (email) => email !== 'rocket',
  },
} as Meta<Args>;

export const _RequestTrialPage: Story<Args> = (args) => (
  <RequestTrialPage {...args} />
);
_RequestTrialPage.storyName = 'RequestTrialPage';
