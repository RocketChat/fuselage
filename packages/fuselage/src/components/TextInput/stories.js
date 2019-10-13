import { action } from '@storybook/addon-actions';
import React from 'react';

import { Icon, TextInput } from '../..';

export default {
  title: 'Forms|TextInput',
  component: TextInput,
  parameters: {
    jest: ['TextInput/spec'],
  },
};

export const _default = () =>
  <TextInput onChange={action('change')} />;

export const withPlaceholder = () =>
  <TextInput placeholder='Placeholder' onChange={action('change')} />;

export const withValue = () =>
  <TextInput value='Value' onChange={action('change')} />;

export const withAddon = () =>
  <TextInput addon={<Icon name='keyboard' />} onChange={action('change')} />;

export const disabled = () =>
  <TextInput disabled onChange={action('change')} />;

export const withError = () =>
  <TextInput error='Error' onChange={action('change')} />;
