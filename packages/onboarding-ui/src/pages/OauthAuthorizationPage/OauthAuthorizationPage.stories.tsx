import type { StoryFn, Meta } from '@storybook/react';

import OauthAuthorizationPage from './OauthAuthorizationPage';

export default {
  title: 'pages/OauthAuthorizationPage',
  component: OauthAuthorizationPage,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
  args: {
    clientName: 'Rocket.Chat',
    error: {
      message: '',
      onGoBack: () => console.log('Back'),
    },
  },
} satisfies Meta<typeof OauthAuthorizationPage>;

export const _OauthAuthorizationPage: StoryFn<typeof OauthAuthorizationPage> = (
  args
) => <OauthAuthorizationPage {...args} />;

_OauthAuthorizationPage.storyName = 'OauthAuthorizationPage';
