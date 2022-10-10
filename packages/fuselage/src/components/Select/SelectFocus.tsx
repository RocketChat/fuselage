import type { ComponentProps, Ref } from 'react';
import React, { forwardRef } from 'react';

import Box from '../Box';

type SelectFocusProps = ComponentProps<typeof Box>;

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
