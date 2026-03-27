import { forwardRef } from 'react';

import { Box, type BoxProps } from '../Box';

export type TileProps = BoxProps;

const Tile = forwardRef<HTMLElement, TileProps>(function Tile(
  { elevation = '1', padding = 16, ...props },
  ref,
) {
  return (
    <Box
      ref={ref}
      rcx-tile
      rcx-tile--elevation={elevation}
      display='block'
      color='font-default'
      backgroundColor='surface-light'
      fontScale='p2'
      borderRadius='x4'
      padding={padding}
      {...props}
    />
  );
});

export default Tile;
