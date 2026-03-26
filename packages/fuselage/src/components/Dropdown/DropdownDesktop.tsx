import type { CSSProperties, ReactNode } from 'react';
import { forwardRef } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../primitives';
import Tile from '../Tile/Tile';

const DropdownContent = styled(RcxView, {
  name: 'DropdownContent',
  display: 'block',
  flexShrink: 1,
  paddingBlock: '$x12',
});

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
        padding={0}
        display='flex'
        flexDirection='column'
        overflow='auto'
        data-testid='dropdown'
        {...props}
      >
        <DropdownContent>
          {style?.visibility === 'hidden' ? null : children}
        </DropdownContent>
      </Tile>
    );
  },
);
