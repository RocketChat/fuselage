import React from 'react';

import { useStyle, useChildrenWithClassName } from '../../helpers/hooks';
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
      {useChildrenWithClassName(styles, 'ButtonGroup', 'Button', children)}
    </div>
  );
}
