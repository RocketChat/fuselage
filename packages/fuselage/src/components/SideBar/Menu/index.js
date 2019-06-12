import React from 'react';

import { useStyle } from '../../../helpers/hooks';
import styles from './styles.scss';


export function SideBarMenu({
  children,
  title,
  className,
  ...props
}) {
  const sideBarMenuClassName = useStyle(styles, 'SideBar__Menu', {}, className);
  const sideBarMenuTitleClassName = useStyle(styles, 'SideBar__MenuTitle');
  const sideBarMenuListClassName = useStyle(styles, 'SideBar__MenuList');

  return (
    <nav className={sideBarMenuClassName} {...props}>
      {title && (
        <div className={sideBarMenuTitleClassName}>
          {title}
        </div>
      )}

      <ul className={sideBarMenuListClassName}>
        {children}
      </ul>
    </nav>
  );
}
