import { useMergedRefs } from '@rocket.chat/fuselage-hooks';
import type { ReactNode, Ref, FormEvent } from 'react';
import { forwardRef, useLayoutEffect, useRef, useCallback } from 'react';

import { Box, type BoxProps } from '../Box/Box.js';

// type CheckBoxProps = ComponentProps<typeof Box> & {
//   indeterminate?: boolean;
//   labelChildren?: ReactNode;
// } & AllHTMLAttributes<HTMLInputElement>;

export interface CheckBoxProps extends Omit<BoxProps, 'is'> {
  indeterminate?: boolean;
  labelChildren?: ReactNode;
}

export const CheckBox = forwardRef(function CheckBox(
  {
    indeterminate,
    onChange,
    className,
    labelChildren,
    ...props
  }: CheckBoxProps,
  ref: Ref<HTMLInputElement>,
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
});

// type NumberInputProps = Omit<InputBoxProps, 'type'> & {
//   addon?: ReactNode;
//   error?: string;
// };

// /**
//  * An input for numbers.
//  */
// export const NumberInput = forwardRef(function NumberInput(
//   props: NumberInputProps,
//   ref: Ref<HTMLInputElement>,
// ) {
//   return <InputBox type='number' ref={ref} {...props} />;
// });
