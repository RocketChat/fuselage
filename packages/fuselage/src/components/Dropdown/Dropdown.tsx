import { usePosition } from '@rocket.chat/fuselage-hooks';
import React, { forwardRef, ReactNode, Ref, RefObject } from 'react';

import { Box, Tile } from '..';

export const Dropdown = forwardRef(function Dropdown<
  T extends HTMLElement,
  R extends HTMLElement
>(
  {
    children,
    reference,
    placement = 'bottom-start',
  }: {
    reference: RefObject<T>;
    placement?: Parameters<typeof usePosition>[2]['placement'];
    children: ReactNode;
  },
  ref: Ref<R>
) {
  const { style } = usePosition(reference, ref as RefObject<R>, { placement });

  return (
    <Box>
      <Tile style={style} ref={ref} elevation='2' pi='0' pb='x16'>
        {children}
      </Tile>
    </Box>
  );
});
