import type { Story, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import ConfirmationPage from './ConfirmationPage';

type Args = ComponentProps<typeof ConfirmationPage>;

export default {
  title: 'pages/ConfirmationPage',
  component: ConfirmationPage,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
  args: {
    title: 'Title for Confirmation',
    subTitle: 'Description for Confirmation',
  },
} as Meta<Args>;

export const _ConfirmationPage: Story<Args> = (args) => (
  <ConfirmationPage {...args} />
);
_ConfirmationPage.storyName = 'ConfirmationPage';
