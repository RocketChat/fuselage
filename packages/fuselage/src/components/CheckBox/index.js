import React from 'react';
import { check } from '@rocket.chat/icons/dist/font';

import { useStyle } from '../../helpers/hooks';
import { Icon } from '../Icon';
import styles from './styles.scss';


export function CheckBox({
  label,
  className,
  ...props
}) {
  return (
    <label
      className={useStyle(styles, 'CheckBox__wrapper')}
    >
      <input
        type="checkbox"
        className={useStyle(styles, 'CheckBox', {
        }, className)}
        {...props}
      />
      <span
        className={useStyle(styles, 'CheckBox__fake')}
      >
        <Icon name={check} />
      </span>
      {label}
    </label>
  );
}
