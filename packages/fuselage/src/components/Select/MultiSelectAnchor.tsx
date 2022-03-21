import type {
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  Ref,
} from 'react';
import React, { forwardRef } from 'react';

import { Box } from '../Box';

type MultiSelectAnchorProps = {
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
      is='button'
      rcx-select__focus
      ref={ref}
      margin={4}
      fontScale='p2'
      color='hint'
      type='button'
      display='inline-block'
      minWidth='auto'
      textAlign='start'
      verticalAlign='middle'
      textDecoration='none'
      aria-haspopup='listbox'
      {...props}
    />
  );
});

export default MultiSelectAnchor;
