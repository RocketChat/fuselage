import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { TextInput } from '.';


const props = ({
  value = '',
  placeholder = '',
  disabled = false,
  multiline = false,
  rows = 1,
  password = false,
  uncontrolled = false,
} = {}) => ({
  value: uncontrolled ? undefined : text('value', value),
  placeholder: text('placeholder', placeholder),
  disabled: boolean('disabled', disabled),
  multiline: boolean('multiline', multiline),
  rows: number('rows', rows),
  password: boolean('password', password),
  onChange: action('change'),
});

storiesOf('Elements|TextInput', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .addParameters({ jest: ['spec'] })
  .add('default', () => (
    <TextInput {...props()} />
  ))
  .add('filled', () => (
    <TextInput {...props({ value: 'Value' })} />
  ))
  .add('with placeholder', () => (
    <TextInput {...props({ placeholder: 'Type anything' })} />
  ))
  .add('multiline', () => (
    <TextInput {...props({ multiline: true, rows: 3 })} />
  ))
  .add('password', () => (
    <TextInput {...props({ value: 'p455w0rd', password: true })} />
  ))
  .add('uncontrolled', () => (
    <TextInput {...props({ uncontrolled: true })} />
  ));
