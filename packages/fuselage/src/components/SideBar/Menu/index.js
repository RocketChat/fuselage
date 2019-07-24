import React from 'react';

import { useStyle } from '../../../hooks/styles';
import styles from './styles.scss';


export function SideBarMenu({
  children,
  title,
  className,
  ...props
}) {
  const sideBarMenuClassName = useStyle(styles, 'rcx-side-bar__menu', {}, className);
  const sideBarMenuTitleClassName = useStyle(styles, 'rcx-side-bar__menu-title');
  const sideBarMenuListClassName = useStyle(styles, 'rcx-side-bar__menu-list');

  return <nav className={sideBarMenuClassName} {...props}>
    {title && (
      <div className={sideBarMenuTitleClassName}>
        {title}
      </div>
    )}

    <ul className={sideBarMenuListClassName}>
      {children}
    </ul>
  </nav>;
}
