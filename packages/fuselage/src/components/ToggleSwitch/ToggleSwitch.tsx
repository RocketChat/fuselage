import type { AllHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

import { Box, type BoxProps } from '../Box';

export type ToggleSwitchProps = BoxProps &
  AllHTMLAttributes<HTMLInputElement> & {
    labelChildren?: ReactNode;
  };

const ToggleSwitch = forwardRef<HTMLInputElement, ToggleSwitchProps>(
  function ToggleSwitch({ className, labelChildren, ...props }, ref) {
    return (
      <Box is='label' className={className} rcx-toggle-switch>
        {labelChildren}

        <Box
          is='input'
          ref={ref}
          rcx-toggle-switch__input
          type='checkbox'
          {...props}
        />
        <Box is='i' rcx-toggle-switch__fake aria-hidden='true' />
      </Box>
    );
  },
);

export default ToggleSwitch;
