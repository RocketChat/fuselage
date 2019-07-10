import React, { useEffect, useRef } from 'react';
import { check } from '@rocket.chat/icons/dist/font';

import { useStyle } from '../../hooks/styles';
import { Icon } from '../Icon';
import styles from './styles.scss';


export function CheckBox({
  label,
  indeterminate,
  className,
  ...props
}) {
  const ref = useRef();
  const checkBoxWrapperClassName = useStyle(styles, 'CheckBox__wrapper', {
    disabled: props.disabled,
    hidden: props.hidden,
  }, className);
  const checkBoxInputClassName = useStyle(styles, 'CheckBox__input');
  const checkBoxFakeClassName = useStyle(styles, 'CheckBox__fake');
  const checkBoxLabelClassName = useStyle(styles, 'CheckBox__label');

  useEffect(() => {
    ref.current.indeterminate = indeterminate;
  }, [indeterminate]);

  return <label className={checkBoxWrapperClassName}>
    <input type='checkbox' className={checkBoxInputClassName} ref={ref} {...props} />
    <span className={checkBoxFakeClassName}>
      <Icon name={check} />
    </span>
    {label && <span className={checkBoxLabelClassName}>
      {label}
    </span>}
  </label>;
}
