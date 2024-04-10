import { action } from '@storybook/addon-actions';
import { Title, Description, Primary, Stories } from '@storybook/addon-docs';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import type { ComponentProps } from 'react';
import React from 'react';

import {
  SideBar,
  SideBarAccordion,
  SideBarAccordionItem,
  SideBarBanner,
  SideBarCollapseGroup,
  SideBarFooterContent,
  SideBarFooterWatermark,
  SideBarItem,
  SideBarItemAction,
  SideBarLink,
  SideBarItemAvatarWrapper,
  SideBarItemTitle,
  SideBarItemIcon,
  SideBarItemBadge,
  SideBarItemMenu,
  SideBarItemRow,
  SideBarItemCol,
  SideBarItemTimestamp,
  SideBarMedia,
  SideBarMediaTitle,
  SideBarMediaController,
  SideBarButtonGroup,
} from '.';
import { Avatar } from '../Avatar';
import Box from '../Box';
import { IconButton } from '../Button';
import { Icon } from '../Icon';
import { MenuV2 as Menu, MenuItem } from '../Menu';
import { leterAvatarUrls } from '../Message/helpers';
import { SideBarFooter } from './SideBarFooter/SideBarFooter';
import { SideBarItemSubtitle } from './SideBarItem/SideBarItemSubtitle';

export default {
  title: 'Navigation/SideBar',
  component: SideBar,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <Stories title={''} />
        </>
      ),
    },
  },
} as ComponentMeta<typeof SideBar>;

const menuTemplate = (
  <Menu mini aria-label='Options' title='Options'>
    <MenuItem key='hide'>Hide</MenuItem>
    <MenuItem key='discussion'>Mark unread</MenuItem>
    <MenuItem key='unfavorite'>Unfavorite</MenuItem>
  </Menu>
);

const GenericCondensedItem = (props: ComponentProps<typeof SideBarItem>) => (
  <SideBarItem {...props}>
    <SideBarItemAvatarWrapper>
      <Avatar size='x20' url={leterAvatarUrls[0]} alt='avatar' />
    </SideBarItemAvatarWrapper>
    <SideBarItemIcon name='team' />
    <SideBarItemTitle>Marvin Black</SideBarItemTitle>
    <SideBarItemBadge children='10' />
    <SideBarItemMenu children={menuTemplate} />
  </SideBarItem>
);

const GenericMediumItem = (props: ComponentProps<typeof SideBarItem>) => (
  <SideBarItem {...props}>
    <SideBarItemAvatarWrapper>
      <Avatar size='x28' url={leterAvatarUrls[0]} alt='avatar' />
    </SideBarItemAvatarWrapper>
    <SideBarItemIcon name='team' />
    <SideBarItemTitle>Marvin Black</SideBarItemTitle>
    <SideBarItemBadge children='10' />
    <SideBarItemMenu children={menuTemplate} />
  </SideBarItem>
);

const GenericExtendedItem = (props: ComponentProps<typeof SideBarItem>) => (
  <SideBarItem {...props}>
    <SideBarItemAvatarWrapper>
      <Avatar size='x36' url={leterAvatarUrls[0]} alt='avatar' />
    </SideBarItemAvatarWrapper>

    <SideBarItemCol>
      <SideBarItemRow>
        <SideBarItemIcon name='team' />
        <SideBarItemTitle>Marvin Black</SideBarItemTitle>
        <SideBarItemTimestamp>12:00</SideBarItemTimestamp>
      </SideBarItemRow>

      <SideBarItemRow>
        <SideBarItemSubtitle>No messages yet</SideBarItemSubtitle>
        <SideBarItemBadge children='10' />
        <SideBarItemMenu children={menuTemplate} />
      </SideBarItemRow>
    </SideBarItemCol>
  </SideBarItem>
);

const GenericCallItem = (props: ComponentProps<typeof SideBarItem>) => (
  <SideBarItem {...props}>
    <SideBarItemAvatarWrapper>
      <Avatar size='x36' url={leterAvatarUrls[0]} alt='avatar' />
    </SideBarItemAvatarWrapper>

    <SideBarItemCol>
      <SideBarItemTitle>Esther Miles</SideBarItemTitle>
      <SideBarItemSubtitle>00:05</SideBarItemSubtitle>
    </SideBarItemCol>

    <SideBarItemRow>
      <SideBarButtonGroup>
        <IconButton small icon='phone-off' secondary danger />
        <IconButton small icon='phone' secondary success />
      </SideBarButtonGroup>
    </SideBarItemRow>
  </SideBarItem>
);

export const Default: ComponentStory<typeof SideBar> = () => (
  <Box>
    <SideBar>
      <SideBarBanner
        title='You’ve reached the limit active contacts this month'
        link='Learn more'
        onClick={action('click')}
        addon={<Icon name='warning' color='danger' size='x24' />}
      />
      <SideBarAccordion>
        <SideBarAccordionItem
          title='Omnichannel'
          badge={<SideBarItemBadge title={83} children={96} variant='danger' />}
        >
          <SideBarLink
            icon='arrow-down-box'
            href='#'
            selected
            badge={
              <SideBarItemBadge title={83} children={83} variant='primary' />
            }
            menu={menuTemplate}
          >
            All
          </SideBarLink>
          <SideBarLink
            icon='user'
            href='#'
            badge={<SideBarItemBadge title={10} children={10} />}
            menu={menuTemplate}
          >
            Assigned to me
          </SideBarLink>
          <SideBarLink
            icon='queue'
            href='#'
            badge={<SideBarItemBadge title={3} children={3} variant='danger' />}
            menu={menuTemplate}
          >
            Unassigned
          </SideBarLink>
          <SideBarLink icon='pause' href='#' menu={menuTemplate}>
            On hold
          </SideBarLink>
        </SideBarAccordionItem>
        <SideBarAccordionItem title='Team chat' defaultExpanded={false}>
          <SideBarCollapseGroup title='Favorites' defaultExpanded>
            <GenericCondensedItem />
            <GenericCondensedItem />
            <GenericCondensedItem />
            <GenericCondensedItem />
          </SideBarCollapseGroup>
          <SideBarCollapseGroup title='Teams' defaultExpanded>
            <GenericCondensedItem />
            <GenericCondensedItem />
            <GenericCondensedItem />
            <GenericCondensedItem />
            <SideBarItemAction onClick={action('add team')}>
              Add team
            </SideBarItemAction>
          </SideBarCollapseGroup>
          <SideBarCollapseGroup title='Discussions' defaultExpanded>
            <GenericCondensedItem />
            <GenericCondensedItem />
            <GenericCondensedItem />
            <GenericCondensedItem />
            <GenericCondensedItem />
            <SideBarItemAction onClick={action('add team')}>
              Add discussion
            </SideBarItemAction>
          </SideBarCollapseGroup>
        </SideBarAccordionItem>
      </SideBarAccordion>
      <SideBarMedia>
        <SideBarMediaTitle>3 calls in queue</SideBarMediaTitle>
        <SideBarMediaController label='Call'>
          <IconButton icon='user-arrow-right' small />
          <IconButton icon='mic' small />
          <IconButton icon='pause-unfilled' small />
        </SideBarMediaController>
        <GenericCallItem />
      </SideBarMedia>
      <SideBarFooter>
        <SideBarFooterWatermark>
          <SideBarFooterContent>Powered by Rocket.Chat</SideBarFooterContent>
          <SideBarFooterContent secondary>Free edition</SideBarFooterContent>
        </SideBarFooterWatermark>
      </SideBarFooter>
    </SideBar>
  </Box>
);

export const Condensed: ComponentStory<typeof SideBar> = () => (
  <Box>
    <SideBar>
      <SideBarAccordion>
        <SideBarAccordionItem title='Team chat' defaultExpanded>
          <SideBarCollapseGroup title='Favorites' defaultExpanded>
            <GenericCondensedItem />
            <GenericCondensedItem />
            <GenericCondensedItem />
            <GenericCondensedItem />
            <GenericCondensedItem />
            <GenericCondensedItem />
            <GenericCondensedItem />
            <GenericCondensedItem />
          </SideBarCollapseGroup>
        </SideBarAccordionItem>
      </SideBarAccordion>
      <SideBarFooter>
        <SideBarFooterWatermark>
          <SideBarFooterContent>Powered by Rocket.Chat</SideBarFooterContent>
          <SideBarFooterContent secondary>Free edition</SideBarFooterContent>
        </SideBarFooterWatermark>
      </SideBarFooter>
    </SideBar>
  </Box>
);

export const Medium: ComponentStory<typeof SideBar> = () => (
  <Box>
    <SideBar>
      <SideBarAccordion>
        <SideBarAccordionItem title='Team chat' defaultExpanded>
          <SideBarCollapseGroup title='Favorites' defaultExpanded>
            <GenericMediumItem />
            <GenericMediumItem />
            <GenericMediumItem />
            <GenericMediumItem />
            <GenericMediumItem />
          </SideBarCollapseGroup>
        </SideBarAccordionItem>
      </SideBarAccordion>
      <SideBarFooter>
        <SideBarFooterWatermark>
          <SideBarFooterContent>Powered by Rocket.Chat</SideBarFooterContent>
          <SideBarFooterContent secondary>Free edition</SideBarFooterContent>
        </SideBarFooterWatermark>
      </SideBarFooter>
    </SideBar>
  </Box>
);

export const Extended: ComponentStory<typeof SideBar> = () => (
  <Box>
    <SideBar>
      <SideBarAccordion>
        <SideBarAccordionItem title='Team chat' defaultExpanded>
          <SideBarCollapseGroup title='Favorites' defaultExpanded>
            <GenericExtendedItem />
            <GenericExtendedItem />
            <GenericExtendedItem />
            <GenericExtendedItem />
            <GenericExtendedItem />
            <GenericCallItem />
          </SideBarCollapseGroup>
        </SideBarAccordionItem>
      </SideBarAccordion>
      <SideBarFooter>
        <SideBarFooterWatermark>
          <SideBarFooterContent>Powered by Rocket.Chat</SideBarFooterContent>
          <SideBarFooterContent secondary>Free edition</SideBarFooterContent>
        </SideBarFooterWatermark>
      </SideBarFooter>
    </SideBar>
  </Box>
);
