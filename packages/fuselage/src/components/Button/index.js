import React from 'react';

import { useStyle } from '../../hooks/styles';
import styles from './styles.scss';


export function Button({
  as: Component = 'button',
  bland,
  outline,
  nude,
  square,
  primary,
  secondary,
  danger,
  className,
  ...props
}) {
  const buttonClassName = useStyle(styles, 'rcx-button', {
    bland,
    outline,
    nude,
    square,
    primary,
    secondary,
    danger,
  }, className);

  return <Component className={buttonClassName} {...props} />;
}
