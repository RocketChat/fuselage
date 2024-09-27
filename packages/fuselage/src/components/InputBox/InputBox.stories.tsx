import { action } from '@storybook/addon-actions';
import type { StoryFn, Meta } from '@storybook/react';

import Box from '../Box';
import { Icon } from '../Icon';
import { InputBox } from './InputBox';

export default {
  title: 'Inputs/InputBox',
  component: InputBox,
} satisfies Meta<typeof InputBox>;

const Template: StoryFn<typeof InputBox> = (args) => (
  <InputBox aria-label='Value' {...args} />
);

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

export const SmallVariants: StoryFn<typeof InputBox> = () => (
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
