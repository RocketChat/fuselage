import type { Ref } from 'react';
import React, { forwardRef } from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

type InputProps = BoxProps;

export const Input = forwardRef(function Input(
  props: InputProps,
  ref: Ref<HTMLInputElement>
) {
  return <Box is='input' animated rcx-input-box ref={ref} {...props} />;
});
