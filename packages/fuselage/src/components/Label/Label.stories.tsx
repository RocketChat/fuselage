import {
  Title,
  Description,
  Primary,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Label } from '../..';
import { LabelInfo } from './LabelInfo';

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
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => (
  <Label {...args}>Label</Label>
);

export const Default: ComponentStory<typeof Label> = Template.bind({});

export const Required: ComponentStory<typeof Label> = Template.bind({});
Required.args = {
  required: true,
};

export const Info: ComponentStory<typeof Label> = (args) => (
  <Label {...args}>
    Label
    <LabelInfo title='this is a label info' />
  </Label>
);

export const InfoRequired: ComponentStory<typeof Label> = (args) => (
  <Label required {...args}>
    Label
    <LabelInfo title='this is a label info' />
  </Label>
);

export const Disabled: ComponentStory<typeof Label> = Template.bind({});
Disabled.args = {
  disabled: true,
};
