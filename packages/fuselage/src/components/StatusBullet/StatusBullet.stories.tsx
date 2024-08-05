import type { StoryFn, Meta } from '@storybook/react';

import Box from '../Box';
import { StatusBullet } from './StatusBullet';

export default {
  title: 'Data Display/StatusBullet',
  component: StatusBullet,
} satisfies Meta<typeof StatusBullet>;

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
