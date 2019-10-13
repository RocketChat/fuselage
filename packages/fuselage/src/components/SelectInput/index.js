import { useClassName } from '@rocket.chat/fuselage-hooks';
import React, { useState, useCallback } from 'react';

import { useTheme } from '../../hooks/useTheme';
import { Icon } from '../Icon';
import { StyledSelectInput, StyledPlaceholder, StyledOption } from './styles';

const Placeholder = React.forwardRef(function Placeholder(props, ref) {
  const compoundClassName = useClassName('rcx-select-input__placeholder');
  const theme = useTheme();
  return <StyledPlaceholder className={compoundClassName} ref={ref} theme={theme} {...props} />;
});

Placeholder.displayName = 'SelectInput.Placeholder';

const Option = React.forwardRef(function Option(props, ref) {
  const compoundClassName = useClassName('rcx-select-input__option');
  const theme = useTheme();
  return <StyledOption className={compoundClassName} ref={ref} theme={theme} {...props} />;
});

Option.displayName = 'SelectInput.Option';

export const SelectInput = React.forwardRef(function SelectInput({
  children,
  className,
  placeholder,
  onChange,
  ...props
}, ref) {
  const [isPlaceholderVisible, setPlaceholderVisible] = useState(!props.value && !props.defaultValue);
  const compoundClassName = useClassName('rcx-select-input', {}, className);
  const theme = useTheme();

  const handleChange = useCallback((event, ...args) => {
    setPlaceholderVisible(!event.currentTarget.value);
    onChange && onChange.call(event.currentTarget, event, ...args);
  }, [onChange]);

  return <StyledSelectInput
    addon={<Icon name='arrow-down' />}
    className={compoundClassName}
    htmlPlaceholder={isPlaceholderVisible ? placeholder : undefined}
    ref={ref}
    theme={theme}
    type='select'
    onChange={handleChange}
    {...props}
  >
    <Placeholder value=''>{placeholder}</Placeholder>
    {children}
  </StyledSelectInput>;
});

SelectInput.displayName = 'SelectInput';

SelectInput.Option = Option;
