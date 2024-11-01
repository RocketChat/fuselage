import type { UsePositionOptions } from '@rocket.chat/fuselage-hooks';
import { useMediaQuery } from '@rocket.chat/fuselage-hooks';
import type { ReactNode, Ref, RefObject } from 'react';
import { forwardRef } from 'react';

import { DropdownDesktopWrapper } from './DropdownDesktopWrapper';
import { DropdownMobile } from './DropdownMobile';

export const Dropdown = forwardRef(function Dropdown<
  T extends HTMLElement,
  R extends HTMLElement,
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
  ref: Ref<R>,
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
