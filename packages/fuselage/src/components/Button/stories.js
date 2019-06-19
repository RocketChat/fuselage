import * as icons from '@rocket.chat/icons/dist/font';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Icon } from '../Icon';

import { Button } from './index';


const props = (defaults = {}) => ({
  children: text('text', defaults.text || 'Powered by Rocket.Chat'),
  primary: boolean('primary', defaults.primary || false),
  secondary: boolean('secondary', defaults.secondary || false),
  danger: boolean('danger', defaults.danger || false),
  disabled: boolean('disabled', defaults.disabled || false),
  hidden: boolean('hidden', defaults.hidden || false),
  bland: boolean('bland', defaults.bland || false),
  outline: boolean('outline', defaults.outline || false),
  nude: boolean('nude', defaults.nude || false),
  small: boolean('small', defaults.small || false),
  square: boolean('square', defaults.square || false),
  onClick: action('change'),
});

storiesOf('Components|Button', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['Button'] })
  .add('default', () => (
    <Button
      {...props()}
    />
  ))
  .add('primary', () => (
    <Button
      {...props({ primary: true })}
    />
  ))
  .add('secondary', () => (
    <Button
      {...props({ secondary: true })}
    />
  ))
  .add('danger', () => (
    <Button
      {...props({ danger: true })}
    />
  ))
  .add('disabled', () => (
    <Button
      {...props({ disabled: true })}
    />
  ))
  .add('hidden', () => (
    <Button
      {...props({ hidden: true })}
    />
  ))
  .add('bland', () => (
    <Button
      {...props({ bland: true })}
    />
  ))
  .add('outline', () => (
    <Button
      {...props({ outline: true })}
    />
  ))
  .add('nude', () => (
    <Button
      {...props({ nude: true })}
    />
  ))
  .add('with icon', () => (
    <Button
      {...props({ bland: true, text: 'Edit' })}
    >
      <Icon name={select('icon', icons, icons.edit)} /> {text('text')}
    </Button>
  ))
  .add('as link', () => (
    <Button
      {...props()}
      is="a"
      href="https://rocket.chat"
      target="_blank"
      rel="noopener noreferrer"
    />
  ))
  .add('square', () => (
    <Button
      {...props({ square: true })}
    >
      <Icon name={select('icon', icons, icons.plus)} />
    </Button>
  ));
