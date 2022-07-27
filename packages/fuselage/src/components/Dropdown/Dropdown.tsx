import type { usePosition } from '@rocket.chat/fuselage-hooks';
import { useMediaQuery } from '@rocket.chat/fuselage-hooks';
import type { ReactNode, Ref, RefObject } from 'react';
import React, { forwardRef } from 'react';

import { DropdownDesktop } from './DropdownDesktop';
import { DropdownDesktopAutoSize } from './DropdownDesktopAutoSize';
import { DropdownMobile } from './DropdownMobile';

export const Dropdown = forwardRef(function Dropdown<
  T extends HTMLElement,
  R extends HTMLElement
>(
  {
    children,
    reference,
    placement = 'bottom-start',
    autoSize = false,
  }: {
    reference: RefObject<T>;
    placement?: Parameters<typeof usePosition>[2]['placement'];
    children: ReactNode;
    autoSize?: boolean;
  },
  ref: Ref<R>
) {
  const notSmall = useMediaQuery('(min-width: 500px)');

  // eslint-disable-next-line no-nested-ternary
  return notSmall ? (
    autoSize ? (
      <DropdownDesktopAutoSize
        reference={reference}
        children={children}
        placement={placement}
        ref={ref}
      />
    ) : (
      <DropdownDesktop
        reference={reference}
        children={children}
        placement={placement}
        ref={ref}
      />
    )
  ) : (
    <DropdownMobile children={children} ref={ref} />
  );
});
