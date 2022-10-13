import { Tile } from '@rocket.chat/fuselage';
import type { Story, Meta } from '@storybook/react';

import BackgroundLayer from './BackgroundLayer';

export default {
  title: 'common/BackgroundLayer',
  component: BackgroundLayer,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const SystemDarkMode: Story = () => (
  <BackgroundLayer>
    <Tile>An example tile</Tile>
  </BackgroundLayer>
);

export const DarkMode: Story = (props) => (
  <BackgroundLayer {...props}>
    <Tile>An example tile</Tile>
  </BackgroundLayer>
);
DarkMode.args = { forcedDarkMode: true };

export const LightMode: Story = (props) => (
  <BackgroundLayer {...props}>
    <Tile>An example tile</Tile>
  </BackgroundLayer>
);
LightMode.args = { forcedDarkMode: false };
