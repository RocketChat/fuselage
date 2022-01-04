import { action } from '@storybook/addon-actions';
import {
  Title,
  Description,
  Primary,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { ToggleSwitch } from '../..';
import { PropsVariationSection } from '../../../.storybook/helpers';

export default {
  title: 'Buttons/ToggleSwitch',
  component: ToggleSwitch,
  parameters: {
    docs: {
      description: {
        component: 'An input for multi-line plain-text editing.',
      },
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <ArgsTable />
          <Stories title={''} />
        </>
      ),
    },
  },
} as ComponentMeta<typeof ToggleSwitch>;

const Template: ComponentStory<typeof ToggleSwitch> = (args) => (
  <ToggleSwitch {...args} />
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
    common={{ onChange: action('change') }}
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
