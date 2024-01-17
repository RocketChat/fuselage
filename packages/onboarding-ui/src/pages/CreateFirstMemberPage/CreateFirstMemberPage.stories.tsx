import { action } from '@storybook/addon-actions';
import type { Story, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import CreateFirstMemberPage from './CreateFirstMemberPage';

type Args = ComponentProps<typeof CreateFirstMemberPage>;

export default {
  title: 'pages/CreateFirstMemberPage',
  component: CreateFirstMemberPage,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
  args: {
    currentStep: 1,
    stepCount: 1,
    onSubmit: action('onSubmit'),
    onBackButtonClick: action('onBackButtonClick'),
    validateUsername: async (username: string) =>
      username === 'rocket' ? 'Invalid username' : true,
    validatePassword: async (password: string) =>
      password === '12345' ? 'Invalid password' : true,
  },
} satisfies Meta<Args>;

export const _CreateFirstMemberPage: Story<Args> = (args) => (
  <CreateFirstMemberPage {...args} />
);
_CreateFirstMemberPage.storyName = 'CreateFirstMemberPage';
