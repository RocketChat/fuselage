import * as icons from '@rocket.chat/icons/dist/font';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Icon } from '../Icon';
import notes from './README.md';
import { Button } from './index';


const props = ({
  children = 'Powered by Rocket.Chat',
  primary = false,
  secondary = false,
  danger = false,
  disabled = false,
  hidden = false,
  bland = false,
  outline = false,
  nude = false,
  square = false,
} = {}) => ({
  children: typeof children === 'string' ? text('children', children) : children,
  primary: boolean('primary', primary),
  secondary: boolean('secondary', secondary),
  danger: boolean('danger', danger),
  disabled: boolean('disabled', disabled),
  hidden: boolean('hidden', hidden),
  bland: boolean('bland', bland),
  outline: boolean('outline', outline),
  nude: boolean('nude', nude),
  square: boolean('square', square),
  onClick: action('click'),
});

storiesOf('Elements|Button', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({
    jest: ['spec'],
    notes,
  })
  .add('default', () => (
    <Button {...props()} />
  ))
  .add('primary', () => (
    <Button {...props({ primary: true })} />
  ))
  .add('secondary', () => (
    <Button {...props({ secondary: true })} />
  ))
  .add('danger', () => (
    <Button {...props({ danger: true })} />
  ))
  .add('disabled', () => (
    <Button {...props({ disabled: true })} />
  ))
  .add('hidden', () => (
    <Button {...props({ hidden: true })} />
  ))
  .add('bland', () => (
    <Button {...props({ bland: true })} />
  ))
  .add('outline', () => (
    <Button {...props({ outline: true })} />
  ))
  .add('nude', () => (
    <Button {...props({ nude: true })} />
  ))
  .add('with icon', () => (
    <Button
      {...props({
        bland: true,
        children: <>
          <Icon name={select('children/icon', icons, icons.edit)} /> {text('children/text', 'Edit')}
        </>,
      })}
    />
  ))
  .add('as link', () => (
    <Button
      {...props()}
      is="a"
      href={text('href', 'https://rocket.chat')}
      target={text('target', '_blank')}
      rel={text('rel', 'noopener noreferrer')}
    />
  ))
  .add('square', () => (
    <Button {...props({ square: true, children: <Icon name={select('children/icon', icons, icons.plus)} /> })} />
  ));
