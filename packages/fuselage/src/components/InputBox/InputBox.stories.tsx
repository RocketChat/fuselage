import { action } from '@storybook/addon-actions';
import {
  Title,
  Description,
  Primary,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs';
import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import { Icon, InputBox } from '../..';

export default {
  title: 'Inputs/InputBox',
  component: InputBox,
  parameters: {
    docs: {
      description: {
        component:
          "A decorated input control with support for addons. <br/> Usually you'll perfer to use `-Input` (e.g. <LinkTo kind='Forms/TextInput' story='Default'>`TextInput`</LinkTo>) components over this one because it works as a construction block for them.",
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
} as Meta<typeof Icon>;

const Template: StoryFn<typeof InputBox> = (args) => <InputBox {...args} />;

export const Default: StoryFn<typeof InputBox> = Template.bind({});
Default.args = {
  defaultValue: 'Value',
  onChange: action('change'),
};

export const Date: StoryFn<typeof InputBox> = Template.bind({});
Date.args = {
  defaultValue: 'Value',
  onChange: action('change'),
  type: 'date',
};

export const Time: StoryFn<typeof InputBox> = Template.bind({});
Time.args = {
  defaultValue: 'Value',
  onChange: action('change'),
  type: 'time',
};

export const WithAddon: StoryFn<typeof InputBox> = Template.bind({});
WithAddon.args = {
  addon: <Icon name='send' size='x20' />,
};

export const Invalid: StoryFn<typeof InputBox> = Template.bind({});
Invalid.args = {
  defaultValue: 'Value',
  error: 'Error',
  onChange: action('change'),
};

export const Disabled: StoryFn<typeof InputBox> = Template.bind({});
Disabled.args = {
  defaultValue: 'Value',
  disabled: true,
  onChange: action('change'),
};

export const WithPlaceholder: StoryFn<typeof InputBox> = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Placeholder',
  onChange: action('change'),
};
export const Skeleton: StoryFn<typeof InputBox> = () => <InputBox.Skeleton />;
Skeleton.storyName = 'InputBox.Skeleton';
