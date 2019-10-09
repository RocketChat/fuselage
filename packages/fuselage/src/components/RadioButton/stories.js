import { action } from '@storybook/addon-actions';
import React from 'react';

import { RadioButton } from '../..';

export default {
  title: 'Buttons|RadioButton',
  component: RadioButton,
  parameters: {
    jest: ['RadioButton/spec'],
  },
};

export const _default = () => <RadioButton />;

export const checked = () => <RadioButton checked onChange={action('change')} />;

export const disabled = () => <RadioButton disabled />;
