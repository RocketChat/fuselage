import type { ReactNode, ForwardedRef } from 'react';
import React, { forwardRef } from 'react';

import { Box, Tile } from '..';

export const DropdownMobile = forwardRef(function DropdownMobile<
  R extends HTMLElement
>(
  {
    children,
    ...props
  }: {
    children: ReactNode;
  },
  ref: ForwardedRef<R>
) {
  return (
    <Tile
      ref={ref}
      elevation='2'
      pi='0'
      pb='0'
      w='100vw'
      maxHeight='80%'
      position='fixed'
      display='flex'
      flexDirection='column'
      overflow='auto'
      style={{ bottom: 0, left: 0 }}
      zIndex={2}
      data-testid='dropdown'
      {...props}
    >
      <Box flexShrink={1} pb={16}>
        {children}
      </Box>
    </Tile>
  );
});
