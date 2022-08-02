import { usePosition } from '@rocket.chat/fuselage-hooks';
import type { ReactNode, Ref, RefObject } from 'react';
import React, { forwardRef } from 'react';

import { Box, Tile } from '..';

export const DropdownDesktop = forwardRef(function DropdownDesktop<
  T extends HTMLElement,
  R extends HTMLElement
>(
  {
    children,
    reference,
    placement = 'bottom-start',
    width,
  }: {
    reference: RefObject<T>;
    placement?: Parameters<typeof usePosition>[2]['placement'];
    children: ReactNode;
    width?: number;
  },
  ref: Ref<R>
) {
  const { style } = usePosition(reference, ref as RefObject<R>, { placement });

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
      width={width}
    >
      <Box flexShrink={1} pb='x16'>
        {(style as any).visibility === 'hidden' ? null : children}
      </Box>
    </Tile>
  );
});
