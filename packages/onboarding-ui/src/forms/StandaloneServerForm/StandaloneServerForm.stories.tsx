import type { Meta, Story } from '@storybook/react';
import type { ComponentProps } from 'react';

import StandaloneServerForm from './StandaloneServerForm';

type Args = ComponentProps<typeof StandaloneServerForm>;

export default {
  title: 'forms/StandaloneServerForm',
  component: StandaloneServerForm,
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on.*' },
  },
  args: {
    currentStep: 1,
    stepCount: 1,
  },
} as Meta<Args>;

export const _StandaloneServerForm: Story<Args> = (args) => (
  <StandaloneServerForm {...args} />
);
_StandaloneServerForm.storyName = 'StandaloneServerForm';
