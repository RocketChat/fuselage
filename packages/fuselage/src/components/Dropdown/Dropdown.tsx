import type { UsePositionOptions } from '@rocket.chat/fuselage-hooks';
import { useBreakpoints } from '@rocket.chat/fuselage-hooks';
import type { ReactNode, Ref, RefObject } from 'react';
import React, { forwardRef } from 'react';

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
    placement?: UsePositionOptions['placement'];
    children: ReactNode;
  },
  ref: Ref<R>
) {
  const breakpoints = useBreakpoints();

  const isMobile = !breakpoints.includes('md');

  if (isMobile) {
    return <DropdownMobile children={children} ref={ref} />;
  }

  return (
    <DropdownDesktop
      reference={reference}
      children={children}
      placement={placement}
      ref={ref}
    />
  );
});
