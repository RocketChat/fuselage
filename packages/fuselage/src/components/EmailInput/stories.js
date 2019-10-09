import { action } from '@storybook/addon-actions';
import React from 'react';

import { Icon, EmailInput } from '../..';

export default {
  title: 'Forms|EmailInput',
  component: EmailInput,
  parameters: {
    jest: ['EmailInput/spec'],
  },
};

export const _default = () =>
  <EmailInput />;

export const withPlaceholder = () =>
  <EmailInput placeholder='Placeholder' onChange={action('change')} />;

export const withValue = () =>
  <EmailInput value='Value' onChange={action('change')} />;

export const withAddon = () =>
  <EmailInput addon={<Icon name='at' />} onChange={action('change')} />;

export const disabled = () =>
  <EmailInput disabled onChange={action('change')} />;

export const withError = () =>
  <EmailInput error='Error' onChange={action('change')} />;
