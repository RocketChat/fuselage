import type {
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  Ref,
} from 'react';
import React, { forwardRef } from 'react';

import { Box } from '../Box';

type SelectAnchorProps = {
  disabled: boolean;
  placeholder: string | undefined;
  onClick: MouseEventHandler;
  onBlur: FocusEventHandler;
  onKeyUp: KeyboardEventHandler;
  onKeyDown: KeyboardEventHandler;
};

const SelectAnchor = forwardRef(function SelectAnchor(
  { placeholder, ...props }: SelectAnchorProps,
  ref: Ref<Element>
) {
  return (
    <Box
      is='button'
      rcx-select__focus
      rcx-select__focus--hidden
      ref={ref}
      fontScale='p2m'
      color='hint'
      type='button'
      {...props}
    >
      {placeholder}
    </Box>
  );
});

export default SelectAnchor;
