import { useClassName } from '@rocket.chat/fuselage-hooks';
import PropTypes from 'prop-types';
import React, { useState, useCallback } from 'react';

import { useTheme } from '../../hooks/useTheme';
import { Icon } from '../Icon';
import { StyledSelectInput, StyledPlaceholder, StyledOption } from './styles';
import { InputBox } from '../InputBox';

const Placeholder = React.forwardRef(function Placeholder({
  className,
  ...props
}, ref) {
  const compoundClassName = useClassName('rcx-select-input__placeholder', {}, className);
  const theme = useTheme();
  return <StyledPlaceholder className={compoundClassName} ref={ref} theme={theme} {...props} />;
});

Placeholder.displayName = 'SelectInput.Placeholder';

Placeholder.propTypes = {
  children: PropTypes.string,
  invisible: PropTypes.bool,
};

const Option = React.forwardRef(function Option({
  className,
  ...props
}, ref) {
  const compoundClassName = useClassName('rcx-select-input__option', {}, className);
  const theme = useTheme();
  return <StyledOption className={compoundClassName} ref={ref} theme={theme} {...props} />;
});

Option.displayName = 'SelectInput.Option';

Option.propTypes = {
  children: PropTypes.string,
  invisible: PropTypes.bool,
};

export const SelectInput = React.forwardRef(function SelectInput({
  children,
  className,
  multiple,
  placeholder,
  onChange,
  ...props
}, ref) {
  const compoundClassName = useClassName('rcx-select-input', {}, className);
  const theme = useTheme();

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

  return <StyledSelectInput
    className={compoundClassName}
    placeholderVisible={isPlaceholderVisible ? placeholder : undefined}
    ref={ref}
    theme={theme}
    {...props}
    addon={<Icon name='arrow-down' />}
    type='select'
    onChange={handleChange}
  >
    <Placeholder value=''>{placeholder}</Placeholder>
    {children}
  </StyledSelectInput>;
});

SelectInput.displayName = 'SelectInput';

SelectInput.propTypes = {
  addon: PropTypes.element,
  error: PropTypes.string,
  invisible: PropTypes.bool,
  multiple: PropTypes.bool,
};

SelectInput.Option = Option;
