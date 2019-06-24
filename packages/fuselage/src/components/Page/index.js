import React from 'react';

import { useStyle } from '../../hooks/styles';
import styles from './styles.scss';


export function Page({
  className,
  ...props
}) {
  const pageClassName = useStyle(styles, 'Page', {}, className);

  return (
    <section
      className={pageClassName}
      {...props}
    />
  );
}

export * from './Header';
