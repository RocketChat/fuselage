import {
  Title,
  Subtitle,
  Description,
  Primary as PrimaryStory,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Badge, Box } from '../..';

export default {
  title: 'Data Display/Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: 'Shows a count.',
      },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <PrimaryStory />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories title={''} />
        </>
      ),
    },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = ({
  children = '99',
  ...args
}) => (
  <Box display='inline-flex'>
    <Badge {...args}>{children}</Badge>
  </Box>
);

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
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

export const Empty = Template.bind({});
Empty.args = {
  children: '',
  variant: 'primary',
};

export const Small = Template.bind({});
Small.args = {
  children: '',
  variant: 'primary',
  small: true,
};
