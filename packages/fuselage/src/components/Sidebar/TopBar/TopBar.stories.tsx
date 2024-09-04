import type { StoryFn, Meta } from '@storybook/react';
import type { ComponentType } from 'react';

import {
  TopBar,
  TopBarAction,
  TopBarActions,
  TopBarAvatar,
  TopBarTitle,
  TopBarToolBox,
} from '.';
import { Avatar } from '../../Avatar';
import { SidebarSection } from '../Section';

export default {
  title: 'Sidebar/TopBar',
  component: TopBar,
  subcomponents: {
    TopBarAction: TopBarAction as ComponentType<any>,
    TopBarActions,
    TopBarTitle,
    TopBarToolBox,
  },
} satisfies Meta<typeof TopBar>;

export const Default: StoryFn<typeof TopBar> = () => (
  <>
    <SidebarSection>
      <Avatar
        size={TopBarAvatar.size}
        alt=''
        url={
          'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcEBgIDBQj/xAAuEAACAQQAAwcEAQUAAAAAAAABAgMABAUREiExBhMUIkFRYQcWcYGhFTJSgpH/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQBAP/EAB4RAAIBBQEBAQAAAAAAAAAAAAABAgMREiExE0HR/9oADAMBAAIRAxEAPwBuXuIkhBuMe5ib/AHQP49q4L3mLitryTLTSpOiHQI5k/HzXa/qbFOEudVTu1dumWvcTaNCZYZ7vU6g6LxqjOU/24dfs1Ouh9FnkMpd3Reeyx83hAxZZEhkdV9/MBrX71WGPvJcqrJBGveKATtuXXqNU0pu02bTHXD/AGvJAluyxxRd6F4x00o+NdKoVrjbzJdvVe1t5cVLc2ck8qjnohgpPtz2v7G6JtPQ2VJwjlcw+37mchpnK6GtIuv5NFWeTsLNPvxWTvpfjvOEfwKKzEVkSct2vscS/BIzSN0YRkeX81UpPqO8masJETu7OOccY4dswYFQeftv096XV5knuJGdm2T1+agvMXj8jEaHX905QihabvcbuS7X566mLWLwSY8PuRnk/u4eZ0deTl71Ef6hY+0yM88TzeNZY4luYwpVYyduOfrvhPTnr0pXSX9y5mCsyJMdyxxvwq599em+taItqCSNc90ChvZRUruUcT0JiO18Elpk7t8v41LWzacxkBSuvjQ/FFJayjDWrCTepAQ2vUH0oo/Jk3ovpwJJeVCP5CN+lFFaaMqy+nAyuChvrTI2kN9JAsi2ZOy4IBHMnkSCP+iqBexSWdxLazoUljJVlPUH2oorkV10pRc7b1zXb/hZOzuJvM86QWEXeELxOzHSIPcmiiiunVlF2RNTpRkrs//Z'
        }
      />
      <TopBarActions>
        <TopBarAction icon='home' title='home' />
        <TopBarAction icon='magnifier' title='search' />
        <TopBarAction icon='globe' title='discover' />
        <TopBarAction icon='sort' title='sort' />
        <TopBarAction icon='edit-rounded' title='edit' />
      </TopBarActions>
    </SidebarSection>
    <TopBarToolBox>
      <TopBarTitle>Title</TopBarTitle>
      <TopBarActions>
        <TopBarAction success icon='phone' title='call' />
        <TopBarAction icon='message-disabled' title='message' />
      </TopBarActions>
    </TopBarToolBox>
    <TopBarToolBox>
      <TopBarTitle>
        Long Title Long Title Long Title Long Title Long Title Long Title Long
        Title Long Title Long Title Long Title Long Title Long Title Long Title
        Long Title Long Title Long Title Long Title Long Title Long Title Long
        Title Long Title
      </TopBarTitle>
      <TopBarActions>
        <TopBarAction icon='dialpad' title='dialpad' />
        <TopBarAction success icon='phone' title='call' />
        <TopBarAction danger icon='phone-off' title='end' />
        <TopBarAction icon='message' title='message' />
        <TopBarAction icon='contact' title='contact' />
      </TopBarActions>
    </TopBarToolBox>
  </>
);
