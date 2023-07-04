import type { UsePositionOptions } from '@rocket.chat/fuselage-hooks';
import { usePosition } from '@rocket.chat/fuselage-hooks';
import type { ReactNode, Ref, RefObject } from 'react';
import React, { forwardRef } from 'react';

import { DropdownDesktop } from './DropdownDesktop';

export const DropdownDesktopWrapper = forwardRef(
  function DropdownDesktopWrapper<T extends HTMLElement, R extends HTMLElement>(
    {
      children,
      reference,
      placement = 'bottom-start',
      ...props
    }: {
      reference: RefObject<T>;
      placement?: UsePositionOptions['placement'];
      children: ReactNode;
    },
    ref: Ref<R>
  ) {
    const { style } = usePosition(reference, ref as RefObject<R>, {
      placement,
    });

    return (
      <DropdownDesktop style={style} children={children} ref={ref} {...props} />
    );
  }
);
