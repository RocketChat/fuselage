import React from 'react';
import { check } from '@rocket.chat/icons/dist/font';

import { useStyle } from '../../hooks/styles';
import { Icon } from '../Icon';
import styles from './styles.scss';


export function CheckBox({
  label,
  className,
  ...props
}) {
  const checkBoxWrapperClassName = useStyle(styles, 'CheckBox__wrapper', {
    disabled: props.disabled,
    hidden: props.hidden,
  }, className);
  const checkBoxInputClassName = useStyle(styles, 'CheckBox__input');
  const checkBoxFakeClassName = useStyle(styles, 'CheckBox__fake');
  const checkBoxLabelClassName = useStyle(styles, 'CheckBox__label');

  return <label className={checkBoxWrapperClassName}>
    <input type='checkbox' className={checkBoxInputClassName} {...props} />
    <span className={checkBoxFakeClassName}>
      <Icon name={check} />
    </span>
    {label && <span className={checkBoxLabelClassName}>
      {label}
    </span>}
  </label>;
}
