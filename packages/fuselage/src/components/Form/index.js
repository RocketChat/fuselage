import React from 'react';

import { useStyle } from '../../hooks/styles';
import styles from './styles.scss';


export function Form({
  className,
  ...props
}) {
  const formClassName = useStyle(styles, 'Form', {}, className);

  return (
    <form
      className={formClassName}
      {...props}
    />
  );
}

export * from './Field';
