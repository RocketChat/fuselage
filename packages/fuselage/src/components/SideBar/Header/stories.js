import React from 'react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { SideBar } from '../index';

import { SideBarHeader } from './index';


const props = ({
  title = '',
  closeable = false,
} = {}) => ({
  title: text('title', title),
  closeable: boolean('closeable', closeable),
  onClosing: action('closing'),
});

storiesOf('Components|SideBar/SideBarHeader', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['SideBarHeader'] })
  .add('default', () => (
    <SideBar docked>
      <SideBarHeader {...props({ title: 'Header title', closeable: true })} />
    </SideBar>
  ))
  .add('with title', () => (
    <SideBar docked>
      <SideBarHeader {...props({ title: 'Header title' })} />
    </SideBar>
  ))
  .add('closeable', () => (
    <SideBar docked>
      <SideBarHeader {...props({ closeable: true })} />
    </SideBar>
  ));
