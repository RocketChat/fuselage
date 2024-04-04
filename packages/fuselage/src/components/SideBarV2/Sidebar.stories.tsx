import { Title, Description, Primary, Stories } from '@storybook/addon-docs';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import {
  SideBar,
  SideBarAccordion,
  SideBarAccordionItem,
  SideBarCollapseGroup,
  SideBarItem,
  SideBarItemAction,
  SideBarLink,
} from '.';
import { Avatar } from '../Avatar';
import Box from '../Box';
import { MenuV2 as Menu, MenuItem } from '../Menu';
import { leterAvatarUrls } from '../Message/helpers';
import { SideBarBadge } from './SideBarBadge';

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
export const Default: ComponentStory<typeof SideBar> = () => (
  <Box>
    <SideBar>
      <SideBarAccordion>
        <SideBarAccordionItem
          title='Omnichannel'
          badge={<SideBarBadge title={83} children={96} variant='danger' />}
        >
          <SideBarLink
            icon='arrow-down-box'
            href='#'
            selected
            badge={<SideBarBadge title={83} children={83} variant='primary' />}
            menu={menuTemplate}
          >
            All
          </SideBarLink>
          <SideBarLink
            icon='user'
            href='#'
            badge={<SideBarBadge title={10} children={10} />}
            menu={menuTemplate}
          >
            Assigned to me
          </SideBarLink>
          <SideBarLink
            icon='queue'
            href='#'
            badge={<SideBarBadge title={3} children={3} variant='danger' />}
            menu={menuTemplate}
          >
            Unassigned
          </SideBarLink>
          <SideBarLink icon='pause' href='#' menu={menuTemplate}>
            On hold
          </SideBarLink>
        </SideBarAccordionItem>
        <SideBarAccordionItem title='Team chat' defaultExpanded>
          <SideBarCollapseGroup title='Favorites' defaultExpanded>
            <SideBarItem
              children='Tech news'
              icon='team'
              avatar={<Avatar size='x18' url={leterAvatarUrls[0]} />}
              menu={menuTemplate}
            />
            <SideBarItem
              children='Marvin Black'
              icon='balloon'
              avatar={<Avatar size='x18' url={leterAvatarUrls[1]} />}
              menu={menuTemplate}
            />
            <SideBarItem
              children='Eng news'
              icon='hashtag'
              avatar={<Avatar size='x18' url={leterAvatarUrls[2]} />}
              menu={menuTemplate}
            />
            <SideBarItem
              children='Important'
              icon='team'
              avatar={<Avatar size='x18' url={leterAvatarUrls[3]} />}
              menu={menuTemplate}
            />
          </SideBarCollapseGroup>
          <SideBarCollapseGroup title='Teams' defaultExpanded>
            <SideBarItem
              children='Tech news'
              icon='balloons'
              avatar={<Avatar size='x18' url={leterAvatarUrls[0]} />}
              menu={menuTemplate}
            />
            {Array.from(new Array(4)).map((_, i) => (
              <SideBarItem
                key={i}
                children='Private notes'
                icon='balloons'
                avatar={<Avatar size='x18' url={leterAvatarUrls[1]} />}
                menu={menuTemplate}
              />
            ))}
            <SideBarItemAction onClick={() => console.log('add team')}>
              Add team
            </SideBarItemAction>
          </SideBarCollapseGroup>
          <SideBarCollapseGroup title='Discussions' defaultExpanded>
            <SideBarItem
              children='Tech news'
              icon='balloons'
              avatar={<Avatar size='x18' url={leterAvatarUrls[0]} />}
              menu={menuTemplate}
            />
            {Array.from(new Array(18)).map((_, i) => (
              <SideBarItem
                key={i}
                children='Private notes'
                icon='balloons'
                avatar={<Avatar size='x18' url={leterAvatarUrls[1]} />}
                menu={menuTemplate}
              />
            ))}
            <SideBarItemAction onClick={() => console.log('add team')}>
              Add discussion
            </SideBarItemAction>
          </SideBarCollapseGroup>
        </SideBarAccordionItem>
      </SideBarAccordion>
    </SideBar>
  </Box>
);
