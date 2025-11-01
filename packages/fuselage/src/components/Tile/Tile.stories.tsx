import type { Meta } from '@storybook/react-vite';

import Tile from './Tile.js';

export default {
  title: 'Containers/Tile',
  component: Tile,
} satisfies Meta<typeof Tile>;

export const Default = () => <Tile>Content</Tile>;

export const Elevation0 = () => <Tile elevation='0' />;

export const Elevation1 = () => <Tile elevation='1' />;

export const Elevation2 = () => <Tile elevation='2' />;
