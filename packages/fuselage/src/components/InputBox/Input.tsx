import { forwardRef } from 'react';

import { Box, type BoxProps } from '../Box';

export type InputProps = BoxProps;

// Input — the native input/textarea/select element
// Previously styled via .rcx-input-box SCSS class
// Now receives all styles via Box props from InputBox parent

const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input(props, ref) {
    return <Box is='input' animated ref={ref} {...props} />;
  },
);

export default Input;
