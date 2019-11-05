import { useClassName } from '@rocket.chat/fuselage-hooks';
import PropTypes from 'prop-types';
import React, { useState, useCallback } from 'react';

import { Icon } from '../Icon';
import { InputBox } from '../InputBox';

export const SelectInput = React.forwardRef(function SelectInput({
  children,
  className,
  multiple,
  placeholder,
  onChange,
  ...props
}, ref) {
  const compoundClassName = useClassName('rcx-select-input', {}, className);

  const [isPlaceholderVisible, setPlaceholderVisible] = useState(!props.value && !props.defaultValue);
  const handleChange = useCallback((event, ...args) => {
    setPlaceholderVisible(!event.currentTarget.value);
    onChange && onChange.call(event.currentTarget, event, ...args);
  }, [onChange]);

  if (multiple) {
    return <InputBox
      children={children}
      className={compoundClassName}
      {...props}
      multiple
      type='select'
      onChange={handleChange}
    />;
  }

  return <InputBox
    className={compoundClassName}
    placeholderVisible={isPlaceholderVisible ? !!placeholder : undefined}
    ref={ref}
    {...props}
    addon={<Icon name='arrow-down' x20 />}
    floatingAddon
    type='select'
    onChange={handleChange}
  >
    <InputBox.Placeholder value=''>{placeholder}</InputBox.Placeholder>
    {children}
  </InputBox>;
});

SelectInput.displayName = 'SelectInput';

SelectInput.propTypes = {
  addon: PropTypes.element,
  error: PropTypes.string,
  invisible: PropTypes.bool,
  multiple: PropTypes.bool,
};

SelectInput.Option = InputBox.Option;
