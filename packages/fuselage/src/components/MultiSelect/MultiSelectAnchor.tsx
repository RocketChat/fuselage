import type { Ref } from 'react';
import React, { forwardRef } from 'react';

import { Box } from '../Box';
import type { MultiSelectAnchorParams } from './MultiSelectAnchorParams';

type MultiSelectAnchorProps = MultiSelectAnchorParams;

const MultiSelectAnchor = forwardRef(function MultiSelectAnchor(
  { placeholder, filled, ...props }: MultiSelectAnchorProps,
  ref: Ref<Element>
) {
  return (
    <Box
      is='button'
      rcx-multi-select__focus
      ref={ref}
      marginInline={4}
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
    >
      {filled ? null : placeholder}
    </Box>
  );
});

export default MultiSelectAnchor;
