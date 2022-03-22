import { action } from '@storybook/addon-actions';
import type { Meta, Story } from '@storybook/react';
import type { ComponentProps } from 'react';

import CreateFirstMemberForm from './CreateFirstMemberForm';

type Args = ComponentProps<typeof CreateFirstMemberForm>;

export default {
  title: 'forms/CreateFirstMemberForm',
  component: CreateFirstMemberForm,
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on.*' },
  },
  args: {
    currentStep: 1,
    stepCount: 1,
    workspaceName: 'Kapai',
    onSubmit: action('onSubmit'),
    onBackButtonClick: action('onBackButtonClick'),
    validatePassword: async (password) =>
      password === '12345' ? 'Invalid password' : true,
  },
} as Meta<Args>;

export const _CreateFirstMemberForm: Story<Args> = (args) => (
  <CreateFirstMemberForm {...args} />
);

_CreateFirstMemberForm.storyName = 'CreateFirstMemberForm';
