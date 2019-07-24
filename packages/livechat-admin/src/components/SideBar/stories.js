import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { SideBar } from './index';


const props = () => ({});

storiesOf('Blocks|SideBar', module)
  .addDecorator(centered)
  .add('default', () => (
    <SideBar {...props()} />
  ));
