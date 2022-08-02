import type { usePosition } from '@rocket.chat/fuselage-hooks';
import { useBorderBoxSize } from '@rocket.chat/fuselage-hooks';
import type { ReactNode, Ref, RefObject } from 'react';
import React, { forwardRef } from 'react';

import { DropdownDesktop } from './DropdownDesktop';

export const DropdownDesktopAutoSize = forwardRef(
  function DropdownDesktopAutoSize<
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
    const { inlineSize } = useBorderBoxSize(reference, { debounceDelay: 30 });

    return (
      <DropdownDesktop
        reference={reference}
        children={children}
        placement={placement}
        ref={ref}
        width={inlineSize}
      />
    );
  }
);
