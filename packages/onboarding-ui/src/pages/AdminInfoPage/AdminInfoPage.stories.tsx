import type { Story, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import { rcAppDecorator } from '../../helpers/decorators/rcAppDecorator';
import AdminInfoPage from './AdminInfoPage';

type Args = ComponentProps<typeof AdminInfoPage>;

export default {
  title: 'pages/AdminInfoPage',
  component: AdminInfoPage,
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
    currentStep: 1,
    stepCount: 1,
    passwordRulesHint: 'Password rules description goes here',
    control: { type: 'inline-radio' },
  },
} as Meta<Args>;

export const _AdminInfoPage: Story<Args> = (args) => (
  <AdminInfoPage {...args} />
);

export const _CloudAdminInfoPage: Story<Args> = (args) => (
  <AdminInfoPage {...args} />
);

_AdminInfoPage.storyName = 'AdminInfoPage';
_AdminInfoPage.decorators = [rcAppDecorator];

_CloudAdminInfoPage.storyName = 'CloudAdminInfoPage';

_CloudAdminInfoPage.args = {
  title: 'Your Workspace is Ready!',
  description: 'Time to create your first admin user',
  keepPosted: true,
};
