import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import React from 'react';

import { LivechatSideBar } from './index';


storiesOf('LivechatSideBar', module)
  .addDecorator(centered)
  .add('default', () => (
    <LivechatSideBar />
  ));
