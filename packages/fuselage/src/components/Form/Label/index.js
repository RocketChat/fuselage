import React from 'react';

import { useStyle } from '../../../hooks/styles';
import styles from './styles.scss';


export function FormLabel({
  className,
  error,
  required,
  ...props
}) {
  const formFieldLabelClassName = useStyle(styles, 'rcx-form-label', { required, error }, className);

  return <label className={formFieldLabelClassName} {...props} />;
}
