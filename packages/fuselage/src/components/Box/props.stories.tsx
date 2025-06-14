import type { StoryFn, Meta } from '@storybook/react-webpack5';

import Button from '../Button';

import Box from './Box';

export default {
  title: 'Layout/Box/is',
  component: Box,
} satisfies Meta<typeof Box>;

const Template: StoryFn<typeof Box> = (args) => <Box {...args} />;

export const IsButton = Template.bind({});
IsButton.args = {
  is: Button,
  children: 'A Box rendering a Button',
};
IsButton.storyName = 'is Button';

export const IsSpan = Template.bind({});
IsSpan.args = {
  is: 'span',
  children: 'A Box rendering a span',
};
IsSpan.storyName = 'is span';

export const IsH4 = Template.bind({});
IsH4.args = {
  is: 'h4',
  children: 'A Box rendering a h4',
};
IsH4.storyName = 'is h4';
