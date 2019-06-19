import React from 'react';

import { useStyle } from '../../helpers/hooks';
import styles from './styles.scss';


export function Tabs({
  children,
  className,
  ...props
}) {
  return (
    <div
      className={useStyle(styles, 'Tabs', {}, className)}
      {...props}
    >
      <div
        className={useStyle(styles, 'Tabs__wrapper')}
      >
        {children}
      </div>
    </div>
  );
}
