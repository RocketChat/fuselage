import { action } from '@storybook/addon-actions';
import React from 'react';

import { CheckBox } from '../..';

export default {
  title: 'Buttons|CheckBox',
  component: CheckBox,
  parameters: {
    jest: ['CheckBox/spec'],
  },
};

export const _default = () => <CheckBox />;

export const checked = () => <CheckBox checked onChange={action('change')} />;

export const indeterminate = () => <CheckBox indeterminate onChange={action('change')} />;

export const disabled = () => <CheckBox disabled />;
