import type { AllHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

type RadioButtonProps = BoxProps &
  AllHTMLAttributes<HTMLInputElement> & {
    labelChildren?: ReactNode;
  };

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
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
