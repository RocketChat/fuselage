import React from 'react';

import { useStyle } from '../../hooks/styles';
import styles from './styles.scss';


export function Tabs({
  children,
  className,
  ...props
}) {
  const tabsClassName = useStyle(styles, 'rcx-tabs', {}, className);
  const tabsWrapperClassName = useStyle(styles, 'rcx-tabs__wrapper');

  return <div className={tabsClassName} {...props}>
    <div className={tabsWrapperClassName}>
      {children}
    </div>
  </div>;
}
