import type { FormEvent, ReactNode, Ref } from 'react';
import { forwardRef, useState, useCallback } from 'react';

import { Icon } from '../Icon';
import { InputBox, type InputBoxProps } from '../InputBox';

import SelectInputPlaceholder from './SelectInputPlaceholder';

type SelectInputOptions = readonly (readonly [string, string])[];

export type SelectInputProps = Omit<InputBoxProps, 'type'> & {
  error?: string;
  options?: SelectInputOptions;
  htmlSize?: number;
  addon?: ReactNode;
};

/**
 * An input for selection of options.
 */
const SelectInput = forwardRef(function SelectInput(
  { children, multiple, placeholder, onChange, ...props }: SelectInputProps,
  ref: Ref<HTMLElement>,
) {
  const [isPlaceholderVisible, setPlaceholderVisible] = useState(
    !props.value && !props.defaultValue,
  );
  const handleChange = useCallback(
    (event: FormEvent<HTMLSelectElement>) => {
      setPlaceholderVisible(!event.currentTarget.value);
      onChange?.call(event.currentTarget, event);
    },
    [onChange],
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
        <SelectInputPlaceholder value=''>{placeholder}</SelectInputPlaceholder>
      )}
      {children}
    </InputBox>
  );
});

export default SelectInput;
