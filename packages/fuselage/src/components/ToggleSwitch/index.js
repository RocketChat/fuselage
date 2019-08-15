import React from 'react';

import { useStyle } from '../../hooks/styles';
import styles from './styles.scss';


export const ToggleSwitch = React.forwardRef(function ToggleSwitch({
  className,
  invisible,
  ...props
}, ref) {
  const toggleSwitchWrapperClassName = useStyle(styles, 'rcx-toggle-switch__wrapper', {
    disabled: props.disabled,
    invisible,
  }, className);
  const toggleSwitchInputClassName = useStyle(styles, 'rcx-toggle-switch__input');
  const toggleSwitchFakeClassName = useStyle(styles, 'rcx-toggle-switch__fake');

  return <label className={toggleSwitchWrapperClassName} hidden={props.hidden}>
    <input type='checkbox' className={toggleSwitchInputClassName} ref={ref} {...props} />
    <span className={toggleSwitchFakeClassName} />
  </label>;
});
