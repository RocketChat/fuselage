import { forwardRef } from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

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
      padding={padding}
      {...props}
    />
  );
});

export default Tile;
