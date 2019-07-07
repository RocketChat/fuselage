import React, { useState } from 'react';
import {
  Drawer,
  Page,
  PageHeader,
  PageHeaderTitle,
  PageHeaderBurgerButton,
  ScrollableArea,
  SideBar,
  SideBarHeader,
  SideBarMenu,
  SideBarMenuItem,
} from '@rocket.chat/fuselage';

import styles from './styles.module.css';


export function Shell({
  children,
  closeable = true,
  headerChildren,
  title,
  url,
  onClosing,
  ...props
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
    <main className={styles.Shell}>
      <Drawer
        dockWhen="(min-width: 780px)"
        open={sideBarOpen}
        onOpening={handleSideBarOpening}
        onClosing={handleSideBarClosing}
        onDockStateChange={handleSideBarDockStateChange}
      >
        <SideBar>
          <SideBarHeader closeable={closeable} title="Livechat" onClosing={onClosing} />

          <ScrollableArea>
            <SideBarMenu title="Monitoring">
              <SideBarMenuItem active={url === '/real-time-monitoring'}>Real-time Monitoring</SideBarMenuItem>
              <SideBarMenuItem active={url === '/current-chats'}>Current Chats</SideBarMenuItem>
              <SideBarMenuItem active={url === '/analytics'}>Analytics</SideBarMenuItem>
            </SideBarMenu>

            <SideBarMenu title="User Managements">
              <SideBarMenuItem active={url === '/users/managers'}>Managers</SideBarMenuItem>
              <SideBarMenuItem active={url === '/users/monitors'}>Monitors</SideBarMenuItem>
              <SideBarMenuItem active={url === '/users/agents'}>Agents</SideBarMenuItem>
            </SideBarMenu>

            <SideBarMenu title="Organization">
              <SideBarMenuItem active={url === '/sections'}>Sections</SideBarMenuItem>
              <SideBarMenuItem active={url === '/departments'}>Departments</SideBarMenuItem>
            </SideBarMenu>

            <SideBarMenu title="Settings">
              <SideBarMenuItem active={url === '/custom-fields'}>Custom Fields</SideBarMenuItem>
              <SideBarMenuItem active={url === '/appearance'}>Appearance</SideBarMenuItem>
              <SideBarMenuItem active={url === '/office-hours'}>Office Hours</SideBarMenuItem>
            </SideBarMenu>

            <SideBarMenu title="Integrations">
              <SideBarMenuItem active={url === '/installation'}>Installation</SideBarMenuItem>
              <SideBarMenuItem active={url === '/webhooks'}>Webhooks</SideBarMenuItem>
              <SideBarMenuItem active={url === '/facebook-messenger'}>Facebook Messenger</SideBarMenuItem>
            </SideBarMenu>
          </ScrollableArea>
        </SideBar>
      </Drawer>

      <Page {...props}>
        <PageHeader>
          {!sideBarDocked && <PageHeaderBurgerButton onClick={handleBurgerButtonClick} />}
          <PageHeaderTitle>{title}</PageHeaderTitle>
          {headerChildren}
        </PageHeader>

        <ScrollableArea>
          {children}
        </ScrollableArea>
      </Page>
    </main>
  );
}
