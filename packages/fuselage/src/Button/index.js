import React from 'react';

import { useStyle } from '../helpers/hooks';
import styles from './styles.scss';


export function Button({
  invisible,
  primary,
  secondary,
  outline,
  nude,
  cancel,
  small,
  square,
  stack,
  noPadding,
  loading,
  full,
  className,
  ...props
}) {
  return (
    <button
      className={useStyle(styles, 'Button', {
        invisible,
        primary,
        secondary,
        outline,
        nude,
        cancel,
        small,
        square,
        stack,
        noPadding,
        loading,
        full,
      }, className)}
      {...props}
    />
  );
}
