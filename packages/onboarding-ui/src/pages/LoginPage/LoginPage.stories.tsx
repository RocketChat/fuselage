import type { Story, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import LoginPage from './LoginPage';

type Args = ComponentProps<typeof LoginPage>;

export default {
  title: 'pages/LoginPage',
  component: LoginPage,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
  args: { isPasswordLessFlow: false },
} as Meta<Args>;

export const _LoginPage: Story<Args> = (args) => <LoginPage {...args} />;
export const _LoginPasswordLessPage: Story<Args> = (args) => (
  <LoginPage {...args} />
);
_LoginPage.storyName = 'CloudDefaultLoginPage';
_LoginPasswordLessPage.storyName = 'CloudPasswordLessLoginPage';

_LoginPasswordLessPage.args = { isPasswordLessFlow: true };
