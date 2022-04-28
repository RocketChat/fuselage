import React from 'react';

import ThreadMessage from '.';
import { Avatar, Box } from '../..';
import { ThreadMessageEmoji } from './ThreadMessageEmoji';

export default {
  title: 'Message/ThreadMessage',
  component: ThreadMessage,
  parameters: {
    jest: ['ThreadMessage.spec.tsx'],
  },
};

const avatarUrl =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcEBgIDBQj/xAAuEAACAQQAAwcEAQUAAAAAAAABAgMABAUREiExBhMUIkFRYQcWcYGhFTJSgpH/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQBAP/EAB4RAAIBBQEBAQAAAAAAAAAAAAABAgMREiExE0HR/9oADAMBAAIRAxEAPwBuXuIkhBuMe5ib/AHQP49q4L3mLitryTLTSpOiHQI5k/HzXa/qbFOEudVTu1dumWvcTaNCZYZ7vU6g6LxqjOU/24dfs1Ouh9FnkMpd3Reeyx83hAxZZEhkdV9/MBrX71WGPvJcqrJBGveKATtuXXqNU0pu02bTHXD/AGvJAluyxxRd6F4x00o+NdKoVrjbzJdvVe1t5cVLc2ck8qjnohgpPtz2v7G6JtPQ2VJwjlcw+37mchpnK6GtIuv5NFWeTsLNPvxWTvpfjvOEfwKKzEVkSct2vscS/BIzSN0YRkeX81UpPqO8masJETu7OOccY4dswYFQeftv096XV5knuJGdm2T1+agvMXj8jEaHX905QihabvcbuS7X566mLWLwSY8PuRnk/u4eZ0deTl71Ef6hY+0yM88TzeNZY4luYwpVYyduOfrvhPTnr0pXSX9y5mCsyJMdyxxvwq599em+taItqCSNc90ChvZRUruUcT0JiO18Elpk7t8v41LWzacxkBSuvjQ/FFJayjDWrCTepAQ2vUH0oo/Jk3ovpwJJeVCP5CN+lFFaaMqy+nAyuChvrTI2kN9JAsi2ZOy4IBHMnkSCP+iqBexSWdxLazoUljJVlPUH2oorkV10pRc7b1zXb/hZOzuJvM86QWEXeELxOzHSIPcmiiiunVlF2RNTpRkrs//Z';

export const Default = () => (
  <Box>
    <ThreadMessage>
      <ThreadMessage.Row>
        <ThreadMessage.LeftContainer>
          <ThreadMessage.Icon />
        </ThreadMessage.LeftContainer>
        <ThreadMessage.Container>
          <ThreadMessage.Origin>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat a duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam...
          </ThreadMessage.Origin>
          <ThreadMessage.Unfollow />
        </ThreadMessage.Container>
      </ThreadMessage.Row>
      <ThreadMessage.Row>
        <ThreadMessage.LeftContainer>
          <Avatar url={avatarUrl} size='x16' />
        </ThreadMessage.LeftContainer>
        <ThreadMessage.Container>
          <ThreadMessage.Message>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat a duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam...
          </ThreadMessage.Message>
        </ThreadMessage.Container>
      </ThreadMessage.Row>
    </ThreadMessage>
  </Box>
);

export const WithEmoji = () => (
  <Box>
    <ThreadMessage>
      <ThreadMessage.Row>
        <ThreadMessage.LeftContainer>
          <ThreadMessage.Icon />
        </ThreadMessage.LeftContainer>
        <ThreadMessage.Container>
          <ThreadMessage.Origin>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat a duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam...
          </ThreadMessage.Origin>
          <ThreadMessage.Unfollow />
        </ThreadMessage.Container>
      </ThreadMessage.Row>
      <ThreadMessage.Row>
        <ThreadMessage.LeftContainer>
          <Avatar url={avatarUrl} size='x16' />
        </ThreadMessage.LeftContainer>
        <ThreadMessage.Container>
          <ThreadMessage.Message>
            Thread Emoji test:{' '}
            <ThreadMessageEmoji name='test' image={`url(${avatarUrl})`} />
          </ThreadMessage.Message>
        </ThreadMessage.Container>
      </ThreadMessage.Row>
    </ThreadMessage>
  </Box>
);
