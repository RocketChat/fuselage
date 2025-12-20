import type { AllHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

import { Box, type BoxProps } from '../Box';

export type RadioButtonProps = BoxProps &
  AllHTMLAttributes<HTMLInputElement> & {
    labelChildren?: ReactNode;
  };

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  function RadioButton({ className, labelChildren, ...props }, ref) {
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
  },
);

export default RadioButton;
