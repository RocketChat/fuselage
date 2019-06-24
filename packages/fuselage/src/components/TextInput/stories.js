import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { TextInput } from '.';


const props = (defaults = {}) => ({
  value: text('value', defaults.value || ''),
  placeholder: text('placeholder', defaults.placeholder || ''),
  disabled: boolean('disabled', defaults.disabled || false),
  multiline: boolean('multiline', defaults.multiline || false),
  rows: number('rows', defaults.rows || 1),
  password: boolean('password', defaults.password || false),
  onChange: action('change'),
});

storiesOf('Elements|TextInput', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .addParameters({ jest: ['spec'] })
  .add('default', () => (
    <TextInput
      {...props()}
    />
  ))
  .add('filled', () => (
    <TextInput
      {...props({ value: 'Value' })}
    />
  ))
  .add('with placeholder', () => (
    <TextInput
      {...props({ placeholder: 'Type anything' })}
    />
  ))
  .add('multiline', () => (
    <TextInput
      {...props({ multiline: true, rows: 3 })}
    />
  ))
  .add('password', () => (
    <TextInput
      {...props({ value: 'p455w0rd', password: true })}
    />
  ));
