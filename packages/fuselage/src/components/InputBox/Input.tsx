import { forwardRef } from 'react';

import { Box, type BoxProps } from '../Box';

export type InputProps = BoxProps;

const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input(props, ref) {
    return <Box is='input' animated rcx-input-box ref={ref} {...props} />;
  },
);

export default Input;
