import React from 'react';

import { useStyle } from '../../hooks/styles';
import { Icon } from '../Icon';
import styles from './styles.scss';


const TextInput = React.forwardRef(function TextInput({
  className,
  error,
  icon,
  ...props
}, ref) {
  const inputWrapperClassName = useStyle(styles, 'rcx-input__wrapper');
  const inputElementClassName = useStyle(styles, 'rcx-input__element', { error }, className);

  if (icon) {
    return <span className={inputWrapperClassName}>
      <input className={inputElementClassName} ref={ref} {...props} />
      <Icon name={icon} />
    </span>;
  }

  return <input className={inputElementClassName} ref={ref} {...props} />;
});

const TextAreaInput = React.forwardRef(function TextAreaInput({
  className,
  error,
  icon,
  ...props
}, ref) {
  const inputWrapperClassName = useStyle(styles, 'rcx-input__wrapper');
  const inputElementClassName = useStyle(styles, 'rcx-input__element', { error }, className);

  if (icon) {
    return <span className={inputWrapperClassName}>
      <textarea className={inputElementClassName} ref={ref} {...props} />
      <Icon name={icon} />
    </span>;
  }

  return <textarea className={inputElementClassName} ref={ref} {...props} />;
});

const SelectInput = React.forwardRef(function SelectInput({
  children,
  className,
  error,
  placeholder,
  value,
  ...props
}, ref) {
  const inputWrapperClassName = useStyle(styles, 'rcx-input__wrapper');
  const inputElementClassName = useStyle(styles, 'rcx-input__element', { error, placeholder: !value }, className);
  const inputElementPlaceholderOptionClassName = useStyle(styles, 'rcx-input__element-placeholder');

  return <span className={inputWrapperClassName}>
    <select className={inputElementClassName} ref={ref} value={value} {...props}>
      <option value='' className={inputElementPlaceholderOptionClassName}>{placeholder}</option>
      {children}
    </select>
    <Icon name='arrow-down' />
  </span>;
});

export const Input = React.forwardRef(function Input({
  error,
  hidden,
  type,
  ...props
}, ref) {
  const inputClassName = useStyle(styles, 'rcx-input__container');

  return <div className={inputClassName} hidden={hidden}>
    {(type === 'select' && <SelectInput error={!!error} ref={ref} {...props} />)
    || (type === 'textarea' && <TextAreaInput error={!!error} ref={ref} {...props} />)
    || <TextInput error={!!error} ref={ref} type={type} {...props} />}
  </div>;
});
