import React from 'react';

import { useStyle } from '../../../hooks/styles';
import styles from './styles.scss';


export function SideBarMenuItem({
  is: MainComponent = 'a',
  active,
  children,
  className,
  ...props
}) {
  const sideBarMenuItemClassName = useStyle(styles, 'SideBar__MenuItem', { active }, className);
  const sideBarMenuItemLinkClassName = useStyle(styles, 'SideBar__MenuItemLink');

  return (
    <li className={sideBarMenuItemClassName}>
      <MainComponent className={sideBarMenuItemLinkClassName} {...props}>
        {children}
      </MainComponent>
    </li>
  );
}
