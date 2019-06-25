import React from 'react';

import { useStyle } from '../../hooks/styles';
import styles from './styles.scss';


export function Form({
  className,
  ...props
}) {
  return (
    <form
      className={useStyle(styles, 'Form', {}, className)}
      {...props}
    />
  );
}
