import React from 'react';

import { useStyle } from '../../hooks/styles';
import styles from './styles.scss';


export function ButtonGroup({
  wrap,
  stretch,
  vertical,
  className,
  ...props
}) {
  const buttonGroupClassName = useStyle(styles, 'rcx-button-group', {
    wrap,
    stretch,
    vertical,
  }, className);

  return <div className={buttonGroupClassName} {...props}/>;
}
