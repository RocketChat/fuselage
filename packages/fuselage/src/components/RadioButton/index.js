import React from 'react';

import { useStyle } from '../../hooks/styles';
import styles from './styles.scss';


export const RadioButton = React.forwardRef(function RadioButton({
  className,
  invisible,
  label,
  ...props
}, ref) {
  const radioButtonWrapperClassName = useStyle(styles, 'rcx-radio-button__wrapper', {
    disabled: props.disabled,
    invisible,
  }, className);
  const radioButtonInputClassName = useStyle(styles, 'rcx-radio-button__input');
  const radioButtonFakeClassName = useStyle(styles, 'rcx-radio-button__fake');
  const radioButtonLabelClassName = useStyle(styles, 'rcx-radio-button__label');

  return <label className={radioButtonWrapperClassName} hidden={props.hidden}>
    <input type='radio' className={radioButtonInputClassName} ref={ref} {...props} />
    <span className={radioButtonFakeClassName} />
    {label && <span className={radioButtonLabelClassName}>
      {label}
    </span>}
  </label>;
});
