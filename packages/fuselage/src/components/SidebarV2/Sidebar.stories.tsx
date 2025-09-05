import isLokiRunning from '@loki/is-loki-running';
import type { Meta, StoryFn } from '@storybook/react-webpack5';
import { action } from 'storybook/actions';

import { IconButton, TextInput, Icon, Box } from '../..';

import {
  SidebarV2 as Sidebar,
  SidebarV2Accordion as SidebarAccordion,
  SidebarV2AccordionItem as SidebarAccordionItem,
  SidebarV2Banner as SidebarBanner,
  SidebarV2CollapseGroup as SidebarCollapseGroup,
  SidebarV2FooterContent as SidebarFooterContent,
  SidebarV2ItemAction as SidebarItemAction,
  SidebarV2Link as SidebarLink,
  SidebarV2ItemBadge as SidebarItemBadge,
  SidebarV2Media as SidebarMedia,
  SidebarV2MediaTitle as SidebarMediaTitle,
  SidebarV2MediaController as SidebarMediaController,
  SidebarV2ListItem as SidebarListItem,
  SidebarV2Section as SidebarSection,
  SidebarV2Footer as SidebarFooter,
} from '.';
import { Condensed } from './SidebarItem/SidebarItem.stories';
import { GenericNoAvatarItem, MenuTemplate } from './helpers';

export default {
  title: 'Navigation/SidebarV2',
  component: Sidebar,
} as Meta<typeof Sidebar>;

const getBoxHeight = () => (isLokiRunning() ? '210vh' : '90vh');

export const Default: StoryFn<typeof Sidebar> = (props) => (
  <Box h={getBoxHeight()} w='x280'>
    <Sidebar {...props}>
      <SidebarBanner
        title='You’ve reached the limit active contacts this month'
        linkText='Learn more'
        linkProps={{ href: '#' }}
        onClick={action('click')}
        addon={<Icon name='warning' color='danger' size='x24' />}
      />
      <SidebarSection>
        <TextInput
          addon={<Icon name='magnifier' size='x20' />}
          small
          placeholder='Search'
        />
        <IconButton icon='sort' title='Sort' medium />
      </SidebarSection>
      <SidebarAccordion>
        <SidebarAccordionItem
          title='Omnichannel'
          badge={
            <SidebarItemBadge
              title='25 unred messages'
              children={25}
              variant='primary'
            />
          }
          defaultExpanded
        >
          <SidebarLink
            icon='arrow-down-box'
            href='#'
            selected
            badge={
              <SidebarItemBadge
                title='12 unread messages'
                children={12}
                variant='primary'
              />
            }
            menu={<MenuTemplate />}
          >
            All
          </SidebarLink>
          <SidebarLink
            icon='user'
            href='#'
            badge={
              <SidebarItemBadge title='10 unread messages' children={10} />
            }
            menu={<MenuTemplate />}
          >
            Assigned to me
          </SidebarLink>
          <SidebarLink
            icon='queue'
            href='#'
            badge={
              <SidebarItemBadge
                title='3 unread messages'
                children={3}
                variant='danger'
              />
            }
            menu={<MenuTemplate />}
          >
            Unassigned
          </SidebarLink>
          <SidebarLink icon='pause' href='#' menu={<MenuTemplate />}>
            On hold
          </SidebarLink>
        </SidebarAccordionItem>
        <SidebarAccordionItem
          title='Team chat'
          defaultExpanded={true}
          badge={
            <SidebarItemBadge
              title='99+ unread messages'
              children='99+'
              variant='danger'
            />
          }
        >
          <SidebarCollapseGroup
            title='Favorites'
            defaultExpanded
            badge={
              <SidebarItemBadge
                title='99+ unread messages'
                children='99+'
                variant='danger'
              />
            }
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <GenericNoAvatarItem key={i} i={i} />
            ))}
          </SidebarCollapseGroup>
          <SidebarCollapseGroup
            title='Teams'
            defaultExpanded
            badge={
              <SidebarItemBadge
                title='99+ unread messages'
                children='99+'
                variant='danger'
              />
            }
          >
            <Condensed />
            <SidebarListItem>
              <SidebarItemAction onClick={action('add team')}>
                Add team
              </SidebarItemAction>
            </SidebarListItem>
          </SidebarCollapseGroup>
          <SidebarCollapseGroup
            title='Discussions'
            defaultExpanded
            badge={
              <SidebarItemBadge
                title='99+ unread messages'
                children='99+'
                variant='danger'
              />
            }
          >
            <Condensed />
            <SidebarListItem>
              <SidebarItemAction onClick={action('add team')}>
                Add discussion
              </SidebarItemAction>
            </SidebarListItem>
          </SidebarCollapseGroup>
        </SidebarAccordionItem>
      </SidebarAccordion>
      <SidebarMedia>
        <SidebarMediaTitle>3 calls in queue</SidebarMediaTitle>
        <SidebarMediaController label='Call'>
          <IconButton icon='user-arrow-right' small aria-label='user-forward' />
          <IconButton icon='mic' small aria-label='mic' />
          <IconButton icon='pause-unfilled' small aria-label='pause' />
        </SidebarMediaController>
        {/* <GenericCallItem is='div' /> */}
      </SidebarMedia>
      <SidebarFooter>
        <SidebarFooterContent>Powered by Rocket.Chat</SidebarFooterContent>
        <SidebarFooterContent color='titles-labels'>
          Free edition
        </SidebarFooterContent>
      </SidebarFooter>
    </Sidebar>
  </Box>
);
