import React from 'react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { ScrollableArea } from '../ScrollableArea';

import { SideBar, SideBarHeader, SideBarMenu, SideBarMenuItem } from './index';


const props = ({
  docked = false,
  open = false,
  responsive = false,
} = {}) => ({
  docked: boolean('docked', docked),
  open: boolean('open', open),
  responsive: boolean('responsive', responsive),
});

storiesOf('Components|SideBar', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['SideBar'] })
  .add('open', () => (
    <SideBar {...props({ open: true })}>
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
  ))
  .add('docked', () => (
    <SideBar {...props({ docked: true })}>
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
  ))
  .add('responsive', () => (
    <SideBar {...props({ responsive: true })}>
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
