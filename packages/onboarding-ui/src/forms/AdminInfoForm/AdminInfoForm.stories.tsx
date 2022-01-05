import type { Story, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import AdminInfoForm from './AdminInfoForm';

type Args = ComponentProps<typeof AdminInfoForm>;

export default {
  title: 'forms/AdminInfoForm',
  component: AdminInfoForm,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'centered',
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

export const _AdminInfoForm: Story<Args> = (args) => (
  <AdminInfoForm {...args} />
);
_AdminInfoForm.storyName = 'AdminInfoForm';
