import { usePosition } from '@rocket.chat/fuselage-hooks';
import React, { FC, useRef } from 'react';

import { Box, Tile } from '..';

export const Dropdown: FC<{
  reference: React.RefObject<Element>;
  placement?: Parameters<typeof usePosition>[2]['placement'];
  // backdrop?: boolean;
}> = ({
  children,
  reference,
  placement = 'bottom-start',
  // backdrop,
}) => {
  const target = useRef(null);

  const { style } = usePosition(reference, target, { placement });

  return (
    <Box>
      {/* {backdrop && <Box />} */}
      <Tile style={style} ref={target} elevation='2' pi='0' pb='x16'>
        {children}
      </Tile>
    </Box>
  );
};
