import type { ForwardedRef } from 'react';
import React, { forwardRef } from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

/** @public */
export type InputProps = BoxProps;

/** @public */
const Input = forwardRef(function Input(
  props: InputProps,
  ref: ForwardedRef<any>
) {
  return <Box is='input' animated rcx-input-box ref={ref} {...props} />;
});

export default Input;
