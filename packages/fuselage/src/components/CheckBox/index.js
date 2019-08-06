import React, { useEffect, useRef } from 'react';

import { useStyle } from '../../hooks/styles';
import styles from './styles.scss';


export function CheckBox({
  className,
  indeterminate,
  invisible,
  label,
  ...props
}) {
  const ref = useRef();
  const checkBoxWrapperClassName = useStyle(styles, 'rcx-check-box__wrapper', {
    disabled: props.disabled,
    invisible,
  }, className);
  const checkBoxInputClassName = useStyle(styles, 'rcx-check-box__input');
  const checkBoxFakeClassName = useStyle(styles, 'rcx-check-box__fake');
  const checkBoxLabelClassName = useStyle(styles, 'rcx-check-box__label');

  useEffect(() => {
    ref.current.indeterminate = indeterminate;
  }, [indeterminate]);

  return <label className={checkBoxWrapperClassName} hidden={props.hidden}>
    <input type='checkbox' className={checkBoxInputClassName} ref={ref} {...props} />
    <span className={checkBoxFakeClassName} />
    {label && <span className={checkBoxLabelClassName}>
      {label}
    </span>}
  </label>;
}
