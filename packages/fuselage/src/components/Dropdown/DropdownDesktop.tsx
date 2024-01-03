import type { CSSProperties, ReactNode, Ref } from 'react';
import React, { forwardRef } from 'react';

import { Box, Tile } from '..';

export const DropdownDesktop = forwardRef(function DropdownDesktop<
  R extends HTMLElement
>(
  {
    children,
    style,
    ...props
  }: {
    children: ReactNode;
    maxWidth?: string;
    style?: CSSProperties;
  },
  ref: Ref<R>
) {
  return (
    <Tile
      style={style}
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
      <Box flexShrink={1} pb={12}>
        {(style as any).visibility === 'hidden' ? null : children}
      </Box>
    </Tile>
  );
});
