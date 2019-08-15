import React from 'react';

import { useStyle } from '../../hooks/styles';
import { Icon } from '../Icon';
import styles from './styles.scss';


export const Input = React.forwardRef(function Input({
  className,
  error,
  hidden,
  icon,
  type,
  ...props
}, ref) {
  const inputClassName = useStyle(styles, 'rcx-input__container');
  const inputWrapperClassName = useStyle(styles, 'rcx-input__wrapper');
  const inputElementClassName = useStyle(styles, 'rcx-input__element', { error }, className);

  const inputElement = (type === 'textarea' && <textarea className={inputElementClassName} ref={ref} {...props} />)
    || <input className={inputElementClassName} ref={ref} type={type} {...props} />;

  return <div className={inputClassName} hidden={hidden}>
    {icon
      ? <span className={inputWrapperClassName}>
        {inputElement}
        <Icon name={icon} />
      </span>
      : inputElement}
  </div>;
});
