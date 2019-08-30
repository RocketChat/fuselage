import React from 'react';

import { useStyle } from '../../hooks/styles';
import { Icon } from '../Icon';
import styles from './styles.scss';
import { useUniqueId } from '../../hooks/useUniqueId';


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
      <Icon iconName={icon} />
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
      <Icon iconName={icon} />
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
    <Icon iconName='arrow-down' />
  </span>;
});

function Label({
  children,
  error,
  required,
  ...props
}) {
  const labelClassName = useStyle(styles, 'rcx-input__label', { required });
  const labelTextClassName = useStyle(styles, 'rcx-input__label-text');
  const labelErrorClassName = useStyle(styles, 'rcx-input__label-error');

  return <label className={labelClassName} {...props}>
    <span className={labelTextClassName}>{children}</span>
    <span className={labelErrorClassName}>{error}</span>
  </label>;
}

function Help(props) {
  const helpClassName = useStyle(styles, 'rcx-input__help');

  return <span className={helpClassName} {...props} />;
}

export const Input = React.forwardRef(function Input({
  error,
  help,
  hidden,
  invisible,
  label,
  required,
  style,
  type = 'text',
  ...props
}, ref) {
  const inputContainerClassName = useStyle(styles, 'rcx-input__container', { invisible });
  const id = useUniqueId();

  return <div className={inputContainerClassName} hidden={hidden} style={style}>
    {label && <Label htmlFor={props.id || id} error={error} required={required}>{label}</Label>}

    {(type === 'select' && <SelectInput error={!!error} id={id} ref={ref} {...props} />)
    || (type === 'textarea' && <TextAreaInput error={!!error} id={id} ref={ref} {...props} />)
    || <TextInput error={!!error} ref={ref} id={id} type={type} {...props} />}

    {help && <Help>{help}</Help>}
  </div>;
});
