import { storiesOf } from '@storybook/react';
import React from 'react';

import { CurrentChats } from './index';


storiesOf('CurrentChats', module)
  .add('default', () => (
    <CurrentChats
    />
  ));
