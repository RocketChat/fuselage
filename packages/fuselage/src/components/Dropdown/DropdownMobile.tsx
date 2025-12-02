import type { ReactNode } from 'react';
import { forwardRef } from 'react';

import { Box, Tile } from '..';

export type DropdownMobileProps = {
  children: ReactNode;
};

export const DropdownMobile = forwardRef<HTMLElement, DropdownMobileProps>(
  function DropdownMobile({ children, ...props }, ref) {
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
  },
);
