import React from 'react';

import { useStyle } from '../../hooks/styles';
import styles from './styles.scss';


export function RadioButton({
  label,
  className,
  ...props
}) {
  const radioButtonWrapperClassName = useStyle(styles, 'rcx-radio-button__wrapper', {
    disabled: props.disabled,
  }, className);
  const radioButtonInputClassName = useStyle(styles, 'rcx-radio-button__input');
  const radioButtonFakeClassName = useStyle(styles, 'rcx-radio-button__fake');
  const radioButtonLabelClassName = useStyle(styles, 'rcx-radio-button__label');

  return <label className={radioButtonWrapperClassName} hidden={props.hidden}>
    <input type='radio' className={radioButtonInputClassName} {...props} />
    <span className={radioButtonFakeClassName} />
    {label && <span className={radioButtonLabelClassName}>
      {label}
    </span>}
  </label>;
}
