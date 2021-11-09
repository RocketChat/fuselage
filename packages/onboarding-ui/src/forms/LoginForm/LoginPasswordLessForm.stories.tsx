import type { Meta, Story } from '@storybook/react';
import type { ComponentProps } from 'react';

import LoginPasswordLessForm from './LoginPasswordLessForm';

type Args = ComponentProps<typeof LoginPasswordLessForm>;

export default {
  title: 'forms/LoginPasswordLessForm',
  component: LoginPasswordLessForm,
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on.*' },
  },
  args: {
    currentStep: 1,
    stepCount: 1,
  },
} as Meta<Args>;

export const _LoginPasswordLessForm: Story<Args> = (args) => (
  <LoginPasswordLessForm {...args} />
);
_LoginPasswordLessForm.storyName = 'LoginPasswordLessForm';
