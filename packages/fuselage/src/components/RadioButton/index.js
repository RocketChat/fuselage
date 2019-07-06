import React from 'react';

import { useStyle } from '../../hooks/styles';
import styles from './styles.scss';


export function RadioButton({
  label,
  disabled,
  className,
  ...props
}) {
  return (
    <label
      className={useStyle(styles, 'RadioButton__wrapper', { disabled })}
    >
      <input
        type="radio"
        disabled={disabled}
        className={useStyle(styles, 'RadioButton', {
        }, className)}
        {...props}
      />
      <span
        className={useStyle(styles, 'RadioButton__fake')}
      />
      {label}
    </label>
  );
}
