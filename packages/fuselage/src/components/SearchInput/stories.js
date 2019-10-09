import { action } from '@storybook/addon-actions';
import React from 'react';

import { Icon, SearchInput } from '../..';

export default {
  title: 'Forms|SearchInput',
  component: SearchInput,
  parameters: {
    jest: ['SearchInput/spec'],
  },
};

export const _default = () =>
  <SearchInput />;

export const withPlaceholder = () =>
  <SearchInput placeholder='Placeholder' onChange={action('change')} />;

export const withValue = () =>
  <SearchInput value='Value' onChange={action('change')} />;

export const withAddon = () =>
  <SearchInput addon={<Icon name='magnifier' />} onChange={action('change')} />;

export const disabled = () =>
  <SearchInput disabled onChange={action('change')} />;

export const withError = () =>
  <SearchInput error='Error' onChange={action('change')} />;
