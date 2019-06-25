import { action as storyAction } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import notes from './README.md';

import { Form } from './index';


const props = ({
  action = '',
  method = '',
} = {}) => ({
  action: text('action', action),
  method: select('method', ['get', 'post'], method),
  onSubmit: storyAction('submit'),
});

storiesOf('Collections|Form', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({
    jest: ['spec'],
    notes,
  })
  .add('default', () => (
    <Form {...props()} />
  ));
