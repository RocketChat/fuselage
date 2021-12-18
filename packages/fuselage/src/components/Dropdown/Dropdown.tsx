import { useMediaQuery, usePosition } from '@rocket.chat/fuselage-hooks';
import React, { forwardRef, ReactNode, Ref, RefObject } from 'react';

import { DropdownDesktop } from './DropdownDesktop';
import { DropdownMobile } from './DropdownMobile';

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
  const notSmall = useMediaQuery('(min-width: 500px)');

  return notSmall ? (
    <DropdownDesktop
      reference={reference}
      children={children}
      placement={placement}
      ref={ref}
    />
  ) : (
    <DropdownMobile children={children} ref={ref} />
  );
});
