import { action } from '@storybook/addon-actions';
import type { StoryFn, Meta } from '@storybook/react';

import RedirectPage from './RedirectPage';

export default {
  title: 'pages/RedirectPage',
  component: RedirectPage,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
  args: {
    title: 'Kapai workspace is ready! 🚀',
    countDownSeconds: 5,
    onRedirect: action('onRedirect'),
  },
} satisfies Meta<typeof RedirectPage>;

export const _RedirectPage: StoryFn<typeof RedirectPage> = (args) => (
  <RedirectPage {...args} />
);
_RedirectPage.storyName = 'RedirectPage';
