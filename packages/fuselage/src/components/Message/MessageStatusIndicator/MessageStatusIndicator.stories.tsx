import React from 'react';

import { MessageStatusIndicator, MessageStatusIndicatorItem } from '.';
import Message from '..';
import { Box, Avatar } from '../..';
import { MessageDivider } from '../MessageDivider';
import MessageReactions from '../MessageReactions';
import MessageToolbox from '../MessageToolbox';

export default {
  title: 'Message/StatusIndicator',
  component: Message,
  // parameters: {
  //   jest: ['Message.spec.tsx'],
  // },
};

export const Default = () => (
  <Box>
    <MessageDivider>May, 24, 2020</MessageDivider>
    <Message clickable>
      <Message.LeftContainer>
        <Avatar
          url='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC
                4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMj
                IyMjIyMjIyMjIyMjIyMjL/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcEBgIDBQj/xAAuEAACAQQAAwcEAQUAAA
                AAAAABAgMABAUREiExBhMUIkFRYQcWcYGhFTJSgpH/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQBAP/EAB4RAAIBBQEBAQAAAAAAAAAAAAABAg
                MREiExE0HR/9oADAMBAAIRAxEAPwBuXuIkhBuMe5ib/AHQP49q4L3mLitryTLTSpOiHQI5k/HzXa/qbFOEudVTu1dumWvcTaNCZYZ7vU6g6L
                xqjOU/24dfs1Ouh9FnkMpd3Reeyx83hAxZZEhkdV9/MBrX71WGPvJcqrJBGveKATtuXXqNU0pu02bTHXD/AGvJAluyxxRd6F4x00o+NdKoVr
                jbzJdvVe1t5cVLc2ck8qjnohgpPtz2v7G6JtPQ2VJwjlcw+37mchpnK6GtIuv5NFWeTsLNPvxWTvpfjvOEfwKKzEVkSct2vscS/BIzSN0YRk
                eX81UpPqO8masJETu7OOccY4dswYFQeftv096XV5knuJGdm2T1+agvMXj8jEaHX905QihabvcbuS7X566mLWLwSY8PuRnk/u4eZ0deTl71Ef
                6hY+0yM88TzeNZY4luYwpVYyduOfrvhPTnr0pXSX9y5mCsyJMdyxxvwq599em+taItqCSNc90ChvZRUruUcT0JiO18Elpk7t8v41LWzacxkB
                SuvjQ/FFJayjDWrCTepAQ2vUH0oo/Jk3ovpwJJeVCP5CN+lFFaaMqy+nAyuChvrTI2kN9JAsi2ZOy4IBHMnkSCP+iqBexSWdxLazoUljJVlP
                UH2oorkV10pRc7b1zXb/hZOzuJvM86QWEXeELxOzHSIPcmiiiunVlF2RNTpRkrs//Z'
          size={'x36'}
        />
      </Message.LeftContainer>
      <Message.Container>
        <Message.Header>
          <Message.Name>Haylie George</Message.Name>
          <Message.Username>@haylie.george</Message.Username>
          <Message.Role>Admin</Message.Role>
          <Message.Role>User</Message.Role>
          <Message.Role>Owner</Message.Role>
          <Message.Timestamp>12:00 PM</Message.Timestamp>
          <MessageStatusIndicator>
            <MessageStatusIndicatorItem name='star' variant='success' />
            <MessageStatusIndicatorItem name='star' variant='danger' />
            <MessageStatusIndicatorItem name='star' variant='warning' />
            <MessageStatusIndicatorItem name='star' variant='primary' />
            <MessageStatusIndicatorItem
              name='star-filled'
              data-title={'starred'}
            />
          </MessageStatusIndicator>
        </Message.Header>
        <Message.Body>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat a duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam...
        </Message.Body>
        <MessageReactions>
          <MessageReactions.Reaction counter={1} />
          <MessageReactions.Reaction counter={2} />
          <MessageReactions.Reaction counter={3} />
          <MessageReactions.Action />
        </MessageReactions>
      </Message.Container>
      <MessageToolbox.Wrapper>
        <MessageToolbox>
          <MessageToolbox.Item icon='quote' />
          <MessageToolbox.Item icon='clock' />
          <MessageToolbox.Item icon='thread' />
        </MessageToolbox>
      </MessageToolbox.Wrapper>
    </Message>
    <Message className='customclass' clickable sequential>
      <Message.LeftContainer>
        <MessageStatusIndicator>
          <MessageStatusIndicatorItem name='star-filled' />
          <MessageStatusIndicatorItem name='star-filled' />
          <MessageStatusIndicatorItem name='star-filled' />
          <MessageStatusIndicatorItem name='star-filled' />
          <MessageStatusIndicatorItem
            name='star-filled'
            data-title={'starred'}
          />
        </MessageStatusIndicator>
      </Message.LeftContainer>
      <Message.Container>
        <Message.Body>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </Message.Body>
      </Message.Container>
      <MessageToolbox.Wrapper>
        <MessageToolbox>
          <MessageToolbox.Item icon='quote' />
          <MessageToolbox.Item icon='clock' />
          <MessageToolbox.Item icon='thread' />
        </MessageToolbox>
      </MessageToolbox.Wrapper>
    </Message>
  </Box>
);
