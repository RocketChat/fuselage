import {
  Title,
  Description,
  Primary,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs';
import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import { LabelInfo } from './LabelInfo';
import { Label } from '../..';

export default {
  title: 'Inputs/Label',
  component: Label,
  parameters: {
    docs: {
      description: {
        component: 'A caption for an input component.',
      },
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <ArgsTable />
          <Stories title={'Input component state'} />
        </>
      ),
    },
  },
} as Meta<typeof Label>;

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
