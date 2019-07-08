import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { fullViewport } from '../../../.storybook/helpers';
import { OfficeHours } from './index';


const props = () => ({
  onClosing: action('closing'),
});

storiesOf('Routes|OfficeHours', module)
  .addDecorator(fullViewport)
  .add('default', () => (
    <OfficeHours {...props()}/>
  ));
