import type { UsePositionOptions } from '@rocket.chat/fuselage-hooks';
import { useMediaQuery } from '@rocket.chat/fuselage-hooks';
import type { ForwardedRef, ReactNode, RefObject } from 'react';
import { forwardRef } from 'react';

import { DropdownDesktopWrapper } from './DropdownDesktopWrapper';
import { DropdownMobile } from './DropdownMobile';

/** @public */
export type DropdownProps<T extends HTMLElement> = {
  reference: RefObject<T>;
  placement?: UsePositionOptions['placement'];
  children: ReactNode;
};

/** @public */
const Dropdown = forwardRef(function Dropdown<
  T extends HTMLElement,
  R extends HTMLElement
>(
  { children, reference, placement = 'bottom-start' }: DropdownProps<T>,
  ref: ForwardedRef<R>
) {
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
});

export default Dropdown;
