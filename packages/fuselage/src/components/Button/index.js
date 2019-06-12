import React from 'react';

import { useStyle } from '../../helpers/hooks';
import styles from './styles.scss';


export function Button({
  is: Component = 'button',
  primary,
  secondary,
  danger,
  hidden,
  bland,
  outline,
  nude,
  small,
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
