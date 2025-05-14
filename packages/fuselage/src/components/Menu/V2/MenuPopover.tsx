import { useBreakpoints } from '@rocket.chat/fuselage-hooks';
import type { ReactNode } from 'react';
import type { AriaPopoverProps } from 'react-aria';
import type { OverlayTriggerState } from 'react-stately';

import { DropdownDesktop } from '../../Dropdown/DropdownDesktop';
import { DropdownMobile } from '../../Dropdown/DropdownMobile';
import { Popover } from '../../Popover';

interface MenuPopoverProps extends Omit<AriaPopoverProps, 'popoverRef'> {
  children: ReactNode;
  state: OverlayTriggerState;
  maxWidth?: string;
}

function MenuPopover({
  children,
  state,
  offset = 4,
  maxWidth,
  ...props
}: MenuPopoverProps) {
  const isMobile = !useBreakpoints().includes('sm');

  if (isMobile) {
    return (
      <Popover state={state} offset={offset} {...props}>
        <DropdownMobile>{children}</DropdownMobile>
      </Popover>
    );
  }

  return (
    <Popover state={state} offset={offset} {...props}>
      <DropdownDesktop maxWidth={maxWidth}>{children}</DropdownDesktop>
    </Popover>
  );
}
export default MenuPopover;
