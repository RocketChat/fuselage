import React, { ComponentProps, forwardRef, Ref } from 'react';

import { useStyleSheet } from '../../hooks/useStyleSheet';
import { Box } from '../Box';
import tileStyleSheet from './Tile.styles.scss';

type TileProps = ComponentProps<typeof Box> & {
  elevation?: '0' | '1' | '2';
};

const Tile = forwardRef(function Tile(
  { elevation = '1', padding = 'x16', ...props }: TileProps,
  ref: Ref<HTMLElement>
) {
  useStyleSheet();
  useStyleSheet(tileStyleSheet);

  return (
    <Box
      ref={ref}
      rcx-tile
      rcx-tile--elevation={elevation}
      padding={padding}
      {...props}
    />
  );
});

export default Tile;
