import { forwardRef } from 'react';

import { Box, type BoxProps } from '../Box';

type SelectFocusProps = BoxProps;

const SelectFocus = forwardRef<Element, SelectFocusProps>(
  function SelectFocus(props, ref) {
    return (
      <Box
        ref={ref}
        fontScale='p2m'
        color='hint'
        rcx-select__focus
        is='div'
        tabIndex={0}
        {...props}
      />
    );
  },
);

export default SelectFocus;
