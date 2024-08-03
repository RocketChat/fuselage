import type { StoryFn, Meta } from '@storybook/react';

import CreateNewPasswordPage from './CreateNewPasswordPage';

export default {
  title: 'pages/CreateNewPasswordPage',
  component: CreateNewPasswordPage,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
  argTypes: {
    validatePassword: { action: 'validatePassword' },
    validatePasswordConfirmation: { action: 'validatePasswordConfirmation' },
  },
} satisfies Meta<typeof CreateNewPasswordPage>;

export const _CreateNewPasswordPage: StoryFn<typeof CreateNewPasswordPage> = (
  args
) => <CreateNewPasswordPage {...args} />;

_CreateNewPasswordPage.storyName = 'CreateNewPasswordPage';
