import type { ComponentProps, Ref } from 'react';
import React, { forwardRef } from 'react';

import Box from '../Box';

type PaginatedSelectFocusProps = ComponentProps<typeof Box>;

const PaginatedSelectFocus = forwardRef(function PaginatedSelectFocus(
  props: PaginatedSelectFocusProps,
  ref: Ref<HTMLButtonElement>
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

export default PaginatedSelectFocus;
