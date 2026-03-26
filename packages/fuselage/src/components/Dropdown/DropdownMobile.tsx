import type { ReactNode } from 'react';
import { forwardRef } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../primitives';
import Tile from '../Tile/Tile';

const DropdownContent = styled(RcxView, {
  name: 'DropdownMobileContent',
  flexShrink: 1,
  paddingBottom: 16,
});

export type DropdownMobileProps = {
  children: ReactNode;
};

export const DropdownMobile = forwardRef<HTMLElement, DropdownMobileProps>(
  function DropdownMobile({ children, ...props }, ref) {
    return (
      <Tile
        ref={ref}
        elevation='2'
        paddingInline={0}
        paddingBottom={0}
        width='100vw'
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
        <DropdownContent>
          {children}
        </DropdownContent>
      </Tile>
    );
  },
);
