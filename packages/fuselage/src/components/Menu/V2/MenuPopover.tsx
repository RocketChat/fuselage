import { useBreakpoints } from '@rocket.chat/fuselage-hooks';
import type { ReactNode } from 'react';
import type { AriaPopoverProps } from 'react-aria';
import type { OverlayTriggerState } from 'react-stately';

import Box from '../../Box';
import { Popover } from '../../Popover';
import Tile from '../../Tile';

interface PopoverProps extends Omit<AriaPopoverProps, 'popoverRef'> {
  children: ReactNode;
  state: OverlayTriggerState;
  maxWidth?: string;
}

function MenuPopover({
  children,
  state,
  offset = 4,
  maxWidth,
  ...props
}: PopoverProps) {
  const isMobile = !useBreakpoints().includes('sm');

  if (isMobile) {
    return (
      <Popover state={state} offset={offset} {...props}>
        <Tile
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
        >
          <Box flexShrink={1} pb={16}>
            {children}
          </Box>
        </Tile>
      </Popover>
    );
  }

  return (
    <Popover state={state} offset={offset} {...props}>
      <Tile
        elevation='2'
        pi='0'
        pb='0'
        display='flex'
        flexDirection='column'
        overflow='auto'
        maxWidth={maxWidth}
      >
        <Box flexShrink={1} pb={12}>
          {children}
        </Box>
      </Tile>
    </Popover>
  );
}
export default MenuPopover;
