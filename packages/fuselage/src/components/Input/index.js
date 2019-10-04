import React from 'react';

import { useClassName } from '../../hooks';
import { Icon } from '../Icon';

const TextInput = React.forwardRef(function TextInput({
  className,
  icon,
  invalid,
  ...props
}, ref) {
  const classNames = {
    container: useClassName('rcx-input__wrapper'),
    input: useClassName('rcx-input', { invalid }, className),
  };

  if (!icon) {
    return <input className={classNames.input} ref={ref} {...props} />;
  }

  return <span className={classNames.container}>
    <input className={classNames.input} ref={ref} {...props} />
    <Icon iconName={icon} />
  </span>;
});

const TextAreaInput = React.forwardRef(function TextAreaInput({
  className,
  icon,
  invalid,
  ...props
}, ref) {
  const classNames = {
    container: useClassName('rcx-input__wrapper'),
    input: useClassName('rcx-input', { invalid }, className),
  };

  if (!icon) {
    return <textarea className={classNames.input} ref={ref} {...props} />;
  }

  return <span className={classNames.container}>
    <textarea className={classNames.input} ref={ref} {...props} />
    <Icon iconName={icon} />
  </span>;
});

const SelectInput = React.forwardRef(function SelectInput({
  children,
  className,
  invalid,
  placeholder,
  value,
  ...props
}, ref) {
  const classNames = {
    container: useClassName('rcx-input__wrapper'),
    input: useClassName('rcx-input', {
      invalid,
      hasPlaceholder: !!placeholder && !value,
    }, className),
    placeholder: useClassName('rcx-input__placeholder'),
  };

  return <span className={classNames.container}>
    <select className={classNames.input} ref={ref} value={value} {...props}>
      <option className={classNames.placeholder} value=''>{placeholder}</option>
      {children}
    </select>
    <Icon iconName='arrow-down' />
  </span>;
});

/**
 * The purpose of the `Input` component is to allow user input.
 */
export const Input = React.forwardRef(function Input({
  type = 'text',
  ...props
}, ref) {
  return (type === 'select' && <SelectInput ref={ref} {...props} />)
    || (type === 'textarea' && <TextAreaInput ref={ref} {...props} />)
    || <TextInput ref={ref} type={type} {...props} />;
});

Input.displayName = 'Input';
