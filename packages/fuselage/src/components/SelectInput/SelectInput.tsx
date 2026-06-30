import type { ChangeEvent } from 'react';
import { useState, useCallback } from 'react';

import { Icon } from '../Icon';
import { InputBox, type InputBoxProps } from '../InputBox';

import SelectInputPlaceholder from './SelectInputPlaceholder';

export type SelectInputProps = Omit<InputBoxProps<HTMLSelectElement>, 'type'>;

/**
 * An input for selection of options.
 */
function SelectInput({
  ref,
  children,
  multiple,
  placeholder,
  onChange,
  ...props
}: SelectInputProps) {
  const [isPlaceholderVisible, setPlaceholderVisible] = useState(
    !props.value && !props.defaultValue,
  );
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
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
      endAddon={<Icon name='chevron-down' size='x20' />}
      type='select'
      onChange={handleChange}
    >
      {placeholder && (
        <SelectInputPlaceholder value=''>{placeholder}</SelectInputPlaceholder>
      )}
      {children}
    </InputBox>
  );
}

export default SelectInput;
