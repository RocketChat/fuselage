import { action } from '@storybook/addon-actions';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { ToggleSwitch, Label } from '../..';
import { DECORATOR_ID, DECORATOR_LABEL } from '../../../.storybook/helpers';

export default {
  title: 'Inputs/ToggleSwitch',
  component: ToggleSwitch,
  decorators: [
    (Story) => (
      <>
        <Story />
        <Label mis='x4' htmlFor={DECORATOR_ID}>
          {DECORATOR_LABEL}
        </Label>
      </>
    ),
  ],
} as ComponentMeta<typeof ToggleSwitch>;

const Template: ComponentStory<typeof ToggleSwitch> = (args) => (
  <ToggleSwitch id={DECORATOR_ID} {...args} />
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
