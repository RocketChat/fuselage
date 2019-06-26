import React from 'react';

import { useStyle } from '../../hooks/styles';
import styles from './styles.scss';


export function ButtonGroup({
  wrap,
  stretch,
  vertical,
  children,
  className,
  ...props
}) {
  return (
    <div
      className={useStyle(styles, 'ButtonGroup', {
        wrap,
        stretch,
        vertical,
      }, className)}
      {...props}
    >
      {children}
    </div>
  );
}
