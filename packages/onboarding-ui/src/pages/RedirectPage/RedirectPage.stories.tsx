import type { StoryFn, Meta } from '@storybook/react-vite';
import { action } from 'storybook/actions';

import RedirectPage from './RedirectPage.js';

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
