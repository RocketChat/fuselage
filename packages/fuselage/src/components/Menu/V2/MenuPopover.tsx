import { useBreakpoints } from '@rocket.chat/fuselage-hooks';
import React from 'react';
import { usePopover } from 'react-aria';
import type { AriaPopoverProps } from 'react-aria';
import type { OverlayTriggerState } from 'react-stately';

import Box from '../../Box/Box';
import { DropdownMobile } from '../../Dropdown/DropdownMobile';
import Tile from '../../Tile/Tile';

interface PopoverProps extends Omit<AriaPopoverProps, 'popoverRef'> {
  children: React.ReactNode;
  state: OverlayTriggerState;
}

function MenuPopover({ children, state, offset = 4, ...props }: PopoverProps) {
  const popoverRef = React.useRef(null);
  const { popoverProps } = usePopover(
    {
      ...props,
      offset,
      popoverRef,
    },
    state
  );

  const breakpoints = useBreakpoints();
  const isMobile = !breakpoints.includes('sm');

  if (isMobile) {
    return <DropdownMobile children={children} />;
  }

  return (
    <Tile
      {...popoverProps}
      ref={popoverRef}
      elevation='2'
      pi='0'
      pb='0'
      display='flex'
      flexDirection='column'
      overflow='auto'
    >
      <Box flexShrink={1} pb='x12'>
        {children}
      </Box>
    </Tile>
  );
}
export default MenuPopover;
