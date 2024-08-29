import { Tile } from '@rocket.chat/fuselage';
import type { StoryFn, Meta } from '@storybook/react';

import BackgroundLayer from './BackgroundLayer';

export default {
  title: 'common/BackgroundLayer',
  component: BackgroundLayer,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BackgroundLayer>;

export const SystemDarkMode: StoryFn<typeof BackgroundLayer> = () => (
  <BackgroundLayer>
    <Tile>An example tile</Tile>
  </BackgroundLayer>
);
