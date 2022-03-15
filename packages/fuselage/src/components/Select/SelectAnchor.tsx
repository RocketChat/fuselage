import type { Ref } from 'react';
import React, { forwardRef } from 'react';

import { Box } from '../Box';
import type { SelectAnchorParams } from './SelectAnchorParams';

type SelectAnchorProps = SelectAnchorParams;

const SelectAnchor = forwardRef(function SelectFocus(
  { placeholder, filled, ...props }: SelectAnchorProps,
  ref: Ref<Element>
) {
  return (
    <Box
      is='button'
      rcx-select__focus
      ref={ref}
      fontScale='p2m'
      color='hint'
      type='button'
      {...props}
    >
      {filled ? null : placeholder}
    </Box>
  );
});

export default SelectAnchor;
