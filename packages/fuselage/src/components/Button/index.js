import React from 'react';

import { useStyle } from '../../hooks/styles';
import styles from './styles.scss';


export function Button({
  as: Component = 'button',
  square,
  primary,
  ghost,
  danger,
  className,
  ...props
}) {
  const buttonClassName = useStyle(styles, 'rcx-button', {
    square,
    primary,
    ghost,
    danger,
    secondary: !primary && !ghost && !danger,
  }, className);

  return <Component className={buttonClassName} {...props} />;
}
