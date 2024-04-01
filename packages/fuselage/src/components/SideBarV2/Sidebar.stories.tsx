import { Title, Description, Primary, Stories } from '@storybook/addon-docs';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { SideBar, SideBarAccordion, SideBarAccordionItem } from '.';
import Box from '../Box';

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
        <SideBarAccordionItem title='Omnichannel' badgeCount={10} />
        <SideBarAccordionItem title='Team chat' />
      </SideBarAccordion>
    </SideBar>
  </Box>
);
