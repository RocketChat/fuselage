import type { Story, Meta } from '@storybook/react';

import SomethingWentWrongPage from './SomethingWentWrongPage';

export default {
  title: 'pages/SomethingWentWrongPage',
  component: SomethingWentWrongPage,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const _SomethingWentWrongPage: Story = (args) => (
  <SomethingWentWrongPage {...args} />
);
_SomethingWentWrongPage.storyName = 'SomethingWentWrongPage';
