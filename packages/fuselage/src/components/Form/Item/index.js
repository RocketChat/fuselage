import React from 'react';

import { useStyle } from '../../../hooks/styles';
import styles from './styles.scss';


export function FormItem({
  children,
  className,
  ...props
}) {
  const formItemClassName = useStyle(styles, 'FormItem', {}, className);

  return <div className={formItemClassName} {...props}>
    {children}
  </div>;
}
