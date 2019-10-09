import React from 'react';

import { useStyle } from '../../hooks/styles';
import styles from './styles.scss';


export function Tab({
  active,
  className,
  ...props
}) {
  const tabClassName = useStyle(styles, 'rcx-tab', { active }, className);

  return <div className={tabClassName} {...props} />;
}
