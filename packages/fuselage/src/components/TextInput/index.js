import React from 'react';

import { useStyle } from '../../hooks/styles';
import styles from './styles.scss';


export function TextInput({
  multiline = false,
  password = false,
  rows = 1,
  className,
  ...props
}) {
  return (
    multiline
      ? (
        <textarea
          rows={rows}
          className={useStyle(styles, 'TextInput', { multiline }, className)}
          {...props}
        />
      )
      : (
        <input
          type={password ? 'password' : 'text'}
          className={useStyle(styles, 'TextInput', {}, className)}
          {...props}
        />
      )
  );
}
