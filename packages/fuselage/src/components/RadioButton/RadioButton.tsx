import type { AllHTMLAttributes, ComponentProps, Ref } from 'react';
import { forwardRef } from 'react';
import { VisuallyHidden } from 'react-aria';

import Box from '../Box';
import { useFieldWrappedByInputLabel } from '../Field/Field';

type RadioButtonProps = ComponentProps<typeof Box> &
  AllHTMLAttributes<HTMLInputElement>;

export const RadioButton = forwardRef(function RadioButton(
  { className, ...props }: RadioButtonProps,
  ref: Ref<HTMLInputElement>,
) {
  const [label, radioLabelProps] = useFieldWrappedByInputLabel();
  return (
    <Box is='label' className={className} rcx-radio-button>
      {!!label && <VisuallyHidden>{label}</VisuallyHidden>}
      <Box
        is='input'
        rcx-radio-button__input
        type='radio'
        ref={ref}
        {...radioLabelProps}
        {...props}
      />
      <Box is='i' rcx-radio-button__fake aria-hidden='true' />
    </Box>
  );
});
