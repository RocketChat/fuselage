import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { OfficeHours } from './index';


const props = () => ({
  onClosing: action('closing'),
});

storiesOf('Routes|OfficeHours', module)
  .add('default', () => (
    <OfficeHours {...props()}/>
  ));
