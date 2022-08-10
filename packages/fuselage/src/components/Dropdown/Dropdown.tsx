import type { usePosition } from '@rocket.chat/fuselage-hooks';
import { useMediaQuery } from '@rocket.chat/fuselage-hooks';
import type { ReactNode, Ref, RefObject } from 'react';
import React, { forwardRef } from 'react';
import { CSSTransition } from 'react-transition-group';

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
    visible,
    onShow,
    onClose,
  }: {
    reference: RefObject<T>;
    placement?: Parameters<typeof usePosition>[2]['placement'];
    children: ReactNode;
    autoSize?: boolean;
    visible?: boolean;
    onShow?: () => void;
    onClose?: () => void;
  },
  ref: Ref<R>
) {
  const notSmall = useMediaQuery('(min-width: 500px)');

  return notSmall ? (
    <CSSTransition
      in={visible}
      timeout={300}
      unmountOnExit
      onEnter={onShow}
      onExited={onClose}
      classNames='rcx-dropdown'
    >
      {autoSize ? (
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
      )}
    </CSSTransition>
  ) : (
    <DropdownMobile children={children} ref={ref} />
  );
});
