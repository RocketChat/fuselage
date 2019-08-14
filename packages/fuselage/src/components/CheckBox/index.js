import React, { forwardRef, useEffect, useRef } from 'react';

import { useStyle } from '../../hooks/styles';
import styles from './styles.scss';
import { useMergedRefs } from '../../hooks/useMergedRefs';


export const CheckBox = forwardRef(function CheckBox({
  className,
  indeterminate,
  invisible,
  label,
  ...props
}, ref) {
  const innerRef = useRef();
  const mergedRef = useMergedRefs(ref, innerRef);

  const checkBoxWrapperClassName = useStyle(styles, 'rcx-check-box__wrapper', {
    disabled: props.disabled,
    invisible,
  }, className);
  const checkBoxInputClassName = useStyle(styles, 'rcx-check-box__input');
  const checkBoxFakeClassName = useStyle(styles, 'rcx-check-box__fake');
  const checkBoxLabelClassName = useStyle(styles, 'rcx-check-box__label');

  useEffect(() => {
    innerRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  return <label className={checkBoxWrapperClassName} hidden={props.hidden}>
    <input type='checkbox' className={checkBoxInputClassName} ref={mergedRef} {...props} />
    <span className={checkBoxFakeClassName} />
    {label && <span className={checkBoxLabelClassName}>
      {label}
    </span>}
  </label>;
});
