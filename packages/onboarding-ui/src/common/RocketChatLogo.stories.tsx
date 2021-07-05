import type { Story, Meta } from '@storybook/react';

import RocketChatLogo from './RocketChatLogo';

export default {
  title: 'common/RocketChatLogo',
  component: RocketChatLogo,
  argTypes: {
    color: {
      control: { type: 'color' },
    },
  },
} as Meta;

export const _RocketChatLogo: Story = (props) => <RocketChatLogo {...props} />;
_RocketChatLogo.storyName = 'RocketChatLogo';
_RocketChatLogo.parameters = {
  layout: 'fullscreen',
};
