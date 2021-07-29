import type { Meta, Story } from '@storybook/react';
import type { ComponentProps } from 'react';

import RequestTrialForm from './RequestTrialForm';

type Args = ComponentProps<typeof RequestTrialForm>;

export default {
  title: 'forms/RequestTrialForm',
  component: RequestTrialForm,
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on.*' },
  },
  args: {
    onSubmit: (data) => console.log(data),
  },
} as Meta<Args>;

export const _RequestTrialForm: Story<Args> = (args) => (
  <RequestTrialForm {...args} />
);
_RequestTrialForm.storyName = 'RequestTrialForm';
