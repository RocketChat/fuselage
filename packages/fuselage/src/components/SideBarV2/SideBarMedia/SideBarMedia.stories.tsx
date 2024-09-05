import type { StoryFn, Meta } from '@storybook/react';

import {
  SideBar,
  SideBarMedia,
  SideBarMediaTitle,
  SideBarMediaController,
  Box,
  IconButton,
} from '../..';
import { GenericCallItem } from '../helpers';

export default {
  title: 'Navigation/SideBar/Media',
  component: SideBar,
} satisfies Meta<typeof SideBar>;

export const Default: StoryFn<typeof SideBar> = () => (
  <Box>
    <SideBar>
      <SideBarMedia>
        <SideBarMediaTitle>3 calls in queue</SideBarMediaTitle>
        <SideBarMediaController label='Call'>
          <IconButton icon='user-arrow-right' small aria-label='user-forward' />
          <IconButton icon='mic' small aria-label='mic' />
          <IconButton icon='pause-unfilled' small aria-label='pause' />
        </SideBarMediaController>
        <GenericCallItem is='div' />
      </SideBarMedia>
    </SideBar>
  </Box>
);
