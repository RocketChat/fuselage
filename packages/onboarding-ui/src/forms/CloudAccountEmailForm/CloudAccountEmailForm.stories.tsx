import type { Meta, Story } from '@storybook/react';
import type { ComponentProps } from 'react';

import CloudAccountEmailForm from './CloudAccountEmailForm';

type Args = ComponentProps<typeof CloudAccountEmailForm>;

export default {
  title: 'forms/CloudAccountEmailForm',
  component: CloudAccountEmailForm,
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on.*' },
  },
  args: {
    currentStep: 1,
    stepCount: 1,
  },
} as Meta<Args>;

export const _CloudAccountEmailForm: Story<Args> = (args) => (
  <CloudAccountEmailForm {...args} />
);
_CloudAccountEmailForm.storyName = 'CloudAccountEmailForm';
