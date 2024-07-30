import { action } from '@storybook/addon-actions';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { ToggleSwitch } from '../..';
import {
  DECORATOR_LABEL,
  PropsVariationSection,
} from '../../../.storybook/helpers';

export default {
  title: 'Inputs/ToggleSwitch',
  component: ToggleSwitch,
} satisfies ComponentMeta<typeof ToggleSwitch>;

const Template: ComponentStory<typeof ToggleSwitch> = (args) => (
  <ToggleSwitch aria-label={DECORATOR_LABEL} {...args} />
);

export const Default: ComponentStory<typeof ToggleSwitch> = Template.bind({});
Default.args = {
  onChange: action('change'),
};

export const Checked: ComponentStory<typeof ToggleSwitch> = Template.bind({});
Checked.args = {
  checked: true,
  onChange: action('change'),
};

export const Disabled: ComponentStory<typeof ToggleSwitch> = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const States: ComponentStory<typeof ToggleSwitch> = () => (
  <PropsVariationSection
    component={ToggleSwitch}
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
