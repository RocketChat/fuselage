import { usePosition } from '@rocket.chat/fuselage-hooks';
import React, { useRef } from 'react';
import { DismissButton, useOverlay, FocusScope } from 'react-aria';
// import type { AriaListBoxOptions } from 'react-aria';

import Tile from '../../Tile';

export const SelectPopover = function ListBox<T extends Element>({
  children,
  anchor,
  onClose,
  isOpen,
  popoverRef,
}: {
  children: React.ReactNode;
  anchor: React.RefObject<T>;
  isOpen: boolean;
  popoverRef?: React.RefObject<HTMLUListElement>;
  onClose: () => void;
}) {
  const ref = useRef<HTMLUListElement>(null);
  const { style } = usePosition(anchor, popoverRef || ref, {
    watch: true,
  });

  const { overlayProps } = useOverlay(
    {
      isOpen,
      onClose,
      shouldCloseOnBlur: false,
      isDismissable: true,
    },
    popoverRef || ref
  );

  return (
    <FocusScope restoreFocus>
      <Tile
        ref={popoverRef || ref}
        {...overlayProps}
        rcx-options
        padding={0}
        paddingBlock={'x12'}
        paddingInline={0}
        elevation='2'
        is='div'
        style={style}
      >
        {(!('visibility' in style) ||
          ('visibility' in style && style.visibility !== 'hidden')) &&
          children}
        <DismissButton onDismiss={onClose} />
      </Tile>
    </FocusScope>
  );
};
