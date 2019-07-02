import React from 'react';

import { useStyle } from '../../hooks/styles';
import styles from './styles.scss';


const defaultHandleSubmit = (event) => {
  event.preventDefault();
};

export function Form({
  className,
  onSubmit = defaultHandleSubmit,
  ...props
}) {
  const formClassName = useStyle(styles, 'Form', {}, className);

  return (
    <form
      className={formClassName}
      onSubmit={onSubmit}
      {...props}
    />
  );
}

export * from './Field';
