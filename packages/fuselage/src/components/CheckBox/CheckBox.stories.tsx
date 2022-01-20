import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { CheckBox } from '../..';
import { PropsVariationSection } from '../../../.storybook/helpers';

export default {
  title: 'Buttons/CheckBox',
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => (
  <CheckBox {...args} onChange={action('change')} />
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

export const States = () => (
  <PropsVariationSection
    component={CheckBox}
    common={{ onChange: action('change') }}
    xAxis={{
      checked: { checked: true },
      unchecked: { checked: false },
      indeterminate: { indeterminate: true },
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
