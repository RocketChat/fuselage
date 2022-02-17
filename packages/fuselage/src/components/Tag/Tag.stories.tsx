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
          <ArgsTable />
          <Stories title={''} />
        </>
      ),
    },
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => (
  <Box display='inline-flex'>
    <Tag {...args}>
      {args.children}
      john.doe
    </Tag>
  </Box>
);

export const Default: ComponentStory<typeof Tag> = Template.bind({});
Default.args = {
  variant: 'primary',
};

export const WithPointerCursor: ComponentStory<typeof Tag> = Template.bind({});
WithPointerCursor.args = {
  onClick: () => {},
};

export const Secondary: ComponentStory<typeof Tag> = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};

export const WithIcon: ComponentStory<typeof Tag> = Template.bind({});
WithIcon.args = {
  variant: 'secondary',
  children: <Icon size='x12' mie='x4' name='team-lock' />,
};

export const PrimaryStory: ComponentStory<typeof Tag> = Template.bind({});
PrimaryStory.args = {
  onClick: () => {},
};
PrimaryStory.storyName = 'Primary';

export const Danger: ComponentStory<typeof Tag> = Template.bind({});
Danger.args = {
  variant: 'danger',
};

export const Warning: ComponentStory<typeof Tag> = Template.bind({});
Warning.args = {
  variant: 'warning',
};

export const Ghost: ComponentStory<typeof Tag> = Template.bind({});
Ghost.args = {
  variant: 'ghost',
};

export const Disabled: ComponentStory<typeof Tag> = Template.bind({});
Disabled.args = {
  disabled: true,
};
