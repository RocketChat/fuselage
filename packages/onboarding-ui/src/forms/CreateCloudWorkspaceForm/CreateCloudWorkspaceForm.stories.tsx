import type { Meta, Story } from '@storybook/react';
import type { ComponentProps } from 'react';

import CreateCloudWorkspaceForm from './CreateCloudWorkspaceForm';

type Args = ComponentProps<typeof CreateCloudWorkspaceForm>;

export default {
  title: 'forms/CreateCloudWorkspaceForm',
  component: CreateCloudWorkspaceForm,
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on.*' },
  },
  args: {
    onSubmit: (val) => console.log(val),
    currentStep: 1,
    stepCount: 2,
    serverRegionOptions: [
      ['us', 'US'],
      ['br', 'BR'],
    ],
    validateUrl: async (url) => url !== 'rocket',
    validateEmail: async (email) => email !== 'rocket',
  },
} as Meta<Args>;

export const _CreateCloudWorkspaceForm: Story<Args> = (args) => (
  <CreateCloudWorkspaceForm {...args} />
);
_CreateCloudWorkspaceForm.storyName = 'CreateCloudWorkspaceForm';
