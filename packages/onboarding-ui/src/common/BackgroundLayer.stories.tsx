import { Tile } from '@rocket.chat/fuselage';
import type { Story, Meta } from '@storybook/react';

import BackgroundLayer from './BackgroundLayer';

export default {
  title: 'common/BackgroundLayer',
  component: BackgroundLayer,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    forceDarkMode: {
      options: [undefined, true, false],
      control: { type: 'inline-radio' },
    },
  },
} as Meta;

export const SystemDarkMode: Story = (args) => (
  <BackgroundLayer {...args}>
    <Tile>An example tile</Tile>
  </BackgroundLayer>
);

export const DarkMode: Story = (args) => (
  <BackgroundLayer {...args}>
    <Tile>An example tile</Tile>
  </BackgroundLayer>
);
DarkMode.args = { forceDarkMode: true };

export const LightMode: Story = (args) => (
  <BackgroundLayer {...args}>
    <Tile>An example tile</Tile>
  </BackgroundLayer>
);
LightMode.args = { forceDarkMode: false };
