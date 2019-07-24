import React from 'react';

import { useStyle } from '../../hooks/styles';
import styles from './styles.scss';


export function Form({
  className,
  ...props
}) {
  const formClassName = useStyle(styles, 'rcx-form', {}, className);

  return <form className={formClassName} {...props} />;
}

export * from './Field';
export * from './Item';
export * from './Label';
export * from './Description';
