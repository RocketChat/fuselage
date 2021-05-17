import React from 'react';

import { Tile } from '../..';

export default {
  title: 'Containers/Tile',
  component: Tile,
  parameters: {
    jest: ['Tile.spec.tsx'],
  },
};

export const Default = () => <Tile>Content</Tile>;

export const Elevation0 = () => <Tile elevation='0' />;

export const Elevation1 = () => <Tile elevation='1' />;

export const Elevation2 = () => <Tile elevation='2' />;
