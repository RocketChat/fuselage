import { action } from '@storybook/addon-actions';
import React from 'react';

import { SelectInput } from '../..';

export default {
  title: 'Forms|SelectInput',
  component: SelectInput,
  parameters: {
    jest: ['SelectInput/spec'],
  },
};

export const _default = () =>
  <SelectInput>
    <SelectInput.Option value='a'>Item A</SelectInput.Option>
    <SelectInput.Option value='b'>Item B</SelectInput.Option>
    <SelectInput.Option value='c'>Item C</SelectInput.Option>
  </SelectInput>;

export const withPlaceholder = () =>
  <SelectInput placeholder='Placeholder' onChange={action('change')}>
    <SelectInput.Option value='a'>Item A</SelectInput.Option>
    <SelectInput.Option value='b'>Item B</SelectInput.Option>
    <SelectInput.Option value='c'>Item C</SelectInput.Option>
  </SelectInput>;

export const withValue = () =>
  <SelectInput value='b' onChange={action('change')}>
    <SelectInput.Option value='a'>Item A</SelectInput.Option>
    <SelectInput.Option value='b'>Item B</SelectInput.Option>
    <SelectInput.Option value='c'>Item C</SelectInput.Option>
  </SelectInput>;

export const disabled = () =>
  <SelectInput disabled onChange={action('change')}>
    <SelectInput.Option value='a'>Item A</SelectInput.Option>
    <SelectInput.Option value='b'>Item B</SelectInput.Option>
    <SelectInput.Option value='c'>Item C</SelectInput.Option>
  </SelectInput>;

export const withError = () =>
  <SelectInput error='Error' onChange={action('change')}>
    <SelectInput.Option value='a'>Item A</SelectInput.Option>
    <SelectInput.Option value='b'>Item B</SelectInput.Option>
    <SelectInput.Option value='c'>Item C</SelectInput.Option>
  </SelectInput>;
