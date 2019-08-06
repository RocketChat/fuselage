import React from 'react';

import { useStyle } from '../../hooks/styles';
import styles from './styles.scss';


export function ButtonGroup({
  className,
  invisible,
  stretch,
  vertical,
  wrap,
  ...props
}) {
  const buttonGroupClassName = useStyle(styles, 'rcx-button-group', {
    invisible,
    stretch,
    vertical,
    wrap,
  }, className);

  return <div className={buttonGroupClassName} role='group' {...props}/>;
}
