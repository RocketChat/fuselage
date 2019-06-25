import centered from '@storybook/addon-centered/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Tab } from './index';


const props = ({
  active = false,
  children = 'Tab text',
} = {}) => ({
  active: boolean('active', active),
  children: text('children', children),
});

storiesOf('Elements|Tab', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['spec'] })
  .add('default', () => (
    <Tab {...props()} />
  ))
  .add('active', () => (
    <Tab {...props({ active: true })} />
  ));
