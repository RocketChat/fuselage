import React, { useState } from 'react';

import Message from '.';
import { Box, Avatar } from '..';
import { MessageDivider } from './MessageDivider';
import { MessageEmoji } from './MessageEmoji';
import MessageReactions from './MessageReactions';
import MessageToolbox from './MessageToolbox';
import ThreadMessage from './ThreadMessage';

export default {
  title: 'Message/Message',
  component: Message,
  parameters: {
    jest: ['Message.spec.tsx'],
  },
};

export const Default = () => (
  <Box>
    <MessageDivider>May, 24, 2020</MessageDivider>
    <Message className='customclass' clickable>
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
          <MessageReactions.Reaction mine counter={1} />
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
  </Box>
);

export const WithSequential = () => (
  <Box>
    <MessageDivider>May, 24, 2020</MessageDivider>
    <Message className='customclass' clickable>
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
      <Message.LeftContainer />
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
    <Message className='customclass' clickable sequential>
      <Message.LeftContainer />
      <Message.Container>
        <Message.Body>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </Message.Body>
      </Message.Container>
    </Message>
    <Message className='customclass' clickable sequential>
      <Message.LeftContainer />
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

export const WithEmoji = () => (
  <Box>
    <MessageDivider>May, 24, 2020</MessageDivider>
    <Message className='customclass' clickable>
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
        </Message.Header>
        <Message.Body>
          <MessageEmoji
            name='sunglass'
            className='emoji'
            image='url("data:image/png;base64,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")'
            isBig
          />
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

export const MessageWithThread = () => (
  <Box>
    <MessageDivider unreadLabel='Unread'>May, 24, 2020</MessageDivider>
    <Message className='customclass' clickable>
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
      <Message.LeftContainer />
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
    <Message className='customclass' clickable sequential>
      <Message.LeftContainer />
      <Message.Container>
        <Message.Body>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </Message.Body>
      </Message.Container>
    </Message>
    <Message className='customclass' clickable sequential>
      <Message.LeftContainer />
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
            size='x16'
          />
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

export const MessageSelected = () => {
  const [selected, setSelected] = useState(true);
  return (
    <Box>
      <MessageDivider>May, 24, 2020</MessageDivider>
      <Message
        className='customclass'
        onClick={() => setSelected(!selected)}
        isSelected={selected}
      >
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
      </Message>
    </Box>
  );
};

export const MessageEditing = () => (
  <Box>
    <MessageDivider>May, 24, 2020</MessageDivider>
    <Message className='customclass' clickable>
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
    <Message className='customclass' clickable sequential isEditing>
      <Message.LeftContainer />
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
    <Message className='customclass' clickable sequential>
      <Message.LeftContainer />
      <Message.Container>
        <Message.Body>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </Message.Body>
      </Message.Container>
    </Message>
    <Message className='customclass' clickable sequential>
      <Message.LeftContainer />
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

export const MessageHighlighted = () => (
  <Box>
    <MessageDivider>May, 24, 2020</MessageDivider>
    <Message className='customclass' highlight>
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
    <Message className='customclass' sequential>
      <Message.LeftContainer />
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
    <Message className='customclass' sequential>
      <Message.LeftContainer />
      <Message.Container>
        <Message.Body>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </Message.Body>
      </Message.Container>
    </Message>
    <Message className='customclass' sequential>
      <Message.LeftContainer />
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

export const MessagePending = () => (
  <Box>
    <MessageDivider>May, 24, 2020</MessageDivider>
    <Message className='customclass' isPending>
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
        </Message.Header>
        <Message.Body>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat a duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam...
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
    <Message className='customclass' isPending sequential>
      <Message.LeftContainer />
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
    <Message className='customclass' isPending sequential>
      <Message.LeftContainer />
      <Message.Container>
        <Message.Body>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </Message.Body>
      </Message.Container>
    </Message>
    <Message className='customclass' isPending sequential>
      <Message.LeftContainer />
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
