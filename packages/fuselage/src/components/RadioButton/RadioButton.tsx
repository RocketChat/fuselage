import type { AllHTMLAttributes, ReactNode, Ref } from 'react';
import { forwardRef } from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

type RadioButtonProps = BoxProps &
  AllHTMLAttributes<HTMLInputElement> & {
    labelChildren?: ReactNode;
  };

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
