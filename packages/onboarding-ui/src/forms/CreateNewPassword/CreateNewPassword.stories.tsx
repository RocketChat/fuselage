import type { Meta, StoryFn } from '@storybook/react';

import CreateNewPassword from './CreateNewPassword';

export default {
  title: 'forms/CreateNewPassword',
  component: CreateNewPassword,
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on.*' },
  },
} satisfies Meta<typeof CreateNewPassword>;

export const _CreateNewPassword: StoryFn<typeof CreateNewPassword> = (args) => (
  <CreateNewPassword {...args} />
);
_CreateNewPassword.storyName = 'CreateNewPassword';
