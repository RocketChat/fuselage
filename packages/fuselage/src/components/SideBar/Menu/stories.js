import React from 'react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { SideBar, SideBarMenuItem } from '../index';

import { SideBarMenu } from './index';


const props = ({
  title = '',
} = {}) => ({
  title: text('title', title),
});

storiesOf('Components|SideBar/SideBarMenu', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['SideBarMenu'] })
  .add('default', () => (
    <SideBar docked>
      <SideBarMenu {...props()}>
        <SideBarMenuItem>Menu item #1</SideBarMenuItem>
        <SideBarMenuItem>Menu item #2</SideBarMenuItem>
        <SideBarMenuItem>Menu item #3</SideBarMenuItem>
        <SideBarMenuItem>Menu item #4</SideBarMenuItem>
      </SideBarMenu>
    </SideBar>
  ))
  .add('with title', () => (
    <SideBar docked>
      <SideBarMenu {...props({ title: 'Menu title' })}>
        <SideBarMenuItem>Menu item #1</SideBarMenuItem>
        <SideBarMenuItem>Menu item #2</SideBarMenuItem>
        <SideBarMenuItem>Menu item #3</SideBarMenuItem>
        <SideBarMenuItem>Menu item #4</SideBarMenuItem>
      </SideBarMenu>
    </SideBar>
  ));
