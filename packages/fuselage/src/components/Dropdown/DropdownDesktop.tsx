import type { CSSProperties, ReactNode, Ref } from 'react';
import React, { forwardRef } from 'react';

import { Box, Tile } from '..';

export const DropdownDesktop = forwardRef(function DropdownDesktop<
  R extends HTMLElement
>(
  {
    children,
    ...props
  }: {
    style?: CSSProperties;
    children: ReactNode;
  },
  ref: Ref<R>
) {
  return (
    <Tile
      ref={ref}
      elevation='2'
      pi='0'
      pb='0'
      display='flex'
      flexDirection='column'
      overflow='auto'
      data-testid='dropdown'
      {...props}
    >
      <Box flexShrink={1} pb='x12'>
        {props.style?.visibility === 'hidden' ? null : children}
      </Box>
    </Tile>
  );
});
