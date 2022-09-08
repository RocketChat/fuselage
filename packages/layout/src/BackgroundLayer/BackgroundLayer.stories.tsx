import { Tile } from '@rocket.chat/fuselage';
import type { Story, Meta } from '@storybook/react';

import DarkModeProvider from '../DarkModeProvider';
import BackgroundLayer from './BackgroundLayer';

export default {
  title: 'common/BackgroundLayer',
  component: BackgroundLayer,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    forcedDarkMode: {
      options: [undefined, true, false],
      control: { type: 'inline-radio' },
    },
  },
  decorators: [
    (Story, context) => (
      <DarkModeProvider forcedDarkMode={context.args.forcedDarkMode}>
        <Story />
      </DarkModeProvider>
    ),
  ],
} as Meta;

export const SystemDarkMode: Story = () => (
  <BackgroundLayer>
    <Tile>An example tile</Tile>
  </BackgroundLayer>
);

export const DarkMode: Story = () => (
  <BackgroundLayer>
    <Tile>An example tile</Tile>
  </BackgroundLayer>
);
DarkMode.args = { forcedDarkMode: true };

export const LightMode: Story = () => (
  <BackgroundLayer>
    <Tile>An example tile</Tile>
  </BackgroundLayer>
);
LightMode.args = { forcedDarkMode: false };
