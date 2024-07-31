import type { ReactNode, ForwardedRef } from 'react';
import { forwardRef, useState, useCallback } from 'react';

import { Icon } from '../Icon';
import type { InputBoxProps } from '../InputBox';
import { InputBox } from '../InputBox';

type SelectInputOptions = readonly (readonly [string, string])[];

type SelectInputProps = Omit<InputBoxProps, 'type'> & {
  error?: string;
  options?: SelectInputOptions;
  htmlSize?: number;
  addon?: ReactNode;
};

/** @public */
export const SelectInput = forwardRef(function SelectInput(
  { children, multiple, placeholder, onChange, ...props }: SelectInputProps,
  ref: ForwardedRef<HTMLElement>
) {
  const [isPlaceholderVisible, setPlaceholderVisible] = useState(
    !props.value && !props.defaultValue
  );
  const handleChange = useCallback(
    (event) => {
      setPlaceholderVisible(!event.currentTarget.value);
      onChange?.call(event.currentTarget, event);
    },
    [onChange]
  );

  if (multiple) {
    return (
      <InputBox
        children={children}
        {...props}
        multiple
        type='select'
        onChange={handleChange}
      />
    );
  }

  return (
    <InputBox
      placeholderVisible={isPlaceholderVisible ? !!placeholder : undefined}
      ref={ref}
      {...props}
      addon={<Icon name='chevron-down' size='x20' />}
      type='select'
      onChange={handleChange}
    >
      {placeholder && (
        <InputBox.Placeholder value=''>{placeholder}</InputBox.Placeholder>
      )}
      {children}
    </InputBox>
  );
});
