import React, { useState } from 'react';

import { SideBarContext } from './SideBarContext';


export function SideBarState({ children }) {
  const [open, setOpen] = useState(false);
  const [docked, setDocked] = useState(false);

  const handleDockStateChange = (docked) => {
    setDocked(docked);

    if (docked) {
      setOpen(false);
    }
  };

  const handleOpening = () => {
    setOpen(true);
  };

  const handleClosing = () => {
    setOpen(false);
  };

  return <SideBarContext.Provider value={{
    open,
    docked,
    trigger: () => {
      setOpen(true);
    },
    drawerProps: {
      open,
      onOpening: handleOpening,
      onClosing: handleClosing,
      onDockStateChange: handleDockStateChange,
    },
  }}>
    {children}
  </SideBarContext.Provider>;
}
