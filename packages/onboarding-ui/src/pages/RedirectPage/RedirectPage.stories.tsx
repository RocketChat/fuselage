import { action } from '@storybook/addon-actions';
import type { Story, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import RedirectPage from './RedirectPage';

type Args = ComponentProps<typeof RedirectPage>;

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
} as Meta<Args>;

export const _RedirectPage: Story<Args> = (args) => <RedirectPage {...args} />;
_RedirectPage.storyName = 'RedirectPage';
