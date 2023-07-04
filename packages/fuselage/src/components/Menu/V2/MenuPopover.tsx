import { useBreakpoints } from '@rocket.chat/fuselage-hooks';
import React from 'react';
import { usePopover } from 'react-aria';
import type { AriaPopoverProps } from 'react-aria';
import type { OverlayTriggerState } from 'react-stately';

import { DropdownDesktop } from '../../Dropdown/DropdownDesktop';
import { DropdownMobile } from '../../Dropdown/DropdownMobile';

interface PopoverProps extends Omit<AriaPopoverProps, 'popoverRef'> {
  children: React.ReactNode;
  state: OverlayTriggerState;
  maxWidth?: string;
}

function MenuPopover({
  children,
  state,
  offset = 4,
  maxWidth,
  ...props
}: PopoverProps) {
  const popoverRef = React.useRef(null);
  const { popoverProps } = usePopover(
    {
      ...props,
      offset,
      popoverRef,
    },
    state
  );

  const breakpoints = useBreakpoints();
  const isMobile = !breakpoints.includes('sm');

  if (isMobile) {
    const mobileProps = { ...popoverProps, style: { bottom: 0, left: 0 } };
    return <DropdownMobile children={children} {...mobileProps} />;
  }

  return (
    <DropdownDesktop
      children={children}
      ref={popoverRef}
      maxWidth={maxWidth}
      {...popoverProps}
    />
  );
}
export default MenuPopover;
