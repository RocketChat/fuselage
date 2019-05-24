import React from 'react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { Tab } from './index';


storiesOf('Tab', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['Tab'] })
  .add('default', () => (
    <Tab
      active={boolean('active', false)}
    >
      {text('text', 'Tab text')}
    </Tab>
  ))
  .add('active', () => (
    <Tab
      active={boolean('active', true)}
    >
      {text('text', 'Tab text')}
    </Tab>
  ));
