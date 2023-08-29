import { useMergedRefs } from '@rocket.chat/fuselage-hooks';
import type { ComponentProps, Ref, FormEvent, AllHTMLAttributes } from 'react';
import React, { forwardRef, useLayoutEffect, useRef, useCallback } from 'react';

import Box from '../Box';
import { Label } from '../Label';

type CheckBoxProps = ComponentProps<typeof Box> & {
  indeterminate?: boolean;
} & AllHTMLAttributes<HTMLInputElement>;

export const CheckBox = forwardRef(function CheckBox(
  { indeterminate, onChange, ...props }: CheckBoxProps,
  ref: Ref<HTMLInputElement>
) {
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
      onChange && onChange.call(innerRef.current, event);
    },
    [innerRef, indeterminate, onChange]
  );

  return (
    <Box is={Label} rcx-check-box>
      <Box
        is='input'
        type='checkbox'
        rcx-check-box__input
        ref={mergedRef}
        onChange={handleChange}
        {...props}
      />
      <Box is='i' rcx-check-box__fake aria-hidden='true' />
    </Box>
  );
});
