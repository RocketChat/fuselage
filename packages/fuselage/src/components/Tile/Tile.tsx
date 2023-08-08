import type { ComponentProps, Ref } from 'react';
import React, { forwardRef } from 'react';

import Box from '../Box';

type TileProps = ComponentProps<typeof Box>;

const Tile = forwardRef(function Tile(
  { elevation = '1', padding = 16, ...props }: TileProps,
  ref: Ref<HTMLElement>
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
