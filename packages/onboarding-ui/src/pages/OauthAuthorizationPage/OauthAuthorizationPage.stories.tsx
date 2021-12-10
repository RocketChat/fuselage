import type { Story, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import OauthAuthorizationPage from './OauthAuthorizationPage';

type Args = ComponentProps<typeof OauthAuthorizationPage>;

export default {
  title: 'pages/OauthAuthorizationPage',
  component: OauthAuthorizationPage,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
} as Meta<Args>;

export const _OauthAuthorizationPage: Story<Args> = (args) => (
  <OauthAuthorizationPage {...args} />
);

_OauthAuthorizationPage.storyName = 'OauthAuthorizationPage';
