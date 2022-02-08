import React, { ComponentProps, forwardRef, Ref } from 'react';

import { Box } from '../Box';

type InputProps = ComponentProps<typeof Box>;

export const Input = forwardRef(function Input(
  props: InputProps,
  ref: Ref<HTMLInputElement>
) {
  return <Box is='input' animated rcx-input-box ref={ref} {...props} />;
});
