import { Title, Description, Primary, Stories } from '@storybook/addon-docs';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { SidebarSection, TopBarToolBox, SidebarTopBar, Avatar } from '../..';

export default {
  title: 'Sidebar/TopBar',
  component: SidebarTopBar,
  parameters: {
    docs: {
      description: {
        component: 'Sidebar TopBar and ToolBox.',
      },
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <Stories title='' />
        </>
      ),
    },
  },
} as ComponentMeta<typeof SidebarTopBar>;

export const Default: ComponentStory<typeof SidebarTopBar> = () => (
  <>
    <SidebarSection>
      <Avatar
        size={SidebarTopBar.Avatar.size}
        url={
          'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcEBgIDBQj/xAAuEAACAQQAAwcEAQUAAAAAAAABAgMABAUREiExBhMUIkFRYQcWcYGhFTJSgpH/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQBAP/EAB4RAAIBBQEBAQAAAAAAAAAAAAABAgMREiExE0HR/9oADAMBAAIRAxEAPwBuXuIkhBuMe5ib/AHQP49q4L3mLitryTLTSpOiHQI5k/HzXa/qbFOEudVTu1dumWvcTaNCZYZ7vU6g6LxqjOU/24dfs1Ouh9FnkMpd3Reeyx83hAxZZEhkdV9/MBrX71WGPvJcqrJBGveKATtuXXqNU0pu02bTHXD/AGvJAluyxxRd6F4x00o+NdKoVrjbzJdvVe1t5cVLc2ck8qjnohgpPtz2v7G6JtPQ2VJwjlcw+37mchpnK6GtIuv5NFWeTsLNPvxWTvpfjvOEfwKKzEVkSct2vscS/BIzSN0YRkeX81UpPqO8masJETu7OOccY4dswYFQeftv096XV5knuJGdm2T1+agvMXj8jEaHX905QihabvcbuS7X566mLWLwSY8PuRnk/u4eZ0deTl71Ef6hY+0yM88TzeNZY4luYwpVYyduOfrvhPTnr0pXSX9y5mCsyJMdyxxvwq599em+taItqCSNc90ChvZRUruUcT0JiO18Elpk7t8v41LWzacxkBSuvjQ/FFJayjDWrCTepAQ2vUH0oo/Jk3ovpwJJeVCP5CN+lFFaaMqy+nAyuChvrTI2kN9JAsi2ZOy4IBHMnkSCP+iqBexSWdxLazoUljJVlPUH2oorkV10pRc7b1zXb/hZOzuJvM86QWEXeELxOzHSIPcmiiiunVlF2RNTpRkrs//Z'
        }
      />
      <SidebarTopBar.Actions>
        <SidebarTopBar.Action icon='home' />
        <SidebarTopBar.Action icon='magnifier' />
        <SidebarTopBar.Action icon='globe' />
        <SidebarTopBar.Action icon='sort' />
        <SidebarTopBar.Action icon='edit-rounded' />
      </SidebarTopBar.Actions>
    </SidebarSection>
    <TopBarToolBox>
      <SidebarTopBar.Title>Title</SidebarTopBar.Title>
      <SidebarTopBar.Actions>
        <SidebarTopBar.Action success icon='phone' />
        <SidebarTopBar.Action icon='message-disabled' />
      </SidebarTopBar.Actions>
    </TopBarToolBox>
    <TopBarToolBox>
      <SidebarTopBar.Title>
        Long Title Long Title Long Title Long Title Long Title Long Title Long
        Title Long Title Long Title Long Title Long Title Long Title Long Title
        Long Title Long Title Long Title Long Title Long Title Long Title Long
        Title Long Title
      </SidebarTopBar.Title>
      <SidebarTopBar.Actions>
        <SidebarTopBar.Action icon='dialpad' />
        <SidebarTopBar.Action success icon='phone' />
        <SidebarTopBar.Action danger icon='phone-off' />
        <SidebarTopBar.Action icon='message' />
        <SidebarTopBar.Action icon='contact' />
      </SidebarTopBar.Actions>
    </TopBarToolBox>
  </>
);
