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
  SideBarItemAction,
  SideBarLink,
  SideBarItemBadge,
  SideBarMedia,
  SideBarMediaTitle,
  SideBarMediaController,
  SideBarListItem,
  SideBarSection,
} from '.';
import { IconButton, Icon, TextInput } from '../..';
import Box from '../Box';
import { SideBarFooter } from './SideBarFooter';
import { Condensed } from './SideBarItem/SideBarItem.stories';
import { GenericCallItem, GenericNoAvatarItem, MenuTemplate } from './helpers';

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

export const Default: ComponentStory<typeof SideBar> = (props) => (
  <Box h='90vh'>
    <SideBar {...props}>
      <SideBarBanner
        title='You’ve reached the limit active contacts this month'
        linkText='Learn more'
        linkProps={{ href: '#' }}
        onClick={action('click')}
        addon={<Icon name='warning' color='danger' size='x24' />}
      />
      <SideBarSection>
        <TextInput
          addon={<Icon name='magnifier' size='x20' />}
          placeholder='Search'
        />
        <IconButton icon='sort' title='Sort' medium />
      </SideBarSection>
      <SideBarAccordion>
        <SideBarAccordionItem
          title='Omnichannel'
          badge={
            <SideBarItemBadge
              title='25 unred messages'
              children={25}
              variant='primary'
            />
          }
          defaultExpanded
        >
          <SideBarLink
            icon='arrow-down-box'
            href='#'
            selected
            badge={
              <SideBarItemBadge
                title='12 unread messages'
                children={12}
                variant='primary'
              />
            }
            menu={<MenuTemplate />}
          >
            All
          </SideBarLink>
          <SideBarLink
            icon='user'
            href='#'
            badge={
              <SideBarItemBadge title='10 unread messages' children={10} />
            }
            menu={<MenuTemplate />}
          >
            Assigned to me
          </SideBarLink>
          <SideBarLink
            icon='queue'
            href='#'
            badge={
              <SideBarItemBadge
                title='3 unread messages'
                children={3}
                variant='danger'
              />
            }
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
          badge={
            <SideBarItemBadge
              title='99+ unread messages'
              children='99+'
              variant='danger'
            />
          }
        >
          <SideBarCollapseGroup
            title='Favorites'
            defaultExpanded
            badge={
              <SideBarItemBadge
                title='99+ unread messages'
                children='99+'
                variant='danger'
              />
            }
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <GenericNoAvatarItem key={i} i={i} />
            ))}
          </SideBarCollapseGroup>
          <SideBarCollapseGroup
            title='Teams'
            defaultExpanded
            badge={
              <SideBarItemBadge
                title='99+ unread messages'
                children='99+'
                variant='danger'
              />
            }
          >
            <Condensed />
            <SideBarListItem>
              <SideBarItemAction onClick={action('add team')}>
                Add team
              </SideBarItemAction>
            </SideBarListItem>
          </SideBarCollapseGroup>
          <SideBarCollapseGroup
            title='Discussions'
            defaultExpanded
            badge={
              <SideBarItemBadge
                title='99+ unread messages'
                children='99+'
                variant='danger'
              />
            }
          >
            <Condensed />
            <SideBarListItem>
              <SideBarItemAction onClick={action('add team')}>
                Add discussion
              </SideBarItemAction>
            </SideBarListItem>
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
        <SideBarFooterContent>Powered by Rocket.Chat</SideBarFooterContent>
        <SideBarFooterContent color='titles-labels'>
          Free edition
        </SideBarFooterContent>
      </SideBarFooter>
    </SideBar>
  </Box>
);

export const CollapseOnMouseOver: ComponentStory<typeof SideBar> = () => (
  <Default collapsed />
);
