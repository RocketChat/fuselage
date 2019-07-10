import React from 'react';

import { useStyle } from '../../hooks/styles';
import styles from './styles.scss';


export function RadioButton({
  label,
  className,
  ...props
}) {
  const radioButtonWrapperClassName = useStyle(styles, 'RadioButton__wrapper', {
    disabled: props.disabled,
    hidden: props.hidden,
  }, className);
  const radioButtonInputClassName = useStyle(styles, 'RadioButton__input');
  const radioButtonFakeClassName = useStyle(styles, 'RadioButton__fake');
  const radioButtonLabelClassName = useStyle(styles, 'RadioButton__label');

  return <label className={radioButtonWrapperClassName}>
    <input type='radio' className={radioButtonInputClassName} {...props} />
    <span className={radioButtonFakeClassName}/>
    {label && <span className={radioButtonLabelClassName}>
      {label}
    </span>}
  </label>;
}
