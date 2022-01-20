import type { Meta, Story } from '@storybook/react';
import type { ComponentProps } from 'react';

import RegisteredServerForm from './RegisteredServerForm';

type Args = ComponentProps<typeof RegisteredServerForm>;

export default {
  title: 'forms/RegisteredServerForm',
  component: RegisteredServerForm,
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on.*' },
  },
  args: {
    currentStep: 1,
    stepCount: 1,
  },
} as Meta<Args>;

export const _RegisteredServerForm: Story<Args> = (args) => (
  <RegisteredServerForm {...args} />
);
_RegisteredServerForm.storyName = 'RegisteredServerForm';
