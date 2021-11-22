import type { Story, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import CreateNewAccountPage from './CreateNewAccountPage';

type Args = ComponentProps<typeof CreateNewAccountPage>;

export default {
  title: 'pages/CreateNewAccountPage',
  component: CreateNewAccountPage,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
  argTypes: {
    validateUsername: { action: 'validateUsername' },
    validateEmail: { action: 'validateEmail' },
    validatePassword: { action: 'validatePassword' },
  },
  args: {
    control: { type: 'inline-radio' },
  },
} as Meta<Args>;

export const _CreateNewAccountPage: Story<Args> = (args) => (
  <CreateNewAccountPage {...args} />
);
