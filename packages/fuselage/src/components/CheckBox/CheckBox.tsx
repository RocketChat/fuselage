import { useMergedRefs } from '@rocket.chat/fuselage-hooks';
import type { FormEvent, AllHTMLAttributes, ReactNode } from 'react';
import { forwardRef, useLayoutEffect, useRef, useCallback } from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

type CheckBoxProps = BoxProps & {
  indeterminate?: boolean;
  labelChildren?: ReactNode;
} & AllHTMLAttributes<HTMLInputElement>;

export const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  function CheckBox(
    { indeterminate, onChange, className, labelChildren, ...props },
    ref,
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
        onChange?.call(innerRef.current, event);
      },
      [innerRef, indeterminate, onChange],
    );

    return (
      <Box is='label' className={className} rcx-check-box>
        {labelChildren}
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
  },
);
