import React, { useRef, useState, useCallback } from 'react';

import { Icon } from '../Icon';
import { InputBox } from '../InputBox';
import { Text } from '../Text';
import { useMergedRefs, useClassName } from '../../hooks';

const Placeholder = React.forwardRef(function Placeholder(props, ref) {
  const compoundClassName = useClassName('rcx-select-input__placeholder');
  return <Text className={compoundClassName} is='option' ref={ref} {...props} />;
});

Placeholder.displayName = 'SelectInput.Placeholder';

export const SelectInput = React.forwardRef(function SelectInput({
  children,
  placeholder,
  onChange,
  ...props
}, ref) {
  const innerRef = useRef();
  const mergedRef = useMergedRefs(ref, innerRef);
  const [value, setValue] = useState(props.value || props.defaultValue);

  const handleChange = useCallback((event) => {
    setValue(event.currentTarget.value);
    onChange && onChange(event);
  }, [onChange]);

  return <InputBox
    addon={<Icon name='arrow-down' />}
    data-placeholder={!value ? placeholder : undefined}
    is='select'
    ref={mergedRef}
    onChange={handleChange}
    {...props}
  >
    <Placeholder value=''>{placeholder}</Placeholder>
    {children}
  </InputBox>;
});

SelectInput.displayName = 'SelectInput';

SelectInput.Option = React.forwardRef(function Option(props, ref) {
  const compoundClassName = useClassName('rcx-select-input__option');
  return <Text className={compoundClassName} is='option' ref={ref} {...props} />;
});

SelectInput.Option.displayName = 'SelectInput.Option';
