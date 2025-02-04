import type { AllHTMLAttributes, RefObject } from 'react';
import { forwardRef } from 'react';
import { useButton, AriaButtonProps } from 'react-aria';

import Box from '../Box';

type SelectTriggerProps = {
  small?: boolean;
  error?: string;
  focus?: boolean;
} & AriaButtonProps &
  AllHTMLAttributes<HTMLButtonElement>;

export const SelectTrigger = forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ small, error, isDisabled, focus, id, ...props }, ref) => {
    const { buttonProps } = useButton(
      props,
      ref as RefObject<HTMLButtonElement | null>,
    );

    return (
      <Box
        {...buttonProps}
        id={id}
        rcx-select
        ref={ref}
        is='button'
        display='flex'
        flexDirection='row'
        fontScale='p2'
        justifyContent='space-between'
        rcx-input-box--small={small}
        className={[
          error && 'invalid',
          isDisabled && 'disabled',
          focus && 'focus',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {props.children}
      </Box>
    );
  },
);
