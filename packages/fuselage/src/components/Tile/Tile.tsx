import type { Ref } from 'react';
import { forwardRef } from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

type TileProps = BoxProps;

const Tile = forwardRef(function Tile(
  { elevation = '1', padding = 16, ...props }: TileProps,
  ref: Ref<HTMLElement>,
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
