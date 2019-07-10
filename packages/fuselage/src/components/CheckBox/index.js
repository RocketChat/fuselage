import React from 'react';
import { check } from '@rocket.chat/icons/dist/font';

import { useStyle } from '../../hooks/styles';
import { Icon } from '../Icon';
import styles from './styles.scss';


export function CheckBox({
  label,
  disabled,
  className,
  ...props
}) {
  const checkBoxClassName = useStyle(styles, 'CheckBox', {}, className);
  const checkBoxWrapperClassName = useStyle(styles, 'CheckBox__wrapper', { disabled });
  const checkBoxFakeClassName = useStyle(styles, 'CheckBox__fake');

  return <label className={checkBoxWrapperClassName}>
    <input type='checkbox' disabled={disabled} className={checkBoxClassName} {...props} />
    <span className={checkBoxFakeClassName}>
      <Icon name={check} />
    </span>
    {label}
  </label>;
}
