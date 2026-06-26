import { useBreakpoints } from '@rocket.chat/fuselage-hooks';
import type { ReactNode } from 'react';
import { useRef } from 'react';
import type { AriaPopoverProps } from 'react-aria';
import type { OverlayTriggerState } from 'react-stately';

import { DropdownDesktop } from '../Dropdown/DropdownDesktop';
import { DropdownMobile } from '../Dropdown/DropdownMobile';
import { Popover } from '../Popover';

import { MenuPortalContext, useMenuPortalContainer } from './MenuPortalContext';

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

  // The root popover (no container above it) renders a `display: contents`
  // mount point and shares it with the rest of the tree. Submenu popovers
  // portal into it, so their DOM nests under the root popover and the whole
  // tree behaves as one for focus/`aria-hidden` purposes — matching how
  // `react-aria-components` groups submenu popovers via `PopoverGroupContext`.
  const groupContainer = useMenuPortalContainer();
  const containerRef = useRef<HTMLDivElement>(null);
  const isSubmenu = groupContainer !== null;

  const popover = (
    <Popover
      state={state}
      offset={offset}
      {...props}
      portalContainer={
        isSubmenu ? (groupContainer?.current ?? undefined) : undefined
      }
    >
      {isMobile ? (
        <DropdownMobile>{children}</DropdownMobile>
      ) : (
        <DropdownDesktop maxHeight='80vh' overflowY='auto' maxWidth={maxWidth}>
          {children}
        </DropdownDesktop>
      )}
      {!isSubmenu && (
        <span ref={containerRef} style={{ display: 'contents' }} />
      )}
    </Popover>
  );

  if (isSubmenu) {
    return popover;
  }

  return (
    <MenuPortalContext.Provider value={containerRef}>
      {popover}
    </MenuPortalContext.Provider>
  );
}

export default MenuPopover;
