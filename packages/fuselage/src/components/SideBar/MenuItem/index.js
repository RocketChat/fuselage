import React from 'react';

import { useStyle } from '../../../hooks/styles';
import styles from './styles.scss';


export function SideBarMenuItem({
  as: MainComponent = 'a',
  active,
  children,
  className,
  ...props
}) {
  const sideBarMenuItemClassName = useStyle(styles, 'rcx-side-bar__menu-item', { active }, className);
  const sideBarMenuItemLinkClassName = useStyle(styles, 'rcx-side-bar__menu-item-link');

  return <li className={sideBarMenuItemClassName}>
    <MainComponent className={sideBarMenuItemLinkClassName} {...props}>
      {children}
    </MainComponent>
  </li>;
}
