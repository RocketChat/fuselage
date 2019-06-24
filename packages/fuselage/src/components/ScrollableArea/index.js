import React from 'react';

import { useStyle } from '../../hooks/styles';
import styles from './styles.scss';


export function ScrollableArea({
  className,
  ...props
}) {
  const scrollableAreaClassName = useStyle(styles, 'ScrollableArea', {}, className);

  return <div className={scrollableAreaClassName} {...props} />;
}
