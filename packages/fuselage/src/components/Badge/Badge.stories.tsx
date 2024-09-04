import type { StoryFn, Meta } from '@storybook/react';

import Box from '../Box';
import { Badge } from './Badge';

export default {
  title: 'Data Display/Badge',
  component: Badge,
} satisfies Meta<typeof Badge>;

const Template: StoryFn<typeof Badge> = (args) => (
  <Box display='inline-flex'>
    <Badge {...args} />
  </Box>
);

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithValue = Template.bind({});
WithValue.args = {
  children: '99',
  variant: 'primary',
};

export const Small = Template.bind({});
Small.args = {
  children: '',
  variant: 'primary',
  small: true,
};
