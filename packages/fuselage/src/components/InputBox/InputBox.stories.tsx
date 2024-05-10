import { action } from '@storybook/addon-actions';
import {
  Title,
  Description,
  Primary,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Icon, InputBox, Box } from '../..';

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
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof InputBox> = (args) => (
  <InputBox aria-label='Value' {...args} />
);

export const Default: ComponentStory<typeof InputBox> = Template.bind({});
Default.args = {
  defaultValue: 'Value',
  onChange: action('change'),
};

export const Date: ComponentStory<typeof InputBox> = Template.bind({});
Date.args = {
  defaultValue: 'Value',
  onChange: action('change'),
  type: 'date',
};

export const Time: ComponentStory<typeof InputBox> = Template.bind({});
Time.args = {
  defaultValue: 'Value',
  onChange: action('change'),
  type: 'time',
};

export const WithAddon: ComponentStory<typeof InputBox> = Template.bind({});
WithAddon.args = {
  addon: <Icon name='send' size='x20' />,
};

export const Invalid: ComponentStory<typeof InputBox> = Template.bind({});
Invalid.args = {
  defaultValue: 'Value',
  error: 'Error',
  onChange: action('change'),
};

export const Disabled: ComponentStory<typeof InputBox> = Template.bind({});
Disabled.args = {
  defaultValue: 'Value',
  disabled: true,
  onChange: action('change'),
};

export const WithPlaceholder: ComponentStory<typeof InputBox> = Template.bind(
  {}
);
WithPlaceholder.args = {
  placeholder: 'Placeholder',
  onChange: action('change'),
};
export const Skeleton: ComponentStory<typeof InputBox> = () => (
  <InputBox.Skeleton />
);
Skeleton.storyName = 'InputBox.Skeleton';

export const SmallVariants: ComponentStory<typeof InputBox> = () => (
  <Box
    display='flex'
    flexDirection='column'
    alignItems='flex-start'
    style={{ gap: '8px' }}
  >
    <InputBox type='text' small placeholder='Name' aria-label='Name' />
    <InputBox
      type='text'
      small
      placeholder='Search'
      addon={<Icon name='magnifier' size='x20' />}
      aria-label='Search'
    />
  </Box>
);
SmallVariants.args = {
  placeholder: 'Search',
  small: true,
  onChange: action('change'),
};
