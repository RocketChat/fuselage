import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { action } from 'storybook/actions';

import { Avatar } from '../Avatar';
import { Box } from '../Box';
import { Divider } from '../Divider';
import { Icon } from '../Icon';
import { Tag } from '../Tag';

import {
  SidebarTopBarAction,
  SidebarTopBarActions,
  SidebarTopBarAvatar,
  SidebarTopBarTitle,
  SidebarTopBarToolBox,
} from '.';
import {
  SidebarItem,
  SidebarItemAction,
  SidebarItemActions,
  SidebarItemAvatar,
  SidebarItemContainer,
  SidebarItemContent,
  SidebarItemIcon,
  SidebarItemSubtitle,
  SidebarItemTitle,
  SidebarItemWrapper,
} from './Item';
import { SidebarSection, SidebarSectionTitle } from './Section';
import Sidebar from './Sidebar';
import SidebarBanner from './SidebarBanner';
import { SidebarFooter, SidebarFooterHighlight } from './SidebarFooter';
import { TopBarAction } from './TopBar';

export default {
  title: 'Sidebar/Sidebar',
  component: Sidebar,
  subcomponents: {
    SidebarItemAvatar,
    SidebarItemContent,
    SidebarItemContainer,
    SidebarItemIcon,
    SidebarItemSubtitle,
    SidebarItemTitle,
    SidebarItemWrapper,
    SidebarFooterHighlight,
    SidebarItemActions,
    SidebarItemAction,
    SidebarFooter,
    SidebarSectionTitle,
    SidebarItem,
    SidebarSection,
  },
} satisfies Meta<typeof Sidebar>;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  render: () => (
    <>
      <div className='rcx-sidebar'>
        <SidebarSection>
          <Avatar
            size={SidebarTopBarAvatar.size}
            url={
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcEBgIDBQj/xAAuEAACAQQAAwcEAQUAAAAAAAABAgMABAUREiExBhMUIkFRYQcWcYGhFTJSgpH/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQBAP/EAB4RAAIBBQEBAQAAAAAAAAAAAAABAgMREiExE0HR/9oADAMBAAIRAxEAPwBuXuIkhBuMe5ib/AHQP49q4L3mLitryTLTSpOiHQI5k/HzXa/qbFOEudVTu1dumWvcTaNCZYZ7vU6g6LxqjOU/24dfs1Ouh9FnkMpd3Reeyx83hAxZZEhkdV9/MBrX71WGPvJcqrJBGveKATtuXXqNU0pu02bTHXD/AGvJAluyxxRd6F4x00o+NdKoVrjbzJdvVe1t5cVLc2ck8qjnohgpPtz2v7G6JtPQ2VJwjlcw+37mchpnK6GtIuv5NFWeTsLNPvxWTvpfjvOEfwKKzEVkSct2vscS/BIzSN0YRkeX81UpPqO8masJETu7OOccY4dswYFQeftv096XV5knuJGdm2T1+agvMXj8jEaHX905QihabvcbuS7X566mLWLwSY8PuRnk/u4eZ0deTl71Ef6hY+0yM88TzeNZY4luYwpVYyduOfrvhPTnr0pXSX9y5mCsyJMdyxxvwq599em+taItqCSNc90ChvZRUruUcT0JiO18Elpk7t8v41LWzacxkBSuvjQ/FFJayjDWrCTepAQ2vUH0oo/Jk3ovpwJJeVCP5CN+lFFaaMqy+nAyuChvrTI2kN9JAsi2ZOy4IBHMnkSCP+iqBexSWdxLazoUljJVlPUH2oorkV10pRc7b1zXb/hZOzuJvM86QWEXeELxOzHSIPcmiiiunVlF2RNTpRkrs//Z'
            }
          />
          <SidebarTopBarActions>
            <SidebarTopBarAction icon='home' />
            <SidebarTopBarAction icon='magnifier' />
            <SidebarTopBarAction icon='globe' />
            <SidebarTopBarAction icon='sort' />
            <SidebarTopBarAction icon='edit-rounded' />
          </SidebarTopBarActions>
        </SidebarSection>
        <SidebarTopBarToolBox>
          <SidebarTopBarTitle>Title</SidebarTopBarTitle>
          <SidebarTopBarActions>
            <SidebarTopBarAction success icon='phone' />
            <SidebarTopBarAction icon='message-disabled' />
          </SidebarTopBarActions>
        </SidebarTopBarToolBox>
        <SidebarSection>
          <SidebarSectionTitle>
            CallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallss
          </SidebarSectionTitle>
          <SidebarTopBarActions>
            <SidebarTopBarAction success icon='phone' />
            <SidebarTopBarAction icon='message-disabled' />
          </SidebarTopBarActions>
        </SidebarSection>
        <SidebarItem>
          <SidebarItemAvatar>
            <Avatar
              size='x16'
              url={
                'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcEBgIDBQj/xAAuEAACAQQAAwcEAQUAAAAAAAABAgMABAUREiExBhMUIkFRYQcWcYGhFTJSgpH/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQBAP/EAB4RAAIBBQEBAQAAAAAAAAAAAAABAgMREiExE0HR/9oADAMBAAIRAxEAPwBuXuIkhBuMe5ib/AHQP49q4L3mLitryTLTSpOiHQI5k/HzXa/qbFOEudVTu1dumWvcTaNCZYZ7vU6g6LxqjOU/24dfs1Ouh9FnkMpd3Reeyx83hAxZZEhkdV9/MBrX71WGPvJcqrJBGveKATtuXXqNU0pu02bTHXD/AGvJAluyxxRd6F4x00o+NdKoVrjbzJdvVe1t5cVLc2ck8qjnohgpPtz2v7G6JtPQ2VJwjlcw+37mchpnK6GtIuv5NFWeTsLNPvxWTvpfjvOEfwKKzEVkSct2vscS/BIzSN0YRkeX81UpPqO8masJETu7OOccY4dswYFQeftv096XV5knuJGdm2T1+agvMXj8jEaHX905QihabvcbuS7X566mLWLwSY8PuRnk/u4eZ0deTl71Ef6hY+0yM88TzeNZY4luYwpVYyduOfrvhPTnr0pXSX9y5mCsyJMdyxxvwq599em+taItqCSNc90ChvZRUruUcT0JiO18Elpk7t8v41LWzacxkBSuvjQ/FFJayjDWrCTepAQ2vUH0oo/Jk3ovpwJJeVCP5CN+lFFaaMqy+nAyuChvrTI2kN9JAsi2ZOy4IBHMnkSCP+iqBexSWdxLazoUljJVlPUH2oorkV10pRc7b1zXb/hZOzuJvM86QWEXeELxOzHSIPcmiiiunVlF2RNTpRkrs//Z'
              }
            />
          </SidebarItemAvatar>
          <SidebarItemContent>
            <SidebarItemWrapper>
              <SidebarItemIcon icon='lock' />
              <SidebarItemTitle>
                ddsfoasdhfiuashd ousadhfiuasdhfiuashd soduhfiuasdhfia
                ishdfiuashdfiuas iuashdfiausdh
              </SidebarItemTitle>
            </SidebarItemWrapper>
          </SidebarItemContent>
          <SidebarItemContainer>
            <SidebarItemActions>
              <SidebarItemAction secondary success icon='phone' />
              <SidebarItemAction secondary danger icon='circle-cross' />
              <SidebarItemAction secondary info icon='trash' />
              <SidebarItemAction icon='phone' secondary />
            </SidebarItemActions>
          </SidebarItemContainer>
        </SidebarItem>
        <SidebarItem selected clickable>
          <SidebarItemAvatar>
            <Avatar
              size='x28'
              url={
                'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcEBgIDBQj/xAAuEAACAQQAAwcEAQUAAAAAAAABAgMABAUREiExBhMUIkFRYQcWcYGhFTJSgpH/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQBAP/EAB4RAAIBBQEBAQAAAAAAAAAAAAABAgMREiExE0HR/9oADAMBAAIRAxEAPwBuXuIkhBuMe5ib/AHQP49q4L3mLitryTLTSpOiHQI5k/HzXa/qbFOEudVTu1dumWvcTaNCZYZ7vU6g6LxqjOU/24dfs1Ouh9FnkMpd3Reeyx83hAxZZEhkdV9/MBrX71WGPvJcqrJBGveKATtuXXqNU0pu02bTHXD/AGvJAluyxxRd6F4x00o+NdKoVrjbzJdvVe1t5cVLc2ck8qjnohgpPtz2v7G6JtPQ2VJwjlcw+37mchpnK6GtIuv5NFWeTsLNPvxWTvpfjvOEfwKKzEVkSct2vscS/BIzSN0YRkeX81UpPqO8masJETu7OOccY4dswYFQeftv096XV5knuJGdm2T1+agvMXj8jEaHX905QihabvcbuS7X566mLWLwSY8PuRnk/u4eZ0deTl71Ef6hY+0yM88TzeNZY4luYwpVYyduOfrvhPTnr0pXSX9y5mCsyJMdyxxvwq599em+taItqCSNc90ChvZRUruUcT0JiO18Elpk7t8v41LWzacxkBSuvjQ/FFJayjDWrCTepAQ2vUH0oo/Jk3ovpwJJeVCP5CN+lFFaaMqy+nAyuChvrTI2kN9JAsi2ZOy4IBHMnkSCP+iqBexSWdxLazoUljJVlPUH2oorkV10pRc7b1zXb/hZOzuJvM86QWEXeELxOzHSIPcmiiiunVlF2RNTpRkrs//Z'
              }
            />
          </SidebarItemAvatar>
          <SidebarItemContent>
            <SidebarItemWrapper>
              <SidebarItemIcon icon='balloon' />
              <SidebarItemTitle>
                ddsfoasdhfiuashd ousadhfiuasdhfiuashd soduhfiuasdhfia
                ishdfiuashdfiuas iuashdfiausdh
              </SidebarItemTitle>
            </SidebarItemWrapper>
          </SidebarItemContent>
          <SidebarItemContainer>
            <SidebarItemActions>
              <SidebarItemAction secondary success icon='phone' />
              <SidebarItemAction secondary danger icon='circle-cross' />
              <SidebarItemAction secondary info icon='trash' />
              <SidebarItemAction icon='phone' secondary />
            </SidebarItemActions>
          </SidebarItemContainer>
        </SidebarItem>
        <SidebarItem clickable>
          <SidebarItemAvatar>
            <Avatar
              size='x36'
              url={
                'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcEBgIDBQj/xAAuEAACAQQAAwcEAQUAAAAAAAABAgMABAUREiExBhMUIkFRYQcWcYGhFTJSgpH/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQBAP/EAB4RAAIBBQEBAQAAAAAAAAAAAAABAgMREiExE0HR/9oADAMBAAIRAxEAPwBuXuIkhBuMe5ib/AHQP49q4L3mLitryTLTSpOiHQI5k/HzXa/qbFOEudVTu1dumWvcTaNCZYZ7vU6g6LxqjOU/24dfs1Ouh9FnkMpd3Reeyx83hAxZZEhkdV9/MBrX71WGPvJcqrJBGveKATtuXXqNU0pu02bTHXD/AGvJAluyxxRd6F4x00o+NdKoVrjbzJdvVe1t5cVLc2ck8qjnohgpPtz2v7G6JtPQ2VJwjlcw+37mchpnK6GtIuv5NFWeTsLNPvxWTvpfjvOEfwKKzEVkSct2vscS/BIzSN0YRkeX81UpPqO8masJETu7OOccY4dswYFQeftv096XV5knuJGdm2T1+agvMXj8jEaHX905QihabvcbuS7X566mLWLwSY8PuRnk/u4eZ0deTl71Ef6hY+0yM88TzeNZY4luYwpVYyduOfrvhPTnr0pXSX9y5mCsyJMdyxxvwq599em+taItqCSNc90ChvZRUruUcT0JiO18Elpk7t8v41LWzacxkBSuvjQ/FFJayjDWrCTepAQ2vUH0oo/Jk3ovpwJJeVCP5CN+lFFaaMqy+nAyuChvrTI2kN9JAsi2ZOy4IBHMnkSCP+iqBexSWdxLazoUljJVlPUH2oorkV10pRc7b1zXb/hZOzuJvM86QWEXeELxOzHSIPcmiiiunVlF2RNTpRkrs//Z'
              }
            />
          </SidebarItemAvatar>
          <SidebarItemContent>
            <SidebarItemContent>
              <SidebarItemWrapper>
                <SidebarItemIcon icon='lock' />
                <SidebarItemTitle>
                  ddsfoasdhfiuashd ousadhfiuasdhfiuashd soduhfiuasdhfia
                  ishdfiuashdfiuas iuashdfiausdh
                </SidebarItemTitle>
              </SidebarItemWrapper>
            </SidebarItemContent>
            <SidebarItemContent>
              <SidebarItemWrapper>
                <SidebarItemSubtitle>
                  ddsfoasdhfiuashd ousadhfiuasdhfiuashd soduhfiuasdhfia
                  ishdfiuashdfiuas iuashdfiausdh
                </SidebarItemSubtitle>
              </SidebarItemWrapper>
            </SidebarItemContent>
          </SidebarItemContent>
          <SidebarItemContainer>
            <SidebarItemActions>
              <SidebarItemAction secondary success icon='phone' />
              <SidebarItemAction secondary danger icon='circle-cross' />
              <SidebarItemAction secondary info icon='trash' />
              <SidebarItemAction icon='phone' secondary />
            </SidebarItemActions>
          </SidebarItemContainer>
        </SidebarItem>
      </div>
    </>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <>
      <SidebarSection>
        <Avatar
          size={SidebarTopBarAvatar.size}
          url={
            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcEBgIDBQj/xAAuEAACAQQAAwcEAQUAAAAAAAABAgMABAUREiExBhMUIkFRYQcWcYGhFTJSgpH/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQBAP/EAB4RAAIBBQEBAQAAAAAAAAAAAAABAgMREiExE0HR/9oADAMBAAIRAxEAPwBuXuIkhBuMe5ib/AHQP49q4L3mLitryTLTSpOiHQI5k/HzXa/qbFOEudVTu1dumWvcTaNCZYZ7vU6g6LxqjOU/24dfs1Ouh9FnkMpd3Reeyx83hAxZZEhkdV9/MBrX71WGPvJcqrJBGveKATtuXXqNU0pu02bTHXD/AGvJAluyxxRd6F4x00o+NdKoVrjbzJdvVe1t5cVLc2ck8qjnohgpPtz2v7G6JtPQ2VJwjlcw+37mchpnK6GtIuv5NFWeTsLNPvxWTvpfjvOEfwKKzEVkSct2vscS/BIzSN0YRkeX81UpPqO8masJETu7OOccY4dswYFQeftv096XV5knuJGdm2T1+agvMXj8jEaHX905QihabvcbuS7X566mLWLwSY8PuRnk/u4eZ0deTl71Ef6hY+0yM88TzeNZY4luYwpVYyduOfrvhPTnr0pXSX9y5mCsyJMdyxxvwq599em+taItqCSNc90ChvZRUruUcT0JiO18Elpk7t8v41LWzacxkBSuvjQ/FFJayjDWrCTepAQ2vUH0oo/Jk3ovpwJJeVCP5CN+lFFaaMqy+nAyuChvrTI2kN9JAsi2ZOy4IBHMnkSCP+iqBexSWdxLazoUljJVlPUH2oorkV10pRc7b1zXb/hZOzuJvM86QWEXeELxOzHSIPcmiiiunVlF2RNTpRkrs//Z'
          }
        />
        <SidebarTopBarActions>
          <SidebarTopBarAction icon='home' />
          <SidebarTopBarAction icon='magnifier' />
          <SidebarTopBarAction icon='globe' />
          <SidebarTopBarAction icon='sort' />
          <SidebarTopBarAction icon='edit-rounded' />
        </SidebarTopBarActions>
      </SidebarSection>
      <SidebarTopBarToolBox>
        <SidebarTopBarTitle>Title</SidebarTopBarTitle>
        <SidebarTopBarActions>
          <SidebarTopBarAction success icon='phone' />
          <SidebarTopBarAction icon='message-disabled' />
        </SidebarTopBarActions>
      </SidebarTopBarToolBox>
      <SidebarSection>
        <SidebarSectionTitle>
          CallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallss
        </SidebarSectionTitle>
        <SidebarTopBarActions>
          <SidebarTopBarAction success icon='phone' />
          <SidebarTopBarAction icon='message-disabled' />
        </SidebarTopBarActions>
      </SidebarSection>
      <SidebarItem>
        <SidebarItemAvatar>
          <Avatar
            size='x16'
            url={
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcEBgIDBQj/xAAuEAACAQQAAwcEAQUAAAAAAAABAgMABAUREiExBhMUIkFRYQcWcYGhFTJSgpH/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQBAP/EAB4RAAIBBQEBAQAAAAAAAAAAAAABAgMREiExE0HR/9oADAMBAAIRAxEAPwBuXuIkhBuMe5ib/AHQP49q4L3mLitryTLTSpOiHQI5k/HzXa/qbFOEudVTu1dumWvcTaNCZYZ7vU6g6LxqjOU/24dfs1Ouh9FnkMpd3Reeyx83hAxZZEhkdV9/MBrX71WGPvJcqrJBGveKATtuXXqNU0pu02bTHXD/AGvJAluyxxRd6F4x00o+NdKoVrjbzJdvVe1t5cVLc2ck8qjnohgpPtz2v7G6JtPQ2VJwjlcw+37mchpnK6GtIuv5NFWeTsLNPvxWTvpfjvOEfwKKzEVkSct2vscS/BIzSN0YRkeX81UpPqO8masJETu7OOccY4dswYFQeftv096XV5knuJGdm2T1+agvMXj8jEaHX905QihabvcbuS7X566mLWLwSY8PuRnk/u4eZ0deTl71Ef6hY+0yM88TzeNZY4luYwpVYyduOfrvhPTnr0pXSX9y5mCsyJMdyxxvwq599em+taItqCSNc90ChvZRUruUcT0JiO18Elpk7t8v41LWzacxkBSuvjQ/FFJayjDWrCTepAQ2vUH0oo/Jk3ovpwJJeVCP5CN+lFFaaMqy+nAyuChvrTI2kN9JAsi2ZOy4IBHMnkSCP+iqBexSWdxLazoUljJVlPUH2oorkV10pRc7b1zXb/hZOzuJvM86QWEXeELxOzHSIPcmiiiunVlF2RNTpRkrs//Z'
            }
          />
        </SidebarItemAvatar>
        <SidebarItemContent>
          <SidebarItemWrapper>
            <SidebarItemIcon icon='lock' />
            <SidebarItemTitle>
              ddsfoasdhfiuashd ousadhfiuasdhfiuashd soduhfiuasdhfia
              ishdfiuashdfiuas iuashdfiausdh
            </SidebarItemTitle>
          </SidebarItemWrapper>
        </SidebarItemContent>
        <SidebarItemContainer>
          <SidebarItemActions>
            <SidebarItemAction secondary success icon='phone' />
            <SidebarItemAction secondary danger icon='circle-cross' />
            <SidebarItemAction secondary info icon='trash' />
            <SidebarItemAction icon='phone' secondary />
          </SidebarItemActions>
        </SidebarItemContainer>
      </SidebarItem>
      <SidebarItem selected clickable>
        <SidebarItemAvatar>
          <Avatar
            size='x28'
            url={
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcEBgIDBQj/xAAuEAACAQQAAwcEAQUAAAAAAAABAgMABAUREiExBhMUIkFRYQcWcYGhFTJSgpH/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQBAP/EAB4RAAIBBQEBAQAAAAAAAAAAAAABAgMREiExE0HR/9oADAMBAAIRAxEAPwBuXuIkhBuMe5ib/AHQP49q4L3mLitryTLTSpOiHQI5k/HzXa/qbFOEudVTu1dumWvcTaNCZYZ7vU6g6LxqjOU/24dfs1Ouh9FnkMpd3Reeyx83hAxZZEhkdV9/MBrX71WGPvJcqrJBGveKATtuXXqNU0pu02bTHXD/AGvJAluyxxRd6F4x00o+NdKoVrjbzJdvVe1t5cVLc2ck8qjnohgpPtz2v7G6JtPQ2VJwjlcw+37mchpnK6GtIuv5NFWeTsLNPvxWTvpfjvOEfwKKzEVkSct2vscS/BIzSN0YRkeX81UpPqO8masJETu7OOccY4dswYFQeftv096XV5knuJGdm2T1+agvMXj8jEaHX905QihabvcbuS7X566mLWLwSY8PuRnk/u4eZ0deTl71Ef6hY+0yM88TzeNZY4luYwpVYyduOfrvhPTnr0pXSX9y5mCsyJMdyxxvwq599em+taItqCSNc90ChvZRUruUcT0JiO18Elpk7t8v41LWzacxkBSuvjQ/FFJayjDWrCTepAQ2vUH0oo/Jk3ovpwJJeVCP5CN+lFFaaMqy+nAyuChvrTI2kN9JAsi2ZOy4IBHMnkSCP+iqBexSWdxLazoUljJVlPUH2oorkV10pRc7b1zXb/hZOzuJvM86QWEXeELxOzHSIPcmiiiunVlF2RNTpRkrs//Z'
            }
          />
        </SidebarItemAvatar>
        <SidebarItemContent>
          <SidebarItemWrapper>
            <SidebarItemIcon icon='balloon' />
            <SidebarItemTitle>
              ddsfoasdhfiuashd ousadhfiuasdhfiuashd soduhfiuasdhfia
              ishdfiuashdfiuas iuashdfiausdh
            </SidebarItemTitle>
          </SidebarItemWrapper>
        </SidebarItemContent>
        <SidebarItemContainer>
          <SidebarItemActions>
            <SidebarItemAction secondary success icon='phone' />
            <SidebarItemAction secondary danger icon='circle-cross' />
            <SidebarItemAction secondary info icon='trash' />
            <SidebarItemAction icon='phone' secondary />
          </SidebarItemActions>
        </SidebarItemContainer>
      </SidebarItem>
      <SidebarItem clickable>
        <SidebarItemAvatar>
          <Avatar
            size='x36'
            url={
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcEBgIDBQj/xAAuEAACAQQAAwcEAQUAAAAAAAABAgMABAUREiExBhMUIkFRYQcWcYGhFTJSgpH/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQBAP/EAB4RAAIBBQEBAQAAAAAAAAAAAAABAgMREiExE0HR/9oADAMBAAIRAxEAPwBuXuIkhBuMe5ib/AHQP49q4L3mLitryTLTSpOiHQI5k/HzXa/qbFOEudVTu1dumWvcTaNCZYZ7vU6g6LxqjOU/24dfs1Ouh9FnkMpd3Reeyx83hAxZZEhkdV9/MBrX71WGPvJcqrJBGveKATtuXXqNU0pu02bTHXD/AGvJAluyxxRd6F4x00o+NdKoVrjbzJdvVe1t5cVLc2ck8qjnohgpPtz2v7G6JtPQ2VJwjlcw+37mchpnK6GtIuv5NFWeTsLNPvxWTvpfjvOEfwKKzEVkSct2vscS/BIzSN0YRkeX81UpPqO8masJETu7OOccY4dswYFQeftv096XV5knuJGdm2T1+agvMXj8jEaHX905QihabvcbuS7X566mLWLwSY8PuRnk/u4eZ0deTl71Ef6hY+0yM88TzeNZY4luYwpVYyduOfrvhPTnr0pXSX9y5mCsyJMdyxxvwq599em+taItqCSNc90ChvZRUruUcT0JiO18Elpk7t8v41LWzacxkBSuvjQ/FFJayjDWrCTepAQ2vUH0oo/Jk3ovpwJJeVCP5CN+lFFaaMqy+nAyuChvrTI2kN9JAsi2ZOy4IBHMnkSCP+iqBexSWdxLazoUljJVlPUH2oorkV10pRc7b1zXb/hZOzuJvM86QWEXeELxOzHSIPcmiiiunVlF2RNTpRkrs//Z'
            }
          />
        </SidebarItemAvatar>
        <SidebarItemContent>
          <SidebarItemContent>
            <SidebarItemWrapper>
              <SidebarItemIcon icon='lock' />
              <SidebarItemTitle>
                ddsfoasdhfiuashd ousadhfiuasdhfiuashd soduhfiuasdhfia
                ishdfiuashdfiuas iuashdfiausdh
              </SidebarItemTitle>
            </SidebarItemWrapper>
          </SidebarItemContent>
          <SidebarItemContent>
            <SidebarItemWrapper>
              <SidebarItemSubtitle>
                ddsfoasdhfiuashd ousadhfiuasdhfiuashd soduhfiuasdhfia
                ishdfiuashdfiuas iuashdfiausdh
              </SidebarItemSubtitle>
            </SidebarItemWrapper>
          </SidebarItemContent>
        </SidebarItemContent>
        <SidebarItemContainer>
          <SidebarItemActions>
            <SidebarItemAction secondary success icon='phone' />
            <SidebarItemAction secondary danger icon='circle-cross' />
            <SidebarItemAction secondary info icon='trash' />
            <SidebarItemAction icon='phone' secondary />
          </SidebarItemActions>
        </SidebarItemContainer>
      </SidebarItem>
      <SidebarFooter elevated>
        <SidebarFooterHighlight> 9 Chats enqeued </SidebarFooterHighlight>
        <SidebarSection>
          <SidebarSectionTitle>
            Voice ChannelVoice ChannelVoice ChannelVoice ChannelVoice
            ChannelVoice ChannelVoice ChannelVoice ChannelVoice ChannelVoice
            ChannelVoice ChannelVoice ChannelVoice ChannelVoice ChannelVoice
            ChannelVoice ChannelVoice ChannelVoice ChannelVoice ChannelVoice
            ChannelVoice ChannelVoice ChannelVoice ChannelVoice ChannelVoice
            ChannelVoice ChannelVoice ChannelVoice ChannelVoice Channel
          </SidebarSectionTitle>
          <SidebarItemActions>
            <TopBarAction icon='mic-off' />
            <TopBarAction icon='mic' />
            <TopBarAction icon='headphone-off' />
            <TopBarAction icon='headphone' />
          </SidebarItemActions>
        </SidebarSection>
        <SidebarItem>
          <SidebarItemAvatar>
            <Avatar
              size='x36'
              url={
                'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcEBgIDBQj/xAAuEAACAQQAAwcEAQUAAAAAAAABAgMABAUREiExBhMUIkFRYQcWcYGhFTJSgpH/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQBAP/EAB4RAAIBBQEBAQAAAAAAAAAAAAABAgMREiExE0HR/9oADAMBAAIRAxEAPwBuXuIkhBuMe5ib/AHQP49q4L3mLitryTLTSpOiHQI5k/HzXa/qbFOEudVTu1dumWvcTaNCZYZ7vU6g6LxqjOU/24dfs1Ouh9FnkMpd3Reeyx83hAxZZEhkdV9/MBrX71WGPvJcqrJBGveKATtuXXqNU0pu02bTHXD/AGvJAluyxxRd6F4x00o+NdKoVrjbzJdvVe1t5cVLc2ck8qjnohgpPtz2v7G6JtPQ2VJwjlcw+37mchpnK6GtIuv5NFWeTsLNPvxWTvpfjvOEfwKKzEVkSct2vscS/BIzSN0YRkeX81UpPqO8masJETu7OOccY4dswYFQeftv096XV5knuJGdm2T1+agvMXj8jEaHX905QihabvcbuS7X566mLWLwSY8PuRnk/u4eZ0deTl71Ef6hY+0yM88TzeNZY4luYwpVYyduOfrvhPTnr0pXSX9y5mCsyJMdyxxvwq599em+taItqCSNc90ChvZRUruUcT0JiO18Elpk7t8v41LWzacxkBSuvjQ/FFJayjDWrCTepAQ2vUH0oo/Jk3ovpwJJeVCP5CN+lFFaaMqy+nAyuChvrTI2kN9JAsi2ZOy4IBHMnkSCP+iqBexSWdxLazoUljJVlPUH2oorkV10pRc7b1zXb/hZOzuJvM86QWEXeELxOzHSIPcmiiiunVlF2RNTpRkrs//Z'
              }
            />
          </SidebarItemAvatar>
          <SidebarItemContent>
            <SidebarItemContent>
              <SidebarItemWrapper>
                <SidebarItemIcon icon='balloon' />
                <SidebarItemTitle>
                  aasdasda asdasdasda asdasdasdas
                </SidebarItemTitle>
              </SidebarItemWrapper>
            </SidebarItemContent>
            <SidebarItemContent>
              <SidebarItemWrapper>
                <SidebarItemSubtitle>
                  ddsfoasdhfiuashd ousadhfiuasdhfiuashd soduhfiuasdhfia
                  ishdfiuashdfiuas iuashdfiausdh
                </SidebarItemSubtitle>
              </SidebarItemWrapper>
            </SidebarItemContent>
          </SidebarItemContent>
          <SidebarItemContainer>
            <SidebarItemActions>
              <SidebarItemAction secondary danger icon='phone-off' />
            </SidebarItemActions>
          </SidebarItemContainer>
        </SidebarItem>
      </SidebarFooter>
    </>
  ),
};

export const Admin: Story = {
  render: () => (
    <div className='rcx-sidebar'>
      <Box
        display='flex'
        is='header'
        paddingBlockStart={16}
        paddingBlockEnd={8}
        paddingInline={24}
      >
        <Box fontSize='p2' fontWeight='p2'>
          Administration
        </Box>
        <Box marginInline={8}>
          <Tag variant='featured'>Development</Tag>
        </Box>
      </Box>
      <Divider />
      <SidebarItem is='a' clickable href='#'>
        <Box display='flex' justifyContent='center' paddingBlock={8}>
          <Icon name='import' marginInline={4} size='x20' />
          Import
        </Box>
      </SidebarItem>
      <SidebarItem is='a' clickable href='#'>
        <Box display='flex' justifyContent='center' paddingBlock={8}>
          <Icon name='user' marginInline={4} size='x20' />
          Users
        </Box>
      </SidebarItem>
      <SidebarItem is='a' clickable href='#'>
        <Box display='flex' justifyContent='center' paddingBlock={8}>
          <Icon name='hashtag' marginInline={4} size='x20' />
          Rooms
        </Box>
      </SidebarItem>
      <SidebarItem is='a' clickable href='#'>
        <Box display='flex' justifyContent='center' paddingBlock={8}>
          <Icon name='cube' marginInline={4} size='x20' />
          Apps
        </Box>
      </SidebarItem>
    </div>
  ),
};

export const WithBanner: Story = {
  render: () => (
    <div className='rcx-sidebar'>
      <Box
        display='flex'
        is='header'
        paddingBlockStart={16}
        paddingBlockEnd={8}
        paddingInline={24}
      >
        <Box fontSize='p2' fontWeight='p2'>
          Administration
        </Box>
        <Box marginInline={8}>
          <Tag variant='featured'>Development</Tag>
        </Box>
      </Box>
      <Divider />
      <SidebarBanner
        text='This is a sidebar banner'
        description='Learn more'
        onClick={action('click')}
        onClose={action('click')}
      />
      <SidebarItem clickable>
        <Box display='flex' justifyContent='center' paddingBlock={8}>
          <Icon name='import' marginInline={4} size='x20' />
          Import
        </Box>
      </SidebarItem>
      <SidebarItem clickable>
        <Box display='flex' justifyContent='center' paddingBlock={8}>
          <Icon name='user' marginInline={4} size='x20' />
          Users
        </Box>
      </SidebarItem>
      <SidebarItem clickable>
        <Box display='flex' justifyContent='center' paddingBlock={8}>
          <Icon name='hashtag' marginInline={4} size='x20' />
          Rooms
        </Box>
      </SidebarItem>
      <SidebarItem clickable>
        <Box display='flex' justifyContent='center' paddingBlock={8}>
          <Icon name='cube' marginInline={4} size='x20' />
          Apps
        </Box>
      </SidebarItem>
    </div>
  ),
};

export const CustomBannerContent: Story = {
  render: () => (
    <SidebarBanner>
      <Box display='flex' justifyContent='space-between'>
        <Icon name='modal-warning' size='x20' marginInline={8} />
        <div>This is a customized banner content</div>
      </Box>
    </SidebarBanner>
  ),
};

export const BannerVariations: Story = {
  render: () => (
    <>
      <SidebarBanner text='This is a default banner variation' />
      <Divider />
      <SidebarBanner text='This is an info banner variation' variant='info' />
      <Divider />
      <SidebarBanner
        text='This is a success banner variation'
        variant='success'
      />
      <Divider />
      <SidebarBanner
        text='This is a warning banner variation'
        variant='warning'
      />
      <Divider />
      <SidebarBanner
        text='This is a danger banner variation'
        variant='danger'
      />
      <Divider />
      <SidebarBanner
        text='This is a banner with addon'
        addon={<Icon name='warning' color='danger' size='x24' />}
      />
      <Divider />
      <SidebarBanner
        text='This is a banner with addon and onClose'
        addon={<Icon name='warning' color='danger' size='x24' />}
        onClose={action('click')}
      />
    </>
  ),
};
