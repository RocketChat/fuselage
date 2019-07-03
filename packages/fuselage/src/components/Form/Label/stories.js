import centered from '@storybook/addon-centered/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { FormLabel } from './index';


const props = ({
  children = 'Label',
  error = false,
  required = false,
} = {}) => ({
  children: typeof children === 'string' ? text('children', children) : children,
  error: boolean('error', error),
  required: boolean('required', required),
});

storiesOf('Collections|Form/FormLabel', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({
    jest: ['spec'],
  })
  .add('default', () => (
    <FormLabel {...props()} />
  ))
  .add('error', () => (
    <FormLabel {...props({ error: true })} />
  ))
  .add('required', () => (
    <FormLabel {...props({ required: true })} />
  ));
