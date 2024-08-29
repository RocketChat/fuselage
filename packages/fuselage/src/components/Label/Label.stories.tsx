import type { StoryFn, Meta } from '@storybook/react';

import { Label } from './Label';
import { LabelInfo } from './LabelInfo';

export default {
  title: 'Inputs/Label',
  component: Label,
} satisfies Meta<typeof Label>;

const Template: StoryFn<typeof Label> = (args) => (
  <Label {...args}>Label</Label>
);

export const Default: StoryFn<typeof Label> = Template.bind({});

export const Required: StoryFn<typeof Label> = Template.bind({});
Required.args = {
  required: true,
};

export const Info: StoryFn<typeof Label> = (args) => (
  <Label {...args}>
    Label
    <LabelInfo title='this is a label info' />
  </Label>
);

export const InfoRequired: StoryFn<typeof Label> = (args) => (
  <Label required {...args}>
    Label
    <LabelInfo title='this is a label info' />
  </Label>
);

export const Disabled: StoryFn<typeof Label> = Template.bind({});
Disabled.args = {
  disabled: true,
};
