import type { Meta, Story } from '@storybook/react';
import type { ComponentProps } from 'react';

import LoginDefaultForm from './LoginDefaultForm';

type Args = ComponentProps<typeof LoginDefaultForm>;

export default {
  title: 'forms/LoginForm/LoginDefaultForm',
  component: LoginDefaultForm,
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on.*' },
  },
  args: {
    currentStep: 1,
    stepCount: 1,
  },
} as Meta<Args>;

export const _LoginDefaultForm: Story<Args> = (args) => (
  <LoginDefaultForm {...args} />
);
_LoginDefaultForm.storyName = 'LoginDefaultForm';
