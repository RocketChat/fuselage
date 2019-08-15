import React from 'react';

import { useStyle } from '../../hooks/styles';
import styles from './styles.scss';


export const ButtonGroup = React.forwardRef(function ButtonGroup({
  align,
  className,
  invisible,
  stretch,
  vertical,
  wrap,
  ...props
}, ref) {
  const buttonGroupClassName = useStyle(styles, 'rcx-button-group', {
    align,
    invisible,
    stretch,
    vertical,
    wrap,
  }, className);

  return <div className={buttonGroupClassName} role='group' ref={ref} {...props}/>;
});
