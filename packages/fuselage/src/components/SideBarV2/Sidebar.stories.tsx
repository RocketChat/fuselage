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
          >
            All
          </SideBarLink>
          <SideBarLink
            icon='user'
            href='#'
            badge={<SideBarBadge title={10} children={10} />}
          >
            Assigned to me
          </SideBarLink>
          <SideBarLink
            icon='queue'
            href='#'
            badge={<SideBarBadge title={3} children={3} variant='danger' />}
          >
            Unassigned
          </SideBarLink>
          <SideBarLink icon='pause' href='#'>
            On hold
          </SideBarLink>
        </SideBarAccordionItem>
        <SideBarAccordionItem title='Team chat' />
      </SideBarAccordion>
    </SideBar>
  </Box>
);
