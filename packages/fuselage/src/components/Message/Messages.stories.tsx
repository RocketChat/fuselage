import type { ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

import Message from '.';
import { Box, Avatar } from '..';
import { MessageDivider } from './MessageDivider';
import { MessageEmoji } from './MessageEmoji';
import MessageMetrics from './MessageMetrics';
import MessageReactions from './MessageReactions';
import MessageToolbox from './MessageToolbox';
import ThreadMessage, { ThreadMessageEmoji } from './ThreadMessage';

export default {
  title: 'Message/Message',
  component: Message,
  parameters: {
    jest: ['Message.spec.tsx'],
  },
};

const avatarUrl =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcEBgIDBQj/xAAuEAACAQQAAwcEAQUAAAAAAAABAgMABAUREiExBhMUIkFRYQcWcYGhFTJSgpH/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQBAP/EAB4RAAIBBQEBAQAAAAAAAAAAAAABAgMREiExE0HR/9oADAMBAAIRAxEAPwBuXuIkhBuMe5ib/AHQP49q4L3mLitryTLTSpOiHQI5k/HzXa/qbFOEudVTu1dumWvcTaNCZYZ7vU6g6LxqjOU/24dfs1Ouh9FnkMpd3Reeyx83hAxZZEhkdV9/MBrX71WGPvJcqrJBGveKATtuXXqNU0pu02bTHXD/AGvJAluyxxRd6F4x00o+NdKoVrjbzJdvVe1t5cVLc2ck8qjnohgpPtz2v7G6JtPQ2VJwjlcw+37mchpnK6GtIuv5NFWeTsLNPvxWTvpfjvOEfwKKzEVkSct2vscS/BIzSN0YRkeX81UpPqO8masJETu7OOccY4dswYFQeftv096XV5knuJGdm2T1+agvMXj8jEaHX905QihabvcbuS7X566mLWLwSY8PuRnk/u4eZ0deTl71Ef6hY+0yM88TzeNZY4luYwpVYyduOfrvhPTnr0pXSX9y5mCsyJMdyxxvwq599em+taItqCSNc90ChvZRUruUcT0JiO18Elpk7t8v41LWzacxkBSuvjQ/FFJayjDWrCTepAQ2vUH0oo/Jk3ovpwJJeVCP5CN+lFFaaMqy+nAyuChvrTI2kN9JAsi2ZOy4IBHMnkSCP+iqBexSWdxLazoUljJVlPUH2oorkV10pRc7b1zXb/hZOzuJvM86QWEXeELxOzHSIPcmiiiunVlF2RNTpRkrs//Z';

export const Default: ComponentStory<typeof Message> = () => (
  <Box>
    <MessageDivider>May, 24, 2020</MessageDivider>
    <Message className='customclass' clickable>
      <Message.LeftContainer>
        <Avatar url={avatarUrl} size={'x36'} />
      </Message.LeftContainer>
      <Message.Container>
        <Message.Header>
          <Message.NameContainer>
            <Message.Name>Haylie George</Message.Name>{' '}
            <Message.Username>@haylie.george</Message.Username>
          </Message.NameContainer>
          <Message.Roles>
            <Message.Role>Admin</Message.Role>
            <Message.Role>User</Message.Role>
            <Message.Role>Owner</Message.Role>
          </Message.Roles>
          <Message.Timestamp>12:00 PM</Message.Timestamp>
        </Message.Header>
        <Message.Body>
          Ut enim ad minim veniam,{' '}
          <Message.Highlight clickable variant='other'>
            channel
          </Message.Highlight>{' '}
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat a duis aute irure dolor in{' '}
          <Message.Highlight clickable variant='critical'>
            Haylie George
          </Message.Highlight>{' '}
          <Message.Highlight clickable variant='critical'>
            Haylie George
          </Message.Highlight>{' '}
          <Message.Highlight clickable variant='critical'>
            Haylie George
          </Message.Highlight>{' '}
          <Message.Highlight clickable variant='critical'>
            Haylie George
          </Message.Highlight>{' '}
          <Message.Highlight clickable variant='critical'>
            Haylie George
          </Message.Highlight>{' '}
          commodo consequat a duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Consectetur adipiscing commodo consequat a duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Consectetur adipiscing{' '}
          <Message.Highlight variant='critical'>
            highlighted text
          </Message.Highlight>
          touching text.{' '}
          <Message.Highlight clickable variant='relevant'>
            all
          </Message.Highlight>
          . elit, sed do eiusmod tempor incididunt
          <Message.Highlight clickable variant='link'>
            Room Name
          </Message.Highlight>
          ut labore et dolore magna
          <Message.Highlight clickable variant='other'>
            Gabriel.Henriques
          </Message.Highlight>
          . aliqua. Ut enim ad minim veniam...
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

export const WithSequential: ComponentStory<typeof Message> = () => (
  <Box>
    <MessageDivider>May, 24, 2020</MessageDivider>
    <Message className='customclass' clickable>
      <Message.LeftContainer>
        <Avatar url={avatarUrl} size={'x36'} />
      </Message.LeftContainer>
      <Message.Container>
        <Message.Header>
          <Message.NameContainer>
            <Message.Name>Haylie George</Message.Name>{' '}
            <Message.Username>@haylie.george</Message.Username>
          </Message.NameContainer>
          <Message.Roles>
            <Message.Role>Admin</Message.Role>
            <Message.Role>User</Message.Role>
            <Message.Role>Owner</Message.Role>
          </Message.Roles>
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
    <Message className='customclass' clickable sequential>
      <Message.LeftContainer />
      <Message.Container>
        <Message.Body>
          {'Test Message Emoji ->'}{' '}
          <MessageEmoji name='test' image={`url(${avatarUrl})`} />
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
          <MessageEmoji big name='test' image={`url(${avatarUrl})`} />
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

export const MessageWithThread: ComponentStory<typeof Message> = () => (
  <Box>
    <MessageDivider unreadLabel='Unread'>May, 24, 2020</MessageDivider>
    <Message className='customclass' clickable>
      <Message.LeftContainer>
        <Avatar url={avatarUrl} size={'x36'} />
      </Message.LeftContainer>
      <Message.Container>
        <Message.Header>
          <Message.NameContainer>
            <Message.Name>Haylie George</Message.Name>{' '}
            <Message.Username>@haylie.george</Message.Username>
          </Message.NameContainer>
          <Message.Roles>
            <Message.Role>Admin</Message.Role>
            <Message.Role>User</Message.Role>
            <Message.Role>Owner</Message.Role>
          </Message.Roles>
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
          <Avatar url={avatarUrl} size='x16' />
        </ThreadMessage.LeftContainer>
        <ThreadMessage.Container>
          <ThreadMessage.Message>
            <ThreadMessageEmoji image={`url(${avatarUrl})`} name='test' />
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

export const MessageSelected: ComponentStory<typeof Message> = () => {
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
            <Message.NameContainer>
              <Message.Name>Haylie George</Message.Name>{' '}
              <Message.Username>@haylie.george</Message.Username>
            </Message.NameContainer>
            <Message.Roles>
              <Message.Role>Admin</Message.Role>
              <Message.Role>User</Message.Role>
              <Message.Role>Owner</Message.Role>
            </Message.Roles>
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

export const MessageEditing: ComponentStory<typeof Message> = () => (
  <Box>
    <MessageDivider>May, 24, 2020</MessageDivider>
    <Message className='customclass' clickable>
      <Message.LeftContainer>
        <Avatar url={avatarUrl} size={'x36'} />
      </Message.LeftContainer>
      <Message.Container>
        <Message.Header>
          <Message.NameContainer>
            <Message.Name>Haylie George</Message.Name>{' '}
            <Message.Username>@haylie.george</Message.Username>
          </Message.NameContainer>
          <Message.Roles>
            <Message.Role>Admin</Message.Role>
            <Message.Role>User</Message.Role>
            <Message.Role>Owner</Message.Role>
          </Message.Roles>
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

export const MessageUnorderedList: ComponentStory<typeof Message> = () => (
  <Box>
    <MessageDivider>May, 24, 2020</MessageDivider>
    <Message className='customclass' clickable>
      <Message.LeftContainer>
        <Avatar url={avatarUrl} size={'x36'} />
      </Message.LeftContainer>
      <Message.Container>
        <Message.Header>
          <Message.NameContainer>
            <Message.Name>Haylie George</Message.Name>{' '}
            <Message.Username>@haylie.george</Message.Username>
          </Message.NameContainer>
          <Message.Roles>
            <Message.Role>Admin</Message.Role>
            <Message.Role>User</Message.Role>
            <Message.Role>Owner</Message.Role>
          </Message.Roles>
          <Message.Timestamp>12:00 PM</Message.Timestamp>
        </Message.Header>
        <Message.Body>
          Unordered list:
          <ul>
            <li>Ut enim ad minim</li>
            <li>Incididunt ut labore</li>
            <li>Labore et dolore</li>
          </ul>
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
  </Box>
);

export const MessageOrderedList: ComponentStory<typeof Message> = () => (
  <Box>
    <MessageDivider>May, 24, 2020</MessageDivider>
    <Message className='customclass' clickable>
      <Message.LeftContainer>
        <Avatar url={avatarUrl} size={'x36'} />
      </Message.LeftContainer>
      <Message.Container>
        <Message.Header>
          <Message.NameContainer>
            <Message.Name>Haylie George</Message.Name>{' '}
            <Message.Username>@haylie.george</Message.Username>
          </Message.NameContainer>
          <Message.Roles>
            <Message.Role>Admin</Message.Role>
            <Message.Role>User</Message.Role>
            <Message.Role>Owner</Message.Role>
          </Message.Roles>
          <Message.Timestamp>12:00 PM</Message.Timestamp>
        </Message.Header>
        <Message.Body>
          Ordered list:
          <ol>
            <li value={1}>Ut enim ad minim</li>
            <li value={2}>Incididunt ut labore</li>
            <li value={6}>Labore et dolore</li>
          </ol>
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
  </Box>
);

export const MessageHighlighted: ComponentStory<typeof Message> = () => (
  <Box>
    <MessageDivider>May, 24, 2020</MessageDivider>
    <Message className='customclass' highlight>
      <Message.LeftContainer>
        <Avatar url={avatarUrl} size={'x36'} />
      </Message.LeftContainer>
      <Message.Container>
        <Message.Header>
          <Message.NameContainer>
            <Message.Name>Haylie George</Message.Name>{' '}
            <Message.Username>@haylie.george</Message.Username>
          </Message.NameContainer>
          <Message.Roles>
            <Message.Role>Admin</Message.Role>
            <Message.Role>User</Message.Role>
            <Message.Role>Owner</Message.Role>
          </Message.Roles>
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

export const MessagePending: ComponentStory<typeof Message> = () => (
  <Box>
    <MessageDivider>May, 24, 2020</MessageDivider>
    <Message className='customclass' isPending>
      <Message.LeftContainer>
        <Avatar url={avatarUrl} size={'x36'} />
      </Message.LeftContainer>
      <Message.Container>
        <Message.Header>
          <Message.NameContainer>
            <Message.Name>Haylie George</Message.Name>{' '}
            <Message.Username>@haylie.george</Message.Username>
          </Message.NameContainer>
          <Message.Roles>
            <Message.Role>Admin</Message.Role>
            <Message.Role>User</Message.Role>
            <Message.Role>Owner</Message.Role>
          </Message.Roles>
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

export const MessageWithMetrics: ComponentStory<typeof Message> = () => (
  <Box>
    <MessageDivider>May, 24, 2020</MessageDivider>
    <Message className='customclass'>
      <Message.LeftContainer>
        <Avatar url={avatarUrl} size={'x36'} />
      </Message.LeftContainer>
      <Message.Container>
        <Message.Header>
          <Message.NameContainer>
            <Message.Name>Haylie George</Message.Name>{' '}
            <Message.Username>@haylie.george</Message.Username>
          </Message.NameContainer>
          <Message.Roles>
            <Message.Role>Admin</Message.Role>
            <Message.Role>User</Message.Role>
            <Message.Role>Owner</Message.Role>
          </Message.Roles>
          <Message.Timestamp>12:00 PM</Message.Timestamp>
        </Message.Header>
        <Message.Body>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </Message.Body>
        <Message.Block>
          <MessageMetrics>
            <MessageMetrics.Reply>Reply</MessageMetrics.Reply>
            <MessageMetrics.Item>
              <MessageMetrics.Item.Icon name='thread' />
              <MessageMetrics.Item.Label>1</MessageMetrics.Item.Label>
            </MessageMetrics.Item>
            <MessageMetrics.Item>
              <MessageMetrics.Item.Icon name='user' />
              <MessageMetrics.Item.Label>2</MessageMetrics.Item.Label>
            </MessageMetrics.Item>
            <MessageMetrics.Item>
              <MessageMetrics.Item.Icon name='clock' />
              <MessageMetrics.Item.Label>12:30 PM</MessageMetrics.Item.Label>
            </MessageMetrics.Item>
            <MessageMetrics.Following name='bell' />
          </MessageMetrics>
        </Message.Block>
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

export const MessageWithHeadings: ComponentStory<typeof Message> = () => (
  <Box>
    <MessageDivider>May, 24, 2020</MessageDivider>
    <Message className='customclass' clickable>
      <Message.LeftContainer>
        <Avatar url={avatarUrl} size={'x36'} />
      </Message.LeftContainer>
      <Message.Container>
        <Message.Header>
          <Message.NameContainer>
            <Message.Name>Haylie George</Message.Name>{' '}
            <Message.Username>@haylie.george</Message.Username>
          </Message.NameContainer>
          <Message.Roles>
            <Message.Role>Admin</Message.Role>
            <Message.Role>User</Message.Role>
            <Message.Role>Owner</Message.Role>
          </Message.Roles>
          <Message.Timestamp>12:00 PM</Message.Timestamp>
        </Message.Header>
        <Message.Body>
          <h1 style={{ marginTop: 0 }}>Heading 1</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <h2>Heading 2</h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          <h3>Heading 3</h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          <h4>Heading 4</h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
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

export const LotsOfReactions: ComponentStory<typeof Message> = () => (
  <Box>
    <MessageDivider>May, 24, 2020</MessageDivider>
    <Message className='customclass' clickable>
      <Message.LeftContainer>
        <Avatar url={avatarUrl} size={'x36'} />
      </Message.LeftContainer>
      <Message.Container>
        <Message.Header>
          <Message.NameContainer>
            <Message.Name>Haylie George</Message.Name>{' '}
            <Message.Username>@haylie.george</Message.Username>
          </Message.NameContainer>
          <Message.Roles>
            <Message.Role>Admin</Message.Role>
            <Message.Role>User</Message.Role>
            <Message.Role>Owner</Message.Role>
          </Message.Roles>
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
          {Array.from({ length: 100 }).map((_, index) => (
            <MessageReactions.Reaction counter={index} mine={!(index % 3)} />
          ))}
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
