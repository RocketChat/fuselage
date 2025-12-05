import { forwardRef } from 'react';

import { Box, type BoxProps } from '../Box';

export type SelectInputOptionProps = BoxProps;

const SelectInputOption = forwardRef<HTMLOptionElement, SelectInputOptionProps>(
  function SelectInputOption(props, ref) {
    return <Box is='option' rcx-input-box__option ref={ref} {...props} />;
  },
);

export default SelectInputOption;
