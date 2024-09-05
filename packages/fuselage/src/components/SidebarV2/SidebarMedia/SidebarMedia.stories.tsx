import type { StoryFn, Meta } from '@storybook/react';

import {
  SidebarV2 as Sidebar,
  SidebarV2Media as SidebarMedia,
  SidebarV2MediaTitle as SidebarMediaTitle,
  SidebarV2MediaController as SidebarMediaController,
  Box,
  IconButton,
} from '../..';
import { GenericCallItem } from '../helpers';

export default {
  title: 'Navigation/SidebarV2/Media',
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
