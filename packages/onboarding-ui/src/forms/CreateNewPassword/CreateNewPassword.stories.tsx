import type { Meta, Story } from '@storybook/react';
import type { ComponentProps } from 'react';

import CreateNewPassword from './CreateNewPassword';

type Args = ComponentProps<typeof CreateNewPassword>;

export default {
  title: 'forms/CreateNewPassword',
  component: CreateNewPassword,
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta<Args>;

export const _CreateNewPassword: Story<Args> = (args) => (
  <CreateNewPassword {...args} />
);
_CreateNewPassword.storyName = 'CreateNewPassword';
