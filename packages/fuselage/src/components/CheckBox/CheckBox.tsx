import { useMergedRefs } from '@rocket.chat/fuselage-hooks';
import type { ComponentProps, Ref, FormEvent, AllHTMLAttributes } from 'react';
import { forwardRef, useLayoutEffect, useRef, useCallback } from 'react';
import { VisuallyHidden } from 'react-aria';

import Box from '../Box';
import { useFieldWrappedByInputLabel } from '../Field/Field';

type CheckBoxProps = ComponentProps<typeof Box> & {
  indeterminate?: boolean;
} & AllHTMLAttributes<HTMLInputElement>;

export const CheckBox = forwardRef(function CheckBox(
  { indeterminate, onChange, className, ...props }: CheckBoxProps,
  ref: Ref<HTMLInputElement>,
) {
  const [label, labelProps] = useFieldWrappedByInputLabel();
  const innerRef = useRef<HTMLInputElement>(null);
  const mergedRef = useMergedRefs(ref, innerRef);

  useLayoutEffect(() => {
    if (innerRef && innerRef.current && indeterminate !== undefined) {
      innerRef.current.indeterminate = indeterminate;
    }
  }, [innerRef, indeterminate]);

  const handleChange = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      if (innerRef && innerRef.current && indeterminate !== undefined) {
        innerRef.current.indeterminate = indeterminate;
      }
      onChange?.call(innerRef.current, event);
    },
    [innerRef, indeterminate, onChange],
  );

  return (
    <Box is='label' className={className} rcx-check-box>
      {!!label && <VisuallyHidden>{label}</VisuallyHidden>}
      <Box
        is='input'
        type='checkbox'
        rcx-check-box__input
        ref={mergedRef}
        onChange={handleChange}
        {...labelProps}
        {...props}
      />
      <Box is='i' rcx-check-box__fake aria-hidden='true' />
    </Box>
  );
});
