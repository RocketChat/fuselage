import { action } from '@storybook/addon-actions';
import React from 'react';

import { Icon, PasswordInput } from '../..';

export default {
  title: 'Forms|PasswordInput',
  component: PasswordInput,
  parameters: {
    jest: ['PasswordInput/spec'],
  },
};

export const _default = () =>
  <PasswordInput />;

export const withPlaceholder = () =>
  <PasswordInput placeholder='Placeholder' onChange={action('change')} />;

export const withValue = () =>
  <PasswordInput value='Value' onChange={action('change')} />;

export const withAddon = () =>
  <PasswordInput addon={<Icon name='key' />} onChange={action('change')} />;

export const disabled = () =>
  <PasswordInput disabled onChange={action('change')} />;

export const withError = () =>
  <PasswordInput error='Error' onChange={action('change')} />;
