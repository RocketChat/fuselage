import type { UsePositionOptions } from '@rocket.chat/fuselage-hooks';
import { usePosition } from '@rocket.chat/fuselage-hooks';
import type { ReactNode, RefObject } from 'react';
import { forwardRef } from 'react';

import { DropdownDesktop } from './DropdownDesktop';

export type DropdownDesktopWrapperProps<T extends HTMLElement> = {
  reference: RefObject<T>;
  placement?: UsePositionOptions['placement'];
  children: ReactNode;
};

export const DropdownDesktopWrapper = forwardRef<
  HTMLElement,
  DropdownDesktopWrapperProps<HTMLElement>
>(function DropdownDesktopWrapper(
  { children, reference, placement = 'bottom-start', ...props },
  ref,
) {
  const { style } = usePosition(reference, ref as RefObject<HTMLElement>, {
    placement,
  });

  return (
    <DropdownDesktop style={style} children={children} ref={ref} {...props} />
  );
});
