import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { SideBar, SideBarMenu } from '../index';

import { SideBarMenuItem } from './index';


const props = ({
  children = 'Menu item',
  active = false,
} = {}) => ({
  children: text('children', children),
  active: boolean('active', active),
  onClick: action('click'),
});

storiesOf('Views|SideBar/SideBarMenuItem', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['spec'] })
  .add('default', () => (
    <SideBar docked>
      <SideBarMenu >
        <SideBarMenuItem {...props()} />
        <SideBarMenuItem>Menu item #2</SideBarMenuItem>
        <SideBarMenuItem>Menu item #3</SideBarMenuItem>
        <SideBarMenuItem>Menu item #4</SideBarMenuItem>
      </SideBarMenu>
    </SideBar>
  ))
  .add('active', () => (
    <SideBar docked>
      <SideBarMenu >
        <SideBarMenuItem {...props({ active: true })} />
        <SideBarMenuItem>Menu item #2</SideBarMenuItem>
        <SideBarMenuItem>Menu item #3</SideBarMenuItem>
        <SideBarMenuItem>Menu item #4</SideBarMenuItem>
      </SideBarMenu>
    </SideBar>
  ));
