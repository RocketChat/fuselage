import type { UsePositionOptions } from '@rocket.chat/fuselage-hooks';
import { useMediaQuery } from '@rocket.chat/fuselage-hooks';
import type { ReactNode, RefObject } from 'react';
import { forwardRef } from 'react';

import { DropdownDesktopWrapper } from './DropdownDesktopWrapper';
import { DropdownMobile } from './DropdownMobile';

export type DropdownProps<T extends HTMLElement> = {
  reference: RefObject<T>;
  placement?: UsePositionOptions['placement'];
  children: ReactNode;
};

const Dropdown = forwardRef<HTMLElement, DropdownProps<HTMLElement>>(
  function Dropdown({ children, reference, placement = 'bottom-start' }, ref) {
    const notSmall = useMediaQuery('(min-width: 500px)');

    return notSmall ? (
      <DropdownDesktopWrapper
        reference={reference}
        children={children}
        placement={placement}
        ref={ref}
      />
    ) : (
      <DropdownMobile children={children} ref={ref} />
    );
  },
);

export default Dropdown;
