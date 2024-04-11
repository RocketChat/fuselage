import type { DecoratorFn } from '@storybook/react';
import type { ComponentProps, ReactElement } from 'react';
import React from 'react';

import {
  SideBar,
  SideBarAccordion,
  SideBarAccordionItem,
  SideBarButtonGroup,
  SideBarCollapseGroup,
  SideBarFooter,
  SideBarFooterContent,
  SideBarFooterWatermark,
  SideBarItem,
  SideBarItemAvatarWrapper,
  SideBarItemBadge,
  SideBarItemCol,
  SideBarItemIcon,
  SideBarItemMenu,
  SideBarItemRow,
  SideBarItemTimestamp,
  SideBarItemTitle,
  SideBarListItem,
} from '.';
import {
  Avatar,
  Box,
  IconButton,
  MenuV2 as Menu,
  MenuItem,
  SidebarDivider,
} from '../..';
import { SideBarItemSubtitle } from './SideBarItem/SideBarItemSubtitle';

export const leterAvatarUrls = [
  'https://open.rocket.chat/avatar/room/6424421d31f936e5e0d18294',
  'https://open.rocket.chat/avatar/room/2Fd44Hrw5XyTC7T3g',
  'https://open.rocket.chat/avatar/room/65e9c78577f50a59926585a9',
  'https://open.rocket.chat/avatar/room/TwfFFRmxBdJjBBYto',
];

export const names = [
  'Marvin Black',
  'Esther Miles',
  'Leroy Jenkins',
  'Morgan Freeman',
  'John Doe',
  'Jane Doe',
  'Baz Qux',
  'Alice Bob',
  'Charlie Delta',
  'Eve Mallory',
];

export const MenuTemplate = () => (
  <Menu mini aria-label='Options' title='Options'>
    <MenuItem key='hide'>Hide</MenuItem>
    <MenuItem key='discussion'>Mark unread</MenuItem>
    <MenuItem key='unfavorite'>Unfavorite</MenuItem>
  </Menu>
);

export const GenericCondensedItem = ({ i = 0 }: { i: number }) => (
  <SideBarListItem>
    <SideBarItem href='#'>
      <SideBarItemAvatarWrapper>
        <Avatar size='x20' url={leterAvatarUrls[i % 4]} alt='avatar' />
      </SideBarItemAvatarWrapper>
      <SideBarItemIcon name='team' />
      <SideBarItemTitle>{names[i % 10]}</SideBarItemTitle>
      <SideBarItemBadge children={Math.floor(Math.random() * 10) + 1} />
      <SideBarItemMenu children={<MenuTemplate />} />
    </SideBarItem>
  </SideBarListItem>
);

export const GenericMediumItem = ({ i = 0 }: { i: number }) => (
  <SideBarListItem>
    <SideBarItem href='#'>
      <SideBarItemAvatarWrapper>
        <Avatar size='x28' url={leterAvatarUrls[i % 4]} alt='avatar' />
      </SideBarItemAvatarWrapper>
      <SideBarItemIcon name='team' />
      <SideBarItemTitle>{names[i % 10]}</SideBarItemTitle>
      <SideBarItemBadge children={Math.floor(Math.random() * 10) + 1} />
      <SideBarItemMenu children={<MenuTemplate />} />
    </SideBarItem>
  </SideBarListItem>
);

export const GenericExtendedItem = ({ i = 0 }: { i: number }) => (
  <SideBarListItem>
    <SideBarItem href='#'>
      <SideBarItemAvatarWrapper>
        <Avatar size='x36' url={leterAvatarUrls[i % 4]} alt='avatar' />
      </SideBarItemAvatarWrapper>

      <SideBarItemCol>
        <SideBarItemRow>
          <SideBarItemIcon name='team' />
          <SideBarItemTitle>{names[i % 10]}</SideBarItemTitle>
          <SideBarItemTimestamp>12:00</SideBarItemTimestamp>
        </SideBarItemRow>

        <SideBarItemRow>
          <SideBarItemSubtitle>No messages yet</SideBarItemSubtitle>
          <SideBarItemBadge children={Math.floor(Math.random() * 10) + 1} />
          <SideBarItemMenu children={<MenuTemplate />} />
        </SideBarItemRow>
      </SideBarItemCol>
    </SideBarItem>
  </SideBarListItem>
);

export const GenericCallItem = ({
  i = 0,
  ...props
}: { i?: number } & ComponentProps<typeof SideBarItem>) => (
  <SideBarItem {...props}>
    <SideBarItemAvatarWrapper>
      <Avatar size='x36' url={leterAvatarUrls[i % 4]} alt='avatar' />
    </SideBarItemAvatarWrapper>

    <SideBarItemCol>
      <SideBarItemTitle>{names[i % 10]}</SideBarItemTitle>
      <SideBarItemSubtitle>Calling</SideBarItemSubtitle>
    </SideBarItemCol>

    <SideBarItemRow>
      <SideBarButtonGroup>
        <IconButton
          small
          icon='phone-off'
          secondary
          danger
          aria-label='phone-off'
        />
        <IconButton small icon='phone' secondary success aria-label='phone' />
      </SideBarButtonGroup>
    </SideBarItemRow>
  </SideBarItem>
);

export const decorators: DecoratorFn[] = [
  (fn): ReactElement => (
    <Box h='90vh'>
      <SideBar>
        <SideBarAccordion>
          <SideBarAccordionItem
            title='Label'
            defaultExpanded
            badge={<SideBarItemBadge children='99+' variant='danger' />}
          >
            <SideBarCollapseGroup
              title='Label'
              defaultExpanded
              badge={<SideBarItemBadge children='99+' variant='danger' />}
            >
              {fn()}
            </SideBarCollapseGroup>
          </SideBarAccordionItem>
        </SideBarAccordion>
        <SideBarFooter>
          <SidebarDivider />
          <SideBarFooterWatermark>
            <SideBarFooterContent>Powered by Rocket.Chat</SideBarFooterContent>
            <SideBarFooterContent secondary>Free edition</SideBarFooterContent>
          </SideBarFooterWatermark>
        </SideBarFooter>
      </SideBar>
    </Box>
  ),
];
