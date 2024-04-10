import { Title, Description, Primary, Stories } from '@storybook/addon-docs';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

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
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description children='Section to hold all media related items, such as VoIP calls, audio and video calls.' />
          <Primary />
          <Stories includePrimary={false} />
        </>
      ),
    },
  },
} as ComponentMeta<typeof SideBar>;

export const Default: ComponentStory<typeof SideBar> = () => (
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
