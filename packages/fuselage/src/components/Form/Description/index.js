import React from 'react';

import { useStyle } from '../../../hooks/styles';
import styles from './styles.scss';


export function FormDescription({
  className,
  error,
  ...props
}) {
  const formDescriptionClassName = useStyle(styles, 'FormDescription', { error }, className);

  return <small className={formDescriptionClassName} {...props} />;
}
