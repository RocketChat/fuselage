import { action } from '@storybook/addon-actions';
import type { StoryFn, Meta } from '@storybook/react';

import Box from '../Box';
import { ButtonGroup } from '../ButtonGroup';
import { Icon } from '../Icon';
import { Tag } from './Tag';

export default {
  title: 'Data Display/Tag',
  component: Tag,
} satisfies Meta<typeof Tag>;

const Template: StoryFn<typeof Tag> = (args) => (
  <Box display='inline-flex'>
    <Tag {...args}>{args.children || 'john.doe'}</Tag>
  </Box>
);

export const Default = Template.bind({});

export const _Primary = Template.bind({});
_Primary.args = {
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};

export const _Danger = Template.bind({});
_Danger.args = {
  variant: 'danger',
};
export const _SecondaryDanger = Template.bind({});
_SecondaryDanger.args = {
  variant: 'secondary-danger',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
};

export const Featured = Template.bind({});
Featured.args = {
  variant: 'featured',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: <Icon size='x12' mie={4} name='team-lock' />,
  children: 'Team',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Clickable = Template.bind({});
Clickable.args = {
  onClick: action('click'),
};

export const Medium = Template.bind({});
Medium.args = {
  medium: true,
};

export const Large = Template.bind({});
Large.args = {
  large: true,
};

export const AsLink = Template.bind({});
AsLink.args = {
  href: '#',
};

export const Variants = () => (
  <ButtonGroup>
    <Tag>john.doe</Tag>
    <Tag variant='primary'>john.doe</Tag>
    <Tag variant='danger'>john.doe</Tag>
    <Tag variant='warning'>john.doe</Tag>
    <Tag variant='featured'>john.doe</Tag>
  </ButtonGroup>
);
export const VariantsAsLinks = () => (
  <ButtonGroup>
    <Tag href='#'>john.doe</Tag>
    <Tag variant='primary' href='#'>
      john.doe
    </Tag>
    <Tag variant='danger' href='#'>
      john.doe
    </Tag>
    <Tag variant='warning' href='#'>
      john.doe
    </Tag>
    <Tag variant='featured' href='#'>
      john.doe
    </Tag>
  </ButtonGroup>
);
