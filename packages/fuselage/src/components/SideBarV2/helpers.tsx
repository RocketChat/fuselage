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
  SideBarItem,
  SideBarItemAvatarWrapper,
  SideBarItemBadge,
  SideBarItemCol,
  SideBarItemContent,
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
  StatusBullet,
} from '../..';

export const leterAvatarUrls = [
  "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3e%3crect width='100%25' height='100%25' fill='%2310529E'/%3e%3ctext x='50%25' y='50%25' dy='0.36em' text-anchor='middle' pointer-events='none' fill='white' font-size='125' font-family='Helvetica%2c sans-serif'%3eB%3c/text%3e%3c/svg%3e",
  "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3e%3crect width='100%25' height='100%25' fill='%23158D65'/%3e%3ctext x='50%25' y='50%25' dy='0.36em' text-anchor='middle' pointer-events='none' fill='white' font-size='125' font-family='Helvetica%2c sans-serif'%3eG%3c/text%3e%3c/svg%3e",
  "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3e%3crect width='100%25' height='100%25' fill='%237F1B9F'/%3e%3ctext x='50%25' y='50%25' dy='0.36em' text-anchor='middle' pointer-events='none' fill='white' font-size='125' font-family='Helvetica%2c sans-serif'%3eP%3c/text%3e%3c/svg%3e",
  "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3e%3crect width='100%25' height='100%25' fill='%23B68D00'/%3e%3ctext x='50%25' y='50%25' dy='0.36em' text-anchor='middle' pointer-events='none' fill='white' font-size='125' font-family='Helvetica%2c sans-serif'%3eY%3c/text%3e%3c/svg%3e",
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

export const GenericNoAvatarItem = ({ i = 0 }: { i: number }) => (
  <SideBarListItem>
    <SideBarItem href='#'>
      <StatusBullet status='online' />
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
          <SideBarItemContent>No messages yet</SideBarItemContent>
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
      <SideBarItemContent>Calling</SideBarItemContent>
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
          <SideBarFooterContent>Powered by Rocket.Chat</SideBarFooterContent>
          <SideBarFooterContent color='titles-labels'>
            Free edition
          </SideBarFooterContent>
        </SideBarFooter>
      </SideBar>
    </Box>
  ),
];
