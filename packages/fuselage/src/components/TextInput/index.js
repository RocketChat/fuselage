import React from 'react';

import { useStyle } from '../../hooks/styles';
import styles from './styles.scss';


export function TextInput({
  error = false,
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
          className={useStyle(styles, 'rcx-text-input', { error, multiline }, className)}
          {...props}
        />
      )
      : (
        <input
          type={password ? 'password' : 'text'}
          className={useStyle(styles, 'rcx-text-input', { error }, className)}
          {...props}
        />
      )
  );
}
