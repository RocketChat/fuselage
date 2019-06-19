import React, { useState } from 'react';
import {
  Drawer,
  PageHeader,
  PageHeaderTitle,
  PageHeaderBurgerButton,
  ScrollableArea,
  SideBar,
  SideBarHeader,
  SideBarMenu,
  SideBarMenuItem,
} from '@rocket.chat/fuselage';


export function Shell({
  children,
  title
}) {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [sideBarDocked, setSideBarDocked] = useState(false);

  const handleSideBarDockStateChange = (docked) => {
    setSideBarDocked(docked);

    if (docked) {
      setSideBarOpen(false);
    }
  };

  const handleBurgerButtonClick = () => {
    setSideBarOpen(true);
  };

  const handleSideBarOpening = () => {
    setSideBarOpen(true);
  };

  const handleSideBarClosing = () => {
    setSideBarOpen(false);
  };

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexFlow: 'row nowrap', alignItems: 'stretch' }}>
      <Drawer dockWhen="(min-width: 780px)" open={sideBarOpen} onOpening={handleSideBarOpening} onClosing={handleSideBarClosing} onDockStateChange={handleSideBarDockStateChange}>
        <SideBar>
          <SideBarHeader closeable={!sideBarDocked} title="Livechat" onClosing={handleSideBarClosing} />

          <ScrollableArea>
            <SideBarMenu title="Monitoring">
              <SideBarMenuItem>Real-time Monitoring</SideBarMenuItem>
              <SideBarMenuItem>Current Chats</SideBarMenuItem>
              <SideBarMenuItem>Analytics</SideBarMenuItem>
            </SideBarMenu>

            <SideBarMenu title="User Managements">
              <SideBarMenuItem>Managers</SideBarMenuItem>
              <SideBarMenuItem>Monitors</SideBarMenuItem>
              <SideBarMenuItem>Agents</SideBarMenuItem>
            </SideBarMenu>

            <SideBarMenu title="Organization">
              <SideBarMenuItem>Sections</SideBarMenuItem>
              <SideBarMenuItem>Departments</SideBarMenuItem>
            </SideBarMenu>

            <SideBarMenu title="Settings">
              <SideBarMenuItem>Custom Fields</SideBarMenuItem>
              <SideBarMenuItem>Appearance</SideBarMenuItem>
              <SideBarMenuItem>Office Hours</SideBarMenuItem>
            </SideBarMenu>

            <SideBarMenu title="Integrations">
              <SideBarMenuItem>Installation</SideBarMenuItem>
              <SideBarMenuItem>Webhooks</SideBarMenuItem>
              <SideBarMenuItem>Facebook Messenger</SideBarMenuItem>
            </SideBarMenu>
          </ScrollableArea>
        </SideBar>
      </Drawer>

      <div style={{ flex: '1', display: 'flex', flexFlow: 'column nowrap' }}>
        <PageHeader>
          {!sideBarDocked && <PageHeaderBurgerButton onClick={handleBurgerButtonClick} />}
          <PageHeaderTitle>{title}</PageHeaderTitle>
        </PageHeader>
        {children}
      </div>
    </div>
  );
}
