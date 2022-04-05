import { useMergedRefs } from '@rocket.chat/fuselage-hooks';
import type { ComponentProps, Ref, FormEvent } from 'react';
import React, { forwardRef, useLayoutEffect, useRef, useCallback } from 'react';

import Box from '../Box';
import { Label } from '../Label';

type CheckBoxProps = ComponentProps<typeof Box> & {
  'indeterminate'?: boolean;
  'qa'?: string;
  'data-qa'?: string;
};

export const CheckBox = forwardRef(function CheckBox(
  {
    autoComplete,
    checked,
    defaultChecked,
    disabled,
    form,
    id,
    indeterminate,
    name,
    required,
    tabIndex,
    value,
    qa,
    'data-qa': dataQa,
    onChange,
    onInput,
    onInvalid,
    ...props
  }: CheckBoxProps,
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
    <Box is={Label} rcx-check-box {...props}>
      <Box
        is='input'
        rcx-check-box__input
        autoComplete={autoComplete}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        form={form}
        id={id}
        name={name}
        required={required}
        tabIndex={tabIndex}
        type='checkbox'
        value={value}
        data-qa={dataQa || qa}
        ref={mergedRef}
        onChange={handleChange}
        onInput={onInput}
        onInvalid={onInvalid}
      />
      <Box is='i' rcx-check-box__fake aria-hidden='true' />
    </Box>
  );
});
