import type { StoryFn, Meta } from '@storybook/react-vite';

import { IconButton } from '../Button/index.js';
import { ButtonGroup } from '../ButtonGroup/index.js';

import { Divider } from './Divider.js';

export default {
  title: 'Data Display/Divider',
  component: Divider,
} satisfies Meta<typeof Divider>;

const Template: StoryFn<typeof Divider> = (args) => <Divider {...args} />;

export const Default: StoryFn<typeof Divider> = Template.bind({});
export const WithText: StoryFn<typeof Divider> = Template.bind({});
WithText.args = {
  children: 'Divider',
};

export const Vertical: StoryFn<typeof Divider> = Template.bind({});
Vertical.args = {
  vertical: true,
};

export const AsButtonSeparator = () => (
  <ButtonGroup>
    <IconButton small icon='phone' />
    <Divider vertical />
    <IconButton small icon='user' />
  </ButtonGroup>
);
