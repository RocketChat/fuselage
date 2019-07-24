import React from 'react';

import { useStyle } from '../../../hooks/styles';
import styles from './styles.scss';


export function FormItem({
  className,
  ...props
}) {
  const formItemClassName = useStyle(styles, 'rcx-form-item', {}, className);

  return <div className={formItemClassName} {...props} />;
}
