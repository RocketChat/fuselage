import { action } from '@storybook/addon-actions';
import React from 'react';

import { Icon, TextAreaInput } from '../..';

export default {
  title: 'Forms|TextAreaInput',
  component: TextAreaInput,
  parameters: {
    jest: ['TextAreaInput/spec'],
  },
};

export const _default = () =>
  <TextAreaInput />;

export const withPlaceholder = () =>
  <TextAreaInput placeholder='Placeholder' onChange={action('change')} />;

export const withValue = () =>
  <TextAreaInput value='Value' onChange={action('change')} />;

export const withAddon = () =>
  <TextAreaInput addon={<Icon name='edit' />} onChange={action('change')} />;

export const disabled = () =>
  <TextAreaInput disabled onChange={action('change')} />;

export const withError = () =>
  <TextAreaInput error='Error' onChange={action('change')} />;
