import { Title, Description, Primary, Stories } from '@storybook/addon-docs';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import {
  SideBar,
  SideBarAccordion,
  SideBarAccordionItem,
  SideBarLink,
} from '.';
import Box from '../Box';
import { MenuV2 as Menu, MenuItem } from '../Menu';
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
  <Box h='100vh'>
    <SideBar>
      <SideBarAccordion>
        <SideBarAccordionItem
          title='Omnichannel'
          badgeCount={10}
          defaultExpanded={true}
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
        <SideBarAccordionItem title='Team chat' />
      </SideBarAccordion>
    </SideBar>
  </Box>
);
