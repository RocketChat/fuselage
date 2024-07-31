import { useMergedRefs } from '@rocket.chat/fuselage-hooks';
import type { FormEvent, AllHTMLAttributes, ForwardedRef } from 'react';
import { forwardRef, useLayoutEffect, useRef, useCallback } from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

/** @public */
export type CheckBoxProps = BoxProps & {
  indeterminate?: boolean;
} & AllHTMLAttributes<HTMLInputElement>;

/** @public */
const CheckBox = forwardRef(function CheckBox(
  { indeterminate, onChange, className, ...props }: CheckBoxProps,
  ref: ForwardedRef<HTMLInputElement>
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
    <Box is='label' className={className} rcx-check-box>
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

export default CheckBox;
