import React from 'react';

import { useStyle } from '../../hooks/styles';
import styles from './styles.scss';


export function Button({
  as: Component = 'button',
  primary,
  secondary,
  danger,
  hidden,
  bland,
  outline,
  nude,
  square,
  className,
  ...props
}) {
  return (
    <Component
      className={useStyle(styles, 'Button', {
        primary,
        secondary,
        danger,
        hidden,
        bland,
        outline,
        nude,
        square,
      }, className)}
      {...props}
    />
  );
}
