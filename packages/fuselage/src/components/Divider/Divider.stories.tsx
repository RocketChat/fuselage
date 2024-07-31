import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconButton } from '../Button';
import ButtonGroup from '../ButtonGroup';
import Divider from './Divider';

export default {
  title: 'Data Display/Divider',
  component: Divider,
} satisfies ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => (
  <Divider {...args} />
);

export const Default: ComponentStory<typeof Divider> = Template.bind({});
export const WithText: ComponentStory<typeof Divider> = Template.bind({});
WithText.args = {
  children: 'Divider',
};

export const Vertical: ComponentStory<typeof Divider> = Template.bind({});
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
