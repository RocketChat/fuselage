import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { fullViewport } from '../../../.storybook/helpers';
import { CurrentChats } from './index';


const props = () => ({
  onClosing: action('closing'),
});

storiesOf('Routes|CurrentChats', module)
  .addDecorator(fullViewport)
  .add('default', () => (
    <CurrentChats {...props()}/>
  ));
