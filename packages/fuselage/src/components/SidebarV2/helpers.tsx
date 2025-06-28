import isLokiRunning from '@loki/is-loki-running';
import type { Decorator } from '@storybook/react-webpack5';
import type { ComponentProps, ReactElement } from 'react';

import { Avatar, Box, IconButton, MenuV2 as Menu, MenuItem } from '../..';

import {
  SidebarV2,
  SidebarV2Accordion,
  SidebarV2AccordionItem,
  SidebarV2Actions,
  SidebarV2ButtonGroup,
  SidebarV2CollapseGroup,
  SidebarV2Footer,
  SidebarV2FooterContent,
  SidebarV2Item,
  SidebarV2ItemAvatarWrapper,
  SidebarV2ItemBadge,
  SidebarV2ItemCol,
  SidebarV2ItemContent,
  SidebarV2ItemIcon,
  SidebarV2ItemMenu,
  SidebarV2ItemRow,
  SidebarV2ItemStatusBullet,
  SidebarV2ItemTimestamp,
  SidebarV2ItemTitle,
  SidebarV2ListItem,
} from '.';

const child_count = () => {
  return isLokiRunning() ? 1 : Math.floor(Math.random() * 10) + 1;
};

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
  <SidebarV2ListItem>
    <SidebarV2Item selected={i === 2} href='#'>
      <SidebarV2ItemAvatarWrapper>
        <Avatar size='x20' url={leterAvatarUrls[i % 4]} alt='avatar' />
      </SidebarV2ItemAvatarWrapper>
      <SidebarV2ItemIcon highlighted={i % 2 !== 0} icon='balloons' />
      <SidebarV2ItemTitle unread={i % 2 !== 0}>
        {names[i % 10]}
      </SidebarV2ItemTitle>
      {i % 2 !== 0 && (
        <SidebarV2ItemBadge title='unread messages' children={child_count()} />
      )}
      {i === 0 && (
        <SidebarV2Actions>
          <IconButton aria-label='phone' tiny secondary success icon='phone' />
          <IconButton
            aria-label='phone-off'
            tiny
            secondary
            danger
            icon='phone-off'
          />
        </SidebarV2Actions>
      )}
      <SidebarV2ItemMenu children={<MenuTemplate />} />
    </SidebarV2Item>
  </SidebarV2ListItem>
);

export const GenericNoAvatarItem = ({ i = 0 }: { i: number }) => (
  <SidebarV2ListItem>
    <SidebarV2Item href='#'>
      <SidebarV2ItemStatusBullet status='online' />
      <SidebarV2ItemTitle>{names[i % 10]}</SidebarV2ItemTitle>
      <SidebarV2ItemBadge title='unread messages' children={child_count()} />
      <SidebarV2ItemMenu children={<MenuTemplate />} />
    </SidebarV2Item>
  </SidebarV2ListItem>
);

export const GenericMediumItem = ({ i = 0 }: { i: number }) => (
  <SidebarV2ListItem>
    <SidebarV2Item href='#'>
      <SidebarV2ItemAvatarWrapper>
        <Avatar size='x28' url={leterAvatarUrls[i % 4]} alt='avatar' />
      </SidebarV2ItemAvatarWrapper>
      <SidebarV2ItemIcon icon='team' />
      <SidebarV2ItemTitle>{names[i % 10]}</SidebarV2ItemTitle>
      <SidebarV2ItemBadge title='unread messages' children={child_count()} />
      <SidebarV2ItemMenu children={<MenuTemplate />} />
    </SidebarV2Item>
  </SidebarV2ListItem>
);

export const GenericExtendedItem = ({ i = 0 }: { i: number }) => (
  <SidebarV2ListItem>
    <SidebarV2Item href='#'>
      <SidebarV2ItemAvatarWrapper>
        <Avatar size='x36' url={leterAvatarUrls[i % 4]} alt='avatar' />
      </SidebarV2ItemAvatarWrapper>

      <SidebarV2ItemCol>
        <SidebarV2ItemRow>
          <SidebarV2ItemIcon icon='team' />
          <SidebarV2ItemTitle>{names[i % 10]}</SidebarV2ItemTitle>
          <SidebarV2ItemTimestamp>12:00</SidebarV2ItemTimestamp>
        </SidebarV2ItemRow>

        <SidebarV2ItemRow>
          <SidebarV2ItemContent>No messages yet</SidebarV2ItemContent>
          <SidebarV2ItemBadge
            title='unread messages'
            children={child_count()}
          />
          <SidebarV2ItemMenu children={<MenuTemplate />} />
        </SidebarV2ItemRow>
      </SidebarV2ItemCol>
    </SidebarV2Item>
  </SidebarV2ListItem>
);

export const GenericCallItem = ({
  i = 0,
  ...props
}: { i?: number } & ComponentProps<typeof SidebarV2Item>) => (
  <SidebarV2Item {...props}>
    <SidebarV2ItemAvatarWrapper>
      <Avatar size='x36' url={leterAvatarUrls[i % 4]} alt='avatar' />
    </SidebarV2ItemAvatarWrapper>

    <SidebarV2ItemCol>
      <SidebarV2ItemTitle>{names[i % 10]}</SidebarV2ItemTitle>
      <SidebarV2ItemContent>Calling</SidebarV2ItemContent>
    </SidebarV2ItemCol>

    <SidebarV2ItemRow>
      <SidebarV2ButtonGroup>
        <IconButton
          small
          icon='phone-off'
          secondary
          danger
          aria-label='phone-off'
        />
        <IconButton small icon='phone' secondary success aria-label='phone' />
      </SidebarV2ButtonGroup>
    </SidebarV2ItemRow>
  </SidebarV2Item>
);

export const decorators: Decorator[] = [
  (fn): ReactElement => (
    <Box h='90vh' w='x280'>
      <SidebarV2>
        <SidebarV2Accordion>
          <SidebarV2AccordionItem
            title='Label'
            defaultExpanded
            badge={<SidebarV2ItemBadge children='99+' variant='danger' />}
          >
            <SidebarV2CollapseGroup
              title='Label'
              defaultExpanded
              badge={<SidebarV2ItemBadge children='99+' variant='danger' />}
            >
              {fn()}
            </SidebarV2CollapseGroup>
          </SidebarV2AccordionItem>
        </SidebarV2Accordion>
        <SidebarV2Footer>
          <SidebarV2FooterContent>
            Powered by Rocket.Chat
          </SidebarV2FooterContent>
          <SidebarV2FooterContent color='titles-labels'>
            Free edition
          </SidebarV2FooterContent>
        </SidebarV2Footer>
      </SidebarV2>
    </Box>
  ),
];
