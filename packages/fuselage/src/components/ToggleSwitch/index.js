import React from 'react';

import { useStyle } from '../../hooks/styles';
import styles from './styles.scss';


export function ToggleSwitch({
  className,
  invisible,
  ...props
}) {
  const toggleSwitchWrapperClassName = useStyle(styles, 'rcx-toggle-switch__wrapper', {
    disabled: props.disabled,
    invisible,
  }, className);
  const toggleSwitchInputClassName = useStyle(styles, 'rcx-toggle-switch__input');
  const toggleSwitchFakeClassName = useStyle(styles, 'rcx-toggle-switch__fake');

  return <label className={toggleSwitchWrapperClassName} hidden={props.hidden}>
    <input type='checkbox' className={toggleSwitchInputClassName} {...props} />
    <span className={toggleSwitchFakeClassName} />
  </label>;
}
