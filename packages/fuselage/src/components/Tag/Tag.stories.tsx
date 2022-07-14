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

import { Tag, Box, Icon } from '../..';

export default {
  title: 'Data Display/Tag',
  component: Tag,
  parameters: {
    docs: {
      description: {
        component: 'Used for mentions',
      },
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <Stories title={''} />
          <ArgsTable />
        </>
      ),
    },
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => (
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

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: (
    <>
      <Icon size='x12' mie='x4' name='team-lock' /> Team
    </>
  ),
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

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Clickable = Template.bind({});
Clickable.args = {
  onClick: action('click'),
};

export const Small = Template.bind({});
Small.args = {
  small: true,
};

export const Medium = Template.bind({});
Medium.args = {
  medium: true,
};
