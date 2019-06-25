import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { CheckBox } from './index';


const props = ({
  checked = false,
  value = '',
  disabled = false,
  label = '',
  uncontrolled = false,
} = {}) => ({
  checked: uncontrolled ? undefined : boolean('checked', checked),
  value: text('value', value),
  disabled: boolean('disabled', disabled),
  label: text('label', label),
  onChange: action('change'),
});

storiesOf('Elements|CheckBox', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['spec'] })
  .add('default', () => (
    <CheckBox
      {...props()}
    />
  ))
  .add('checked', () => (
    <CheckBox
      {...props({ checked: true })}
    />
  ))
  .add('disabled', () => (
    <CheckBox
      {...props({ disabled: true })}
    />
  ))
  .add('with label', () => (
    <CheckBox
      {...props({ label: 'Send me emails' })}
    />
  ))
  .add('uncontrolled', () => (
    <CheckBox
      {...props({ uncontrolled: true })}
    />
  ));
