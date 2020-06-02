import React, { forwardRef, useState, useCallback } from 'react';

import { Icon } from '../Icon';
import { InputBox } from '../InputBox';

export const SelectInput = forwardRef(function SelectInput({
  children,
  multiple,
  placeholder,
  onChange,
  ...props
}, ref) {
  const [isPlaceholderVisible, setPlaceholderVisible] = useState(!props.value && !props.defaultValue);
  const handleChange = useCallback((event, ...args) => {
    setPlaceholderVisible(!event.currentTarget.value);
    onChange && onChange.call(event.currentTarget, event, ...args);
  }, [onChange]);

  if (multiple) {
    return <InputBox
      children={children}
      {...props}
      multiple
      type='select'
      onChange={handleChange}
    />;
  }

  return <InputBox
    placeholderVisible={isPlaceholderVisible ? !!placeholder : undefined}
    ref={ref}
    {...props}
    addon={<Icon name='chevron-down' size='x20' />}
    type='select'
    onChange={handleChange}
  >
    {placeholder && <InputBox.Placeholder value=''>{placeholder}</InputBox.Placeholder>}
    {children}
  </InputBox>;
});

SelectInput.Option = InputBox.Option;
