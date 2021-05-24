import React, { FC } from 'react';

import { Tile } from '../..';

const DropdownTile: FC = (props) => (
  <Tile
    padding={0}
    paddingBlock={'x12'}
    paddingInline={0}
    elevation='2'
    {...props}
  />
);

export default DropdownTile;
