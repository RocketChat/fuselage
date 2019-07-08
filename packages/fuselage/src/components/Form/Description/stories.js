import centered from '@storybook/addon-centered/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { FormDescription } from './index';


const props = ({
  children = 'This is a form description.',
  error = false,
} = {}) => ({
  children: typeof children === 'string' ? text('children', children) : children,
  error: boolean('error', error),
});

storiesOf('Collections|Form/FormDescription', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({
    jest: ['spec'],
  })
  .add('default', () => (
    <FormDescription {...props()} />
  ))
  .add('error', () => (
    <FormDescription {...props({ children: 'Validation failed.', error: true })} />
  ));
