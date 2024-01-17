import {
  Title,
  Description,
  Primary,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs';
import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import { StatusBullet, Box } from '../..';

export default {
  title: 'Data Display/StatusBullet',
  component: StatusBullet,
  parameters: {
    docs: {
      description: {
        component: 'The `StatusBullet` is used to inform the user status.',
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
} as Meta<typeof StatusBullet>;

export const Default: StoryFn<typeof StatusBullet> = () => (
  <Box>
    <StatusBullet status='online' />
    <StatusBullet status='away' />
    <StatusBullet status='busy' />
    <StatusBullet status='disabled' />
    <StatusBullet status='offline' />
    <StatusBullet />
  </Box>
);

export const Small: StoryFn<typeof StatusBullet> = () => (
  <Box>
    <StatusBullet size='small' status='online' />
    <StatusBullet size='small' status='away' />
    <StatusBullet size='small' status='busy' />
    <StatusBullet size='small' status='disabled' />
    <StatusBullet size='small' status='offline' />
    <StatusBullet size='small' />
  </Box>
);
