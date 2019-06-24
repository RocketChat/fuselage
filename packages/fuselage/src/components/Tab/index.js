import React from 'react';

import { useStyle } from '../../hooks/styles';
import styles from './styles.scss';


export function Tab({
  active,
  className,
  ...props
}) {
  return (
    <div
      className={useStyle(styles, 'Tab', { active }, className)}
      {...props}
    />
  );
}
