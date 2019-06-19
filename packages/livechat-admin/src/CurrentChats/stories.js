import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { CurrentChats } from './index';


const props = () => ({
  onClosing: action('closing'),
});

storiesOf('Routes|CurrentChats', module)
  .add('default', () => (
    <CurrentChats {...props()}/>
  ));
