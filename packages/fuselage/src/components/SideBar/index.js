import React from 'react';

import { useStyle } from '../../hooks/styles';
import styles from './styles.scss';


export function SideBar({
  children,
  className,
  ...props
}) {
  const sideBarClassName = useStyle(styles, 'SideBar', {}, className);

  return (
    <div className={sideBarClassName} {...props}>
      {children}
    </div>
  );
}

export { SideBarHeader } from './Header';
export { SideBarMenu } from './Menu';
export { SideBarMenuItem } from './MenuItem';
