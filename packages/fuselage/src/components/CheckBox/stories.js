import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { CheckBox } from './index';


const props = (defaults = {}) => ({
  ...!defaults.uncontrolled && {
    checked: boolean('checked', defaults.checked || false),
    disabled: boolean('disabled', defaults.disabled || false),
    label: text('label', defaults.label || ''),
    onChange: action('change'),
  },
});

storiesOf('Elements|CheckBox', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['CheckBox'] })
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
  .add('uncontrolled', () => (
    <CheckBox
      {...props({ uncontrolled: true })}
    />
  ))
  .add('with label', () => (
    <CheckBox
      {...props({ label: 'Send me emails' })}
    />
  ));
