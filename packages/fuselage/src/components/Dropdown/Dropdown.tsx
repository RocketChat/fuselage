import type { UsePositionOptions } from '@rocket.chat/fuselage-hooks';
import { usePosition, useMediaQuery } from '@rocket.chat/fuselage-hooks';
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
  const notSmall = useMediaQuery('(min-width: 500px)');

  const { style } = usePosition(reference, ref as RefObject<R>, { placement });

  return notSmall ? (
    <DropdownDesktop children={children} ref={ref} style={style} />
  ) : (
    <DropdownMobile children={children} ref={ref} />
  );
});
