import type { Ref } from 'react';
import React, { forwardRef } from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

type SelectFocusProps = BoxProps;

const SelectFocus = forwardRef(function SelectFocus(
  props: SelectFocusProps,
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
      {...props}
    />
  );
});

export default SelectFocus;
