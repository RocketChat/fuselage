import type { Meta, Story } from '@storybook/react';
import type { ComponentProps } from 'react';

import RegisterServerForm from './RegisterServerForm';

type Args = ComponentProps<typeof RegisterServerForm>;

export default {
  title: 'forms/RegisterServerForm',
  component: RegisterServerForm,
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on.*' },
  },
  args: {
    currentStep: 1,
    stepCount: 1,
  },
} as Meta<Args>;

export const _RegisterServerForm: Story<Args> = (args) => (
  <RegisterServerForm {...args} />
);
_RegisterServerForm.storyName = 'RegisterServerForm';

export const _RegisterServerFormOffline: Story<Args> = (args) => (
  <RegisterServerForm {...args} offline />
);

_RegisterServerFormOffline.storyName = 'RegisterServerFormOffline';
