import { PageHeaderBurgerButton } from '@rocket.chat/fuselage';
import React, { useContext } from 'react';

import { SideBarContext } from './SideBarContext';


export function BurgerButton() {
  const sideBarContext = useContext(SideBarContext);

  if (sideBarContext.docked) {
    return null;
  }

  return <PageHeaderBurgerButton onClick={sideBarContext.trigger} />;
}
