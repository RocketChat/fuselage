import { useMergedRefs } from '@rocket.chat/fuselage-hooks';
import type { FormEvent, AllHTMLAttributes, ReactNode } from 'react';
import { forwardRef, useLayoutEffect, useRef, useCallback } from 'react';

import { Box, type BoxProps } from '../Box';

export type CheckBoxProps = BoxProps & {
  indeterminate?: boolean;
  labelChildren?: ReactNode;
} & AllHTMLAttributes<HTMLInputElement>;

const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(function CheckBox(
  { indeterminate, onChange, className, labelChildren, ...props },
  ref,
) {
  const innerRef = useRef<HTMLInputElement>(null);
  const mergedRef = useMergedRefs(ref, innerRef);

  useLayoutEffect(() => {
    if (innerRef.current && indeterminate !== undefined) {
      innerRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const handleChange = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      if (innerRef.current && indeterminate !== undefined) {
        innerRef.current.indeterminate = indeterminate;
      }
      onChange?.call(innerRef.current, event);
    },
    [indeterminate, onChange],
  );

  return (
    <Box is={'label' as unknown as React.ElementType} className={className} rcx-check-box>
      {labelChildren}
      <Box
        is={'input' as unknown as React.ElementType}
        type='checkbox'
        rcx-check-box__input
        ref={mergedRef}
        onChange={handleChange}
        {...props}
      />
      <Box is={'i' as unknown as React.ElementType} rcx-check-box__fake aria-hidden='true' />
    </Box>
  );
});

export default CheckBox;