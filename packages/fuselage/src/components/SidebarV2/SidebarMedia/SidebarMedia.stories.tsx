import type { StoryFn, Meta } from '@storybook/react';

import {
  Sidebar,
  SidebarMedia,
  SidebarMediaTitle,
  SidebarMediaController,
  Box,
  IconButton,
} from '../..';
import { GenericCallItem } from '../helpers';

export default {
  title: 'Navigation/Sidebar/Media',
  component: Sidebar,
} satisfies Meta<typeof Sidebar>;

export const Default: StoryFn<typeof Sidebar> = () => (
  <Box>
    <Sidebar>
      <SidebarMedia>
        <SidebarMediaTitle>3 calls in queue</SidebarMediaTitle>
        <SidebarMediaController label='Call'>
          <IconButton icon='user-arrow-right' small aria-label='user-forward' />
          <IconButton icon='mic' small aria-label='mic' />
          <IconButton icon='pause-unfilled' small aria-label='pause' />
        </SidebarMediaController>
        <GenericCallItem is='div' />
      </SidebarMedia>
    </Sidebar>
  </Box>
);
