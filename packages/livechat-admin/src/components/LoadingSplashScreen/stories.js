import { storiesOf } from '@storybook/react';
import React from 'react';

import { fullViewport } from '../../../.storybook/helpers';
import { LoadingSplashScreen } from './index';


const props = () => ({});

storiesOf('Blocks|LoadingSplashScreen', module)
  .addDecorator(fullViewport)
  .add('default', () => (
    <LoadingSplashScreen {...props()} />
  ));
