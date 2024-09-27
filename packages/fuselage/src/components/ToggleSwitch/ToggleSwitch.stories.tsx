import { action } from '@storybook/addon-actions';
import type { StoryFn, Meta } from '@storybook/react';

import {
  DECORATOR_LABEL,
  PropsVariationSection,
} from '../../../.storybook/helpers';
import { ToggleSwitch } from './ToggleSwitch';

export default {
  title: 'Inputs/ToggleSwitch',
  component: ToggleSwitch,
} satisfies Meta<typeof ToggleSwitch>;

const Template: StoryFn<typeof ToggleSwitch> = (args) => (
  <ToggleSwitch aria-label={DECORATOR_LABEL} {...args} />
);

export const Default: StoryFn<typeof ToggleSwitch> = Template.bind({});
Default.args = {
  onChange: action('change'),
};

export const Checked: StoryFn<typeof ToggleSwitch> = Template.bind({});
Checked.args = {
  checked: true,
  onChange: action('change'),
};

export const Disabled: StoryFn<typeof ToggleSwitch> = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const States: StoryFn<typeof ToggleSwitch> = () => (
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
