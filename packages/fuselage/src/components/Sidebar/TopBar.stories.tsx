import { Title, Description, Primary, Stories } from '@storybook/addon-docs';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { SidebarSection } from '.';
import { TopBarToolBox } from '..';
import { Avatar } from '../..';
import TopBar from './TopBar';

export default {
  title: 'Sidebar/TopBar',
  component: TopBar,
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
          <Stories title={''} />
        </>
      ),
    },
  },
} as ComponentMeta<typeof TopBar>;

export const Default: ComponentStory<typeof TopBar> = () => (
  <>
    <SidebarSection>
      <Avatar
        size={TopBar.Avatar.size}
        url={
          'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcEBgIDBQj/xAAuEAACAQQAAwcEAQUAAAAAAAABAgMABAUREiExBhMUIkFRYQcWcYGhFTJSgpH/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQBAP/EAB4RAAIBBQEBAQAAAAAAAAAAAAABAgMREiExE0HR/9oADAMBAAIRAxEAPwBuXuIkhBuMe5ib/AHQP49q4L3mLitryTLTSpOiHQI5k/HzXa/qbFOEudVTu1dumWvcTaNCZYZ7vU6g6LxqjOU/24dfs1Ouh9FnkMpd3Reeyx83hAxZZEhkdV9/MBrX71WGPvJcqrJBGveKATtuXXqNU0pu02bTHXD/AGvJAluyxxRd6F4x00o+NdKoVrjbzJdvVe1t5cVLc2ck8qjnohgpPtz2v7G6JtPQ2VJwjlcw+37mchpnK6GtIuv5NFWeTsLNPvxWTvpfjvOEfwKKzEVkSct2vscS/BIzSN0YRkeX81UpPqO8masJETu7OOccY4dswYFQeftv096XV5knuJGdm2T1+agvMXj8jEaHX905QihabvcbuS7X566mLWLwSY8PuRnk/u4eZ0deTl71Ef6hY+0yM88TzeNZY4luYwpVYyduOfrvhPTnr0pXSX9y5mCsyJMdyxxvwq599em+taItqCSNc90ChvZRUruUcT0JiO18Elpk7t8v41LWzacxkBSuvjQ/FFJayjDWrCTepAQ2vUH0oo/Jk3ovpwJJeVCP5CN+lFFaaMqy+nAyuChvrTI2kN9JAsi2ZOy4IBHMnkSCP+iqBexSWdxLazoUljJVlPUH2oorkV10pRc7b1zXb/hZOzuJvM86QWEXeELxOzHSIPcmiiiunVlF2RNTpRkrs//Z'
        }
        {...Avatar}
      />
      <TopBar.Actions>
        <TopBar.Action icon='home' />
        <TopBar.Action icon='magnifier' />
        <TopBar.Action icon='globe' />
        <TopBar.Action icon='sort' />
        <TopBar.Action icon='edit-rounded' />
      </TopBar.Actions>
    </SidebarSection>
    <TopBarToolBox>
      <TopBar.Title>Title</TopBar.Title>
      <TopBar.Actions>
        <TopBar.Action success icon='phone' />
        <TopBar.Action icon='message-disabled' />
      </TopBar.Actions>
    </TopBarToolBox>
    <TopBarToolBox>
      <TopBar.Title>
        Long Title Long Title Long Title Long Title Long Title Long Title Long
        Title Long Title Long Title Long Title Long Title Long Title Long Title
        Long Title Long Title Long Title Long Title Long Title Long Title Long
        Title Long Title
      </TopBar.Title>
      <TopBar.Actions>
        <TopBar.Action icon='dialpad' />
        <TopBar.Action success icon='phone' />
        <TopBar.Action danger icon='phone-off' />
        <TopBar.Action icon='message' />
        <TopBar.Action icon='contact' />
      </TopBar.Actions>
    </TopBarToolBox>
  </>
);
