import type { Meta, Story } from '@storybook/react';
import type { ComponentProps } from 'react';

import RegisterOfflineForm from './RegisterOfflineForm';

type Args = ComponentProps<typeof RegisterOfflineForm>;

export default {
  title: 'forms/RegisterOfflineForm',
  component: RegisterOfflineForm,
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on.*' },
  },
  args: {
    currentStep: 1,
    stepCount: 1,
  },
} as Meta<Args>;

export const _RegisterOfflineForm: Story<Args> = (args) => (
  <RegisterOfflineForm {...args} />
);
