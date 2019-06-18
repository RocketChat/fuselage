import React from 'react';
import {
  Drawer,
  ScrollableArea,
  SideBar,
  SideBarHeader,
  SideBarMenu,
  SideBarMenuItem,
} from '@rocket.chat/fuselage';

export function LivechatSideBar() {
  return (
    <Drawer dockWhen="(min-width: 780px)">
      <SideBar>
        <SideBarHeader closeable title="Livechat" />

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
  );
}
