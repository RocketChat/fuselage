import type { Decorator } from '@storybook/react';
import type { ComponentProps, ReactElement } from 'react';

import {
  Sidebar,
  SidebarAccordion,
  SidebarAccordionItem,
  SidebarActions,
  SidebarButtonGroup,
  SidebarCollapseGroup,
  SidebarFooter,
  SidebarFooterContent,
  SidebarItem,
  SidebarItemAvatarWrapper,
  SidebarItemBadge,
  SidebarItemCol,
  SidebarItemContent,
  SidebarItemIcon,
  SidebarItemMenu,
  SidebarItemRow,
  SidebarItemStatusBullet,
  SidebarItemTimestamp,
  SidebarItemTitle,
  SidebarListItem,
} from '.';
import { Avatar, Box, IconButton, MenuV2 as Menu, MenuItem } from '../..';

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
  'Morgan Freeman looooooooooong looooooooooong looooooooooong name',
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
  <SidebarListItem>
    <SidebarItem selected={i === 2} href='#'>
      <SidebarItemAvatarWrapper>
        <Avatar size='x20' url={leterAvatarUrls[i % 4]} alt='avatar' />
      </SidebarItemAvatarWrapper>
      <SidebarItemIcon highlighted={i % 2 !== 0} icon='balloons' />
      <SidebarItemTitle unread={i % 2 !== 0}>{names[i % 10]}</SidebarItemTitle>
      {i % 2 !== 0 && (
        <SidebarItemBadge
          title='unread messages'
          children={Math.floor(Math.random() * 10) + 1}
        />
      )}
      {i === 0 && (
        <SidebarActions>
          <IconButton aria-label='phone' tiny secondary success icon='phone' />
          <IconButton
            aria-label='phone-off'
            tiny
            secondary
            danger
            icon='phone-off'
          />
        </SidebarActions>
      )}
      <SidebarItemMenu children={<MenuTemplate />} />
    </SidebarItem>
  </SidebarListItem>
);

export const GenericNoAvatarItem = ({ i = 0 }: { i: number }) => (
  <SidebarListItem>
    <SidebarItem href='#'>
      <SidebarItemStatusBullet status='online' />
      <SidebarItemTitle>{names[i % 10]}</SidebarItemTitle>
      <SidebarItemBadge
        title='unread messages'
        children={Math.floor(Math.random() * 10) + 1}
      />
      <SidebarItemMenu children={<MenuTemplate />} />
    </SidebarItem>
  </SidebarListItem>
);

export const GenericMediumItem = ({ i = 0 }: { i: number }) => (
  <SidebarListItem>
    <SidebarItem href='#'>
      <SidebarItemAvatarWrapper>
        <Avatar size='x28' url={leterAvatarUrls[i % 4]} alt='avatar' />
      </SidebarItemAvatarWrapper>
      <SidebarItemIcon icon='team' />
      <SidebarItemTitle>{names[i % 10]}</SidebarItemTitle>
      <SidebarItemBadge
        title='unread messages'
        children={Math.floor(Math.random() * 10) + 1}
      />
      <SidebarItemMenu children={<MenuTemplate />} />
    </SidebarItem>
  </SidebarListItem>
);

export const GenericExtendedItem = ({ i = 0 }: { i: number }) => (
  <SidebarListItem>
    <SidebarItem href='#'>
      <SidebarItemAvatarWrapper>
        <Avatar size='x36' url={leterAvatarUrls[i % 4]} alt='avatar' />
      </SidebarItemAvatarWrapper>

      <SidebarItemCol>
        <SidebarItemRow>
          <SidebarItemIcon icon='team' />
          <SidebarItemTitle>{names[i % 10]}</SidebarItemTitle>
          <SidebarItemTimestamp>12:00</SidebarItemTimestamp>
        </SidebarItemRow>

        <SidebarItemRow>
          <SidebarItemContent>No messages yet</SidebarItemContent>
          <SidebarItemBadge
            title='unread messages'
            children={Math.floor(Math.random() * 10) + 1}
          />
          <SidebarItemMenu children={<MenuTemplate />} />
        </SidebarItemRow>
      </SidebarItemCol>
    </SidebarItem>
  </SidebarListItem>
);

export const GenericCallItem = ({
  i = 0,
  ...props
}: { i?: number } & ComponentProps<typeof SidebarItem>) => (
  <SidebarItem {...props}>
    <SidebarItemAvatarWrapper>
      <Avatar size='x36' url={leterAvatarUrls[i % 4]} alt='avatar' />
    </SidebarItemAvatarWrapper>

    <SidebarItemCol>
      <SidebarItemTitle>{names[i % 10]}</SidebarItemTitle>
      <SidebarItemContent>Calling</SidebarItemContent>
    </SidebarItemCol>

    <SidebarItemRow>
      <SidebarButtonGroup>
        <IconButton
          small
          icon='phone-off'
          secondary
          danger
          aria-label='phone-off'
        />
        <IconButton small icon='phone' secondary success aria-label='phone' />
      </SidebarButtonGroup>
    </SidebarItemRow>
  </SidebarItem>
);

export const decorators: Decorator[] = [
  (fn): ReactElement => (
    <Box h='90vh' w='x280'>
      <Sidebar>
        <SidebarAccordion>
          <SidebarAccordionItem
            title='Label'
            defaultExpanded
            badge={<SidebarItemBadge children='99+' variant='danger' />}
          >
            <SidebarCollapseGroup
              title='Label'
              defaultExpanded
              badge={<SidebarItemBadge children='99+' variant='danger' />}
            >
              {fn()}
            </SidebarCollapseGroup>
          </SidebarAccordionItem>
        </SidebarAccordion>
        <SidebarFooter>
          <SidebarFooterContent>Powered by Rocket.Chat</SidebarFooterContent>
          <SidebarFooterContent color='titles-labels'>
            Free edition
          </SidebarFooterContent>
        </SidebarFooter>
      </Sidebar>
    </Box>
  ),
];
