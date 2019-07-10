import React from 'react';

import { useStyle } from '../../hooks/styles';
import styles from './styles.scss';


export function Page({
  className,
  as: Component = 'section',
  ...props
}) {
  const pageClassName = useStyle(styles, 'Page', {}, className);

  return (
    <Component
      className={pageClassName}
      {...props}
    />
  );
}

export * from './Header';
