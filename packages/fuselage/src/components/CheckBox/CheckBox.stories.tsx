import { action } from '@storybook/addon-actions';
import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import { CheckBox } from '../..';
import {
  DECORATOR_LABEL,
  PropsVariationSection,
} from '../../../.storybook/helpers';

export default {
  title: 'Inputs/CheckBox',
  component: CheckBox,
} as Meta<typeof CheckBox>;

const Template: StoryFn<typeof CheckBox> = (args) => (
  <CheckBox
    {...args}
    aria-label={DECORATOR_LABEL}
    onChange={action('change')}
  />
);

export const Default = Template.bind({});

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  indeterminate: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
export const DefaultChecked = Template.bind({});
DefaultChecked.args = {
  defaultChecked: true,
};

export const States: StoryFn<typeof CheckBox> = () => (
  <PropsVariationSection
    component={CheckBox}
    common={{ 'onChange': action('change'), 'aria-label': DECORATOR_LABEL }}
    xAxis={{
      checked: { checked: true },
      unchecked: { checked: false },
    }}
    yAxis={{
      default: {},
      hover: { className: 'is-hovered' },
      active: { className: 'is-active' },
      focus: { className: 'is-focused' },
      disabled: { disabled: true },
    }}
  />
);
