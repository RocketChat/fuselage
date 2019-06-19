import React from 'react';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';

import { ScrollableArea } from '../ScrollableArea';

import { SideBar, SideBarHeader, SideBarMenu, SideBarMenuItem } from './index';


storiesOf('Components|SideBar', module)
  .addDecorator(centered)
  .addParameters({ jest: ['SideBar'] })
  .add('default', () => (
    <SideBar>
      <SideBarHeader title="Header title" />

      <ScrollableArea>
        <SideBarMenu>
          <SideBarMenuItem>Menu item #1</SideBarMenuItem>
          <SideBarMenuItem>Menu item #2</SideBarMenuItem>
          <SideBarMenuItem>Menu item #3</SideBarMenuItem>
          <SideBarMenuItem>Menu item #4</SideBarMenuItem>
        </SideBarMenu>

        <SideBarMenu title="Menu #2">
          <SideBarMenuItem>Menu item #1</SideBarMenuItem>
          <SideBarMenuItem>Menu item #2</SideBarMenuItem>
          <SideBarMenuItem>Menu item #3</SideBarMenuItem>
        </SideBarMenu>

        <SideBarMenu title="Menu #3">
          <SideBarMenuItem>Menu item #1</SideBarMenuItem>
          <SideBarMenuItem>Menu item #2</SideBarMenuItem>
          <SideBarMenuItem>Menu item #3</SideBarMenuItem>
          <SideBarMenuItem>Menu item #4</SideBarMenuItem>
          <SideBarMenuItem>Menu item #5</SideBarMenuItem>
          <SideBarMenuItem>Menu item #6</SideBarMenuItem>
        </SideBarMenu>
      </ScrollableArea>
    </SideBar>
  ));
