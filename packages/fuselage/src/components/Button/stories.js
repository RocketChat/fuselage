import * as icons from '@rocket.chat/icons/dist/font';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { centeredWithWidth } from '../../helpers/storybook';
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
  stack: boolean('stack', defaults.stack || false),
  noPadding: boolean('noPadding', defaults.noPadding || false),
  loading: boolean('loading', defaults.loading || false),
  full: boolean('full', defaults.full || false),
  onClick: action('clicked'),
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
  .add('small', () => (
    <Button
      {...props({ small: true })}
    />
  ))
  .add('square', () => (
    <Button
      {...props({ square: true })}
    />
  ))
  .add('stack', () => (
    <Button
      {...props({ stack: true })}
    />
  ))
  .add('noPadding', () => (
    <Button
      {...props({ noPadding: true })}
    />
  ))
  .add('loading', () => (
    <Button
      {...props({ loading: true })}
    />
  ));

storiesOf('Components|Button', module)
  .addDecorator(withKnobs)
  .addDecorator(centeredWithWidth('100vw'))
  .addParameters({ jest: ['Button'] })
  .add('full', () => (
    <Button
      {...props({ full: true })}
    />
  ), { viewport: { defaultViewport: 'iphonex' } });
