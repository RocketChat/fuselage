import type { StoryFn, Meta } from '@storybook/react';

import Button from '../Button';
import Box from './Box';

export default {
  title: 'Layout/Box/is',
  component: Box,
} satisfies Meta<typeof Box>;

const Template: StoryFn<typeof Box> = (args) => <Box {...args} />;

export const isButton = Template.bind({});
isButton.args = {
  is: Button,
  children: 'A Box rendering a Button',
};
isButton.storyName = 'is Button';

export const isSpan = Template.bind({});
isSpan.args = {
  is: 'span',
  children: 'A Box rendering a span',
};
isSpan.storyName = 'is span';

export const isH4 = Template.bind({});
isH4.args = {
  is: 'h4',
  children: 'A Box rendering a h4',
};
isH4.storyName = 'is h4';
