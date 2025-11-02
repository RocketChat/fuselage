import type { ReactNode, Ref } from 'react';
import { forwardRef } from 'react';

import Box, { type BoxProps } from '../Box/index.js';

export interface RadioButtonProps extends BoxProps {
  labelChildren?: ReactNode;
}

export const RadioButton = forwardRef(function RadioButton(
  { className, labelChildren, ...props }: RadioButtonProps,
  ref: Ref<HTMLInputElement>,
) {
  return (
    <Box is='label' className={className} rcx-radio-button>
      {labelChildren}
      <Box
        is='input'
        rcx-radio-button__input
        type='radio'
        ref={ref}
        {...props}
      />
      <Box is='i' rcx-radio-button__fake aria-hidden='true' />
    </Box>
  );
});
