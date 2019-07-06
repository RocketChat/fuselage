import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { RadioButton } from './index';


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

storiesOf('Elements|RadioButton', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['spec'] })
  .add('default', () => (
    <RadioButton
      {...props()}
    />
  ))
  .add('checked', () => (
    <RadioButton
      {...props({ checked: true })}
    />
  ))
  .add('disabled', () => (
    <RadioButton
      {...props({ disabled: true })}
    />
  ))
  .add('with label', () => (
    <RadioButton
      {...props({ label: 'Send me emails' })}
    />
  ))
  .add('uncontrolled', () => (
    <RadioButton
      {...props({ uncontrolled: true })}
    />
  ));
