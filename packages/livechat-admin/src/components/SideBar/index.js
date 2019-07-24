import {
  Drawer,
  SideBar as BaseSideBar,
  SideBarHeader,
  ScrollableArea,
  SideBarMenu,
  SideBarMenuItem,
} from '@rocket.chat/fuselage';
import React, { useContext } from 'react';
import { Link, Location } from '@reach/router';

import { SideBarContext } from './SideBarContext';


const MenuItem = ({ children, url, currentUrl }) => <SideBarMenuItem active={url === currentUrl} as={Link} to={url}>
  {children}
</SideBarMenuItem>;

export function SideBar({
  onClosing,
}) {
  const sideBarContext = useContext(SideBarContext);

  return <Location>
    {({ location: { pathname: currentUrl } }) => (
      <Drawer
        dockWhen='(min-width: 780px)'
        {...sideBarContext.drawerProps}
      >
        <BaseSideBar>
          <SideBarHeader closeable title='Livechat' onClosing={onClosing} />

          <ScrollableArea>
            <SideBarMenu title='Monitoring'>
              <MenuItem url='/real-time-monitoring' currentUrl={currentUrl}>Real-time Monitoring</MenuItem>
              <MenuItem url='/current-chats' currentUrl={currentUrl}>Current Chats</MenuItem>
              <MenuItem url='/analytics' currentUrl={currentUrl}>Analytics</MenuItem>
            </SideBarMenu>

            <SideBarMenu title='User Managements'>
              <MenuItem url='/users/managers' currentUrl={currentUrl}>Managers</MenuItem>
              <MenuItem url='/users/monitors' currentUrl={currentUrl}>Monitors</MenuItem>
              <MenuItem url='/users/agents' currentUrl={currentUrl}>Agents</MenuItem>
            </SideBarMenu>

            <SideBarMenu title='Organization'>
              <MenuItem url='/sections' currentUrl={currentUrl}>Sections</MenuItem>
              <MenuItem url='/departments' currentUrl={currentUrl}>Departments</MenuItem>
            </SideBarMenu>

            <SideBarMenu title='Settings'>
              <MenuItem url='/custom-fields' currentUrl={currentUrl}>Custom Fields</MenuItem>
              <MenuItem url='/appearance' currentUrl={currentUrl}>Appearance</MenuItem>
              <MenuItem url='/office-hours' currentUrl={currentUrl}>Office Hours</MenuItem>
            </SideBarMenu>

            <SideBarMenu title='Integrations'>
              <MenuItem url='/installation' currentUrl={currentUrl}>Installation</MenuItem>
              <MenuItem url='/webhooks' currentUrl={currentUrl}>Webhooks</MenuItem>
              <MenuItem url='/facebook-messenger' currentUrl={currentUrl}>Facebook Messenger</MenuItem>
            </SideBarMenu>
          </ScrollableArea>
        </BaseSideBar>
      </Drawer>
    )}</Location>;
}

export * from './BurgerButton';
export * from './SideBarContext';
export * from './SideBarState';
