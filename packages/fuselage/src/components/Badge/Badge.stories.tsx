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

const Variants: ComponentStory<typeof Badge> = (args) => (
  <Box display='inline-flex'>
    <Badge {...args}>99</Badge>
  </Box>
);

export const Default = Variants.bind({});

export const Primary = Variants.bind({});
Primary.args = {
  variant: 'primary',
};

export const Danger = Variants.bind({});
Danger.args = {
  variant: 'danger',
};

export const Warning = Variants.bind({});
Warning.args = {
  variant: 'warning',
};

export const Disabled = Variants.bind({});
Disabled.args = {
  disabled: true,
};

const Size: ComponentStory<typeof Badge> = () => (
  <Box display='flex' alignItems='center'>
    <Badge small />
    <Badge small variant='primary' />
    <Badge small variant='danger' />
    <Badge small variant='warning' />
    <Badge small disabled />
  </Box>
);

export const Small = Size.bind({});
