import type { CSSProperties, ReactNode } from 'react';
import { forwardRef } from 'react';

import { Box, Tile } from '..';

export type DropdownDesktopProps = {
  children: ReactNode;
  maxWidth?: string;
  maxHeight?: string;
  overflowY?: CSSProperties['overflowY'];
  style?: CSSProperties;
};

export const DropdownDesktop = forwardRef<HTMLElement, DropdownDesktopProps>(
  function DropdownDesktop({ children, style, ...props }, ref) {
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
          {style?.visibility === 'hidden' ? null : children}
        </Box>
      </Tile>
    );
  },
);
