import React, { useRef, useMemo, memo, cloneElement } from 'react';
import { useOverlay, FocusScope } from 'react-aria';

import { Dropdown } from '../../Dropdown';
// import type { AriaListBoxOptions } from 'react-aria';

// import Tile from '../../Tile';
export const SelectPopover = memo(function ListBox<T extends HTMLElement>({
  children,
  anchor,
  onClose,
  isOpen,
}: {
  children: React.ReactElement;
  anchor: React.RefObject<T>;
  isOpen: boolean;
  width?: string;
  onClose: () => void;
}) {
  const ref = useRef<HTMLUListElement>(null);
  const { overlayProps } = useOverlay(
    useMemo(
      () => ({
        isOpen,
        onClose,
        shouldCloseOnBlur: false,
        isDismissable: true,
      }),
      [isOpen, onClose]
    ),
    ref
  );
  return (
    <FocusScope restoreFocus>
      <Dropdown autoSize reference={anchor} ref={ref}>
        <>{cloneElement(children, overlayProps)}</>
      </Dropdown>
    </FocusScope>
  );
});
