import type {
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  ReactNode,
  Ref,
} from 'react';
import React, { forwardRef } from 'react';

import { Box } from '../Box';

type MultiSelectAnchorProps = {
  children: ReactNode;
  disabled: boolean;
  onClick: MouseEventHandler;
  onBlur: FocusEventHandler;
  onKeyUp: KeyboardEventHandler;
  onKeyDown: KeyboardEventHandler;
};

const MultiSelectAnchor = forwardRef(function MultiSelectAnchor(
  props: MultiSelectAnchorProps,
  ref: Ref<Element>
) {
  return (
    <Box
      ref={ref}
      fontScale='p2m'
      color='hint'
      rcx-select__focus
      is='button'
      type='button'
      rcx-input-box--undecorated
      aria-haspopup='listbox'
      order={1}
      {...props}
    />
  );
});

export default MultiSelectAnchor;
