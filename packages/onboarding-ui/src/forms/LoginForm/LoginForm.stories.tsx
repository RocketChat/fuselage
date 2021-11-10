import type { Meta, Story } from '@storybook/react';
import type { ComponentProps } from 'react';

import LoginForm from './LoginForm';

type Args = ComponentProps<typeof LoginForm>;

export default {
  title: 'forms/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta<Args>;

export const _LoginForm: Story<Args> = (args) => <LoginForm {...args} />;
_LoginForm.storyName = 'LoginForm';
