import { action } from '@storybook/addon-actions';
import React from 'react';

import { ToggleSwitch } from '../..';

export default {
  title: 'Buttons|ToggleSwitch',
  component: ToggleSwitch,
  parameters: {
    jest: ['ToggleSwitch/spec'],
  },
};

export const _default = () =>
  <ToggleSwitch />;

export const checked = () =>
  <ToggleSwitch checked onChange={action('change')} />;

export const disabled = () =>
  <ToggleSwitch disabled />;
