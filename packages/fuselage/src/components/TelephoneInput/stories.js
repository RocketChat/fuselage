import { action } from '@storybook/addon-actions';
import React from 'react';

import { Icon, TelephoneInput } from '../..';

export default {
  title: 'Forms|TelephoneInput',
  component: TelephoneInput,
  parameters: {
    jest: ['TelephoneInput/spec'],
  },
};

export const _default = () =>
  <TelephoneInput />;

export const withPlaceholder = () =>
  <TelephoneInput placeholder='Placeholder' onChange={action('change')} />;

export const withValue = () =>
  <TelephoneInput value='+1234567890' onChange={action('change')} />;

export const withAddon = () =>
  <TelephoneInput addon={<Icon name='mobile' />} onChange={action('change')} />;

export const disabled = () =>
  <TelephoneInput disabled onChange={action('change')} />;

export const withError = () =>
  <TelephoneInput error='Error' onChange={action('change')} />;
