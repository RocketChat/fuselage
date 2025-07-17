import type { AllHTMLAttributes, ComponentProps, ReactNode, Ref } from 'react';
import { forwardRef } from 'react';

import Box from '../Box';

export const RadioButton = forwardRef(function RadioButton(
  {
    className,
    labelChildren,
    ...props
  }: ComponentProps<typeof Box> &
    AllHTMLAttributes<HTMLInputElement> & {
      labelChildren?: ReactNode;
    },
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
