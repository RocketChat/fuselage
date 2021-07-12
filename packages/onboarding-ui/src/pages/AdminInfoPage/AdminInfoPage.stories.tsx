import type { Story, Meta } from '@storybook/react';
import { ComponentProps } from 'react';

import AdminInfoPage from './AdminInfoPage';

type Args = ComponentProps<typeof AdminInfoPage>;

export default {
  title: 'pages/AdminInfoPage',
  component: AdminInfoPage,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
  argTypes: {
    validateUsername: { action: 'validateUsername' },
    validateEmail: { action: 'validateEmail' },
    validatePassword: { action: 'validatePassword' },
  },
  args: {
    currentStep: 1,
    stepCount: 1,
    passwordRulesHint: 'Password rules description goes here',
  },
} as Meta<Args>;

export const _AdminInfoPage: Story<Args> = (args) => (
  <AdminInfoPage {...args} />
);
_AdminInfoPage.storyName = 'AdminInfoPage';
