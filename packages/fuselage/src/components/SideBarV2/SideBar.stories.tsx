import { action } from '@storybook/addon-actions';
import { Title, Description, Primary, Stories } from '@storybook/addon-docs';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import {
  SideBar,
  SideBarAccordion,
  SideBarAccordionItem,
  SideBarBanner,
  SideBarCollapseGroup,
  SideBarFooterContent,
  SideBarFooterWatermark,
  SideBarItemAction,
  SideBarLink,
  SideBarItemBadge,
  SideBarMedia,
  SideBarMediaTitle,
  SideBarMediaController,
} from '.';
import { IconButton, Icon } from '../..';
import Box from '../Box';
import { SideBarFooter } from './SideBarFooter';
import { Condensed } from './SideBarItem/SideBarItem.stories';
import { GenericCallItem, MenuTemplate } from './helpers';

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
          badge={
            <SideBarItemBadge title={83} children={25} variant='primary' />
          }
          defaultExpanded
        >
          <SideBarLink
            icon='arrow-down-box'
            href='#'
            selected
            badge={
              <SideBarItemBadge title={83} children={12} variant='primary' />
            }
            menu={<MenuTemplate />}
          >
            All
          </SideBarLink>
          <SideBarLink
            icon='user'
            href='#'
            badge={<SideBarItemBadge title={10} children={10} />}
            menu={<MenuTemplate />}
          >
            Assigned to me
          </SideBarLink>
          <SideBarLink
            icon='queue'
            href='#'
            badge={<SideBarItemBadge title={3} children={3} variant='danger' />}
            menu={<MenuTemplate />}
          >
            Unassigned
          </SideBarLink>
          <SideBarLink icon='pause' href='#' menu={<MenuTemplate />}>
            On hold
          </SideBarLink>
        </SideBarAccordionItem>
        <SideBarAccordionItem
          title='Team chat'
          defaultExpanded={true}
          badge={<SideBarItemBadge title={3} children='99+' variant='danger' />}
        >
          <SideBarCollapseGroup
            title='Favorites'
            defaultExpanded
            badge={
              <SideBarItemBadge title={3} children='99+' variant='danger' />
            }
          >
            <Condensed />
          </SideBarCollapseGroup>
          <SideBarCollapseGroup
            title='Teams'
            defaultExpanded
            badge={
              <SideBarItemBadge title={3} children='99+' variant='danger' />
            }
          >
            <Condensed />
            <SideBarItemAction onClick={action('add team')}>
              Add team
            </SideBarItemAction>
          </SideBarCollapseGroup>
          <SideBarCollapseGroup
            title='Discussions'
            defaultExpanded
            badge={
              <SideBarItemBadge title={3} children='99+' variant='danger' />
            }
          >
            <Condensed />
            <SideBarItemAction onClick={action('add team')}>
              Add discussion
            </SideBarItemAction>
          </SideBarCollapseGroup>
        </SideBarAccordionItem>
      </SideBarAccordion>
      <SideBarMedia>
        <SideBarMediaTitle>3 calls in queue</SideBarMediaTitle>
        <SideBarMediaController label='Call'>
          <IconButton icon='user-arrow-right' small aria-label='user-forward' />
          <IconButton icon='mic' small aria-label='mic' />
          <IconButton icon='pause-unfilled' small aria-label='pause' />
        </SideBarMediaController>
        <GenericCallItem is='div' />
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
