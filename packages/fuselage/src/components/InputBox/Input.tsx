import type { Ref } from 'react';
import { forwardRef } from 'react';

import Box, { type BoxProps } from '../Box';

export type InputProps = BoxProps;

const Input = forwardRef(function Input(
  props: InputProps,
  ref: Ref<HTMLInputElement>,
) {
  return <Box is='input' animated rcx-input-box ref={ref} {...props} />;
});

export default Input;
