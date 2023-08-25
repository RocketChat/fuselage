import { action } from '@storybook/addon-actions';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { CheckBox, Label } from '../..';

const decoratorId = 'decoratorId';

export default {
  title: 'Inputs/CheckBox',
  component: CheckBox,
  decorators: [
    (Story) => (
      <>
        <Story />
        <Label mis='x4' htmlFor={decoratorId}>
          Decorator Label
        </Label>
      </>
    ),
  ],
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => (
  <CheckBox {...args} id={decoratorId} onChange={action('change')} />
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
