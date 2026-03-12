import type { Meta, StoryFn } from '@storybook/react-webpack5';
import { useState } from 'react';

import { Avatar } from '../Avatar';
import { Box } from '../Box';

import Message from './Message';
import MessageBlock from './MessageBlock';
import MessageBody from './MessageBody';
import MessageContainer from './MessageContainer';
import { MessageDivider } from './MessageDivider';
import MessageEmoji from './MessageEmoji';
import MessageHeader from './MessageHeader';
import MessageHighlight from './MessageHighlight';
import MessageLeftContainer from './MessageLeftContainer';
import {
  MessageMetrics,
  MessageMetricsFollowing,
  MessageMetricsItem,
  MessageMetricsItemIcon,
  MessageMetricsItemLabel,
  MessageMetricsReply,
} from './MessageMetrics';
import MessageName from './MessageName';
import MessageNameContainer from './MessageNameContainer';
import MessageReactions, {
  MessageReaction,
  MessageReactionAction,
} from './MessageReactions';
import MessageRole from './MessageRole';
import MessageRoles from './MessageRoles';
import MessageTimestamp from './MessageTimestamp';
import {
  MessageToolbar,
  MessageToolbarItem,
  MessageToolbarWrapper,
} from './MessageToolbar';
import MessageUsername from './MessageUsername';
import {
  ThreadMessage,
  ThreadMessageBody,
  ThreadMessageContainer,
  ThreadMessageEmoji,
  ThreadMessageIconThread,
  ThreadMessageLeftContainer,
  ThreadMessageOrigin,
  ThreadMessageRow,
  ThreadMessageUnfollow,
} from './ThreadMessage';
import { avatarUrl } from './helpers';

export default {
  title: 'Message/Message',
  component: Message,
} satisfies Meta<typeof Message>;

export const Default: StoryFn<typeof Message> = () => (
  <Box>
    <MessageDivider>May, 24, 2020</MessageDivider>
    <Message className='customclass' clickable>
      <MessageLeftContainer>
        <Avatar url={avatarUrl} size={'x36'} />
      </MessageLeftContainer>
      <MessageContainer>
        <MessageHeader>
          <MessageNameContainer>
            <MessageName>Haylie George</MessageName>{' '}
            <MessageUsername>@haylie.george</MessageUsername>
          </MessageNameContainer>
          <MessageRoles>
            <MessageRole>Admin</MessageRole>
            <MessageRole>User</MessageRole>
            <MessageRole>Owner</MessageRole>
          </MessageRoles>
          <MessageTimestamp>12:00 PM</MessageTimestamp>
        </MessageHeader>
        <MessageBody>
          Ut enim ad minim veniam,{' '}
          <MessageHighlight clickable variant='other'>
            channel
          </MessageHighlight>{' '}
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat a duis aute irure dolor in{' '}
          <MessageHighlight clickable variant='critical'>
            Haylie George
          </MessageHighlight>{' '}
          <MessageHighlight clickable variant='critical'>
            Haylie George
          </MessageHighlight>{' '}
          <MessageHighlight clickable variant='critical'>
            Haylie George
          </MessageHighlight>{' '}
          <MessageHighlight clickable variant='critical'>
            Haylie George
          </MessageHighlight>{' '}
          <MessageHighlight clickable variant='critical'>
            Haylie George
          </MessageHighlight>{' '}
          commodo consequat a duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Consectetur adipiscing commodo consequat a duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Consectetur adipiscing{' '}
          <MessageHighlight variant='critical'>
            highlighted text
          </MessageHighlight>
          touching text.{' '}
          <MessageHighlight clickable variant='relevant'>
            all
          </MessageHighlight>
          . elit, sed do eiusmod tempor incididunt
          <MessageHighlight clickable variant='link'>
            Room Name
          </MessageHighlight>
          ut labore et dolore magna
          <MessageHighlight clickable variant='other'>
            Gabriel.Henriques
          </MessageHighlight>
          . aliqua. Ut enim ad minim veniam...
        </MessageBody>
        <MessageReactions>
          <MessageReaction mine counter={1} />
          <MessageReaction counter={2} />
          <MessageReaction counter={3} />
          <MessageReactionAction />
        </MessageReactions>
      </MessageContainer>
      <MessageToolbarWrapper>
        <MessageToolbar>
          <MessageToolbarItem icon='quote' />
          <MessageToolbarItem icon='clock' />
          <MessageToolbarItem icon='thread' />
        </MessageToolbar>
      </MessageToolbarWrapper>
    </Message>
  </Box>
);

export const WithSequential: StoryFn<typeof Message> = () => (
  <Box>
    <MessageDivider>May, 24, 2020</MessageDivider>
    <Message className='customclass' clickable>
      <MessageLeftContainer>
        <Avatar url={avatarUrl} size={'x36'} />
      </MessageLeftContainer>
      <MessageContainer>
        <MessageHeader>
          <MessageNameContainer>
            <MessageName>Haylie George</MessageName>{' '}
            <MessageUsername>@haylie.george</MessageUsername>
          </MessageNameContainer>
          <MessageRoles>
            <MessageRole>Admin</MessageRole>
            <MessageRole>User</MessageRole>
            <MessageRole>Owner</MessageRole>
          </MessageRoles>
          <MessageTimestamp>12:00 PM</MessageTimestamp>
        </MessageHeader>
        <MessageBody>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat a duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam...
        </MessageBody>
        <MessageReactions>
          <MessageReaction counter={1} />
          <MessageReaction counter={2} />
          <MessageReaction counter={3} />
          <MessageReactionAction />
        </MessageReactions>
      </MessageContainer>
      <MessageToolbarWrapper>
        <MessageToolbar>
          <MessageToolbarItem icon='quote' />
          <MessageToolbarItem icon='clock' />
          <MessageToolbarItem icon='thread' />
        </MessageToolbar>
      </MessageToolbarWrapper>
    </Message>
    <Message className='customclass' clickable sequential>
      <MessageLeftContainer />
      <MessageContainer>
        <MessageBody>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </MessageBody>
      </MessageContainer>
      <MessageToolbarWrapper>
        <MessageToolbar>
          <MessageToolbarItem icon='quote' />
          <MessageToolbarItem icon='clock' />
          <MessageToolbarItem icon='thread' />
        </MessageToolbar>
      </MessageToolbarWrapper>
    </Message>
    <Message className='customclass' clickable sequential>
      <MessageLeftContainer />
      <MessageContainer>
        <MessageBody>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </MessageBody>
      </MessageContainer>
    </Message>
    <Message className='customclass' clickable sequential>
      <MessageLeftContainer />
      <MessageContainer>
        <MessageBody>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </MessageBody>
      </MessageContainer>
      <MessageToolbarWrapper>
        <MessageToolbar>
          <MessageToolbarItem icon='quote' />
          <MessageToolbarItem icon='clock' />
          <MessageToolbarItem icon='thread' />
        </MessageToolbar>
      </MessageToolbarWrapper>
    </Message>
    <Message className='customclass' clickable sequential>
      <MessageLeftContainer />
      <MessageContainer>
        <MessageBody>
          {'Test Message Emoji ->'}{' '}
          <MessageEmoji name='test' image={`url(${avatarUrl})`} />
        </MessageBody>
      </MessageContainer>
      <MessageToolbarWrapper>
        <MessageToolbar>
          <MessageToolbarItem icon='quote' />
          <MessageToolbarItem icon='clock' />
          <MessageToolbarItem icon='thread' />
        </MessageToolbar>
      </MessageToolbarWrapper>
    </Message>
    <Message className='customclass' clickable sequential>
      <MessageLeftContainer />
      <MessageContainer>
        <MessageBody>
          <MessageEmoji big name='test' image={`url(${avatarUrl})`} />
        </MessageBody>
      </MessageContainer>
      <MessageToolbarWrapper>
        <MessageToolbar>
          <MessageToolbarItem icon='quote' />
          <MessageToolbarItem icon='clock' />
          <MessageToolbarItem icon='thread' />
        </MessageToolbar>
      </MessageToolbarWrapper>
    </Message>
  </Box>
);

export const MessageWithThread: StoryFn<typeof Message> = () => (
  <Box>
    <MessageDivider unreadLabel='Unread'>May, 24, 2020</MessageDivider>
    <Message className='customclass' clickable>
      <MessageLeftContainer>
        <Avatar url={avatarUrl} size={'x36'} />
      </MessageLeftContainer>
      <MessageContainer>
        <MessageHeader>
          <MessageNameContainer>
            <MessageName>Haylie George</MessageName>{' '}
            <MessageUsername>@haylie.george</MessageUsername>
          </MessageNameContainer>
          <MessageRoles>
            <MessageRole>Admin</MessageRole>
            <MessageRole>User</MessageRole>
            <MessageRole>Owner</MessageRole>
          </MessageRoles>
          <MessageTimestamp>12:00 PM</MessageTimestamp>
        </MessageHeader>
        <MessageBody>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat a duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam...
        </MessageBody>
        <MessageReactions>
          <MessageReaction counter={1} />
          <MessageReaction counter={2} />
          <MessageReaction counter={3} />
          <MessageReactionAction />
        </MessageReactions>
      </MessageContainer>
      <MessageToolbarWrapper>
        <MessageToolbar>
          <MessageToolbarItem icon='quote' />
          <MessageToolbarItem icon='clock' />
          <MessageToolbarItem icon='thread' />
        </MessageToolbar>
      </MessageToolbarWrapper>
    </Message>
    <Message className='customclass' clickable sequential>
      <MessageLeftContainer />
      <MessageContainer>
        <MessageBody>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </MessageBody>
      </MessageContainer>
      <MessageToolbarWrapper>
        <MessageToolbar>
          <MessageToolbarItem icon='quote' />
          <MessageToolbarItem icon='clock' />
          <MessageToolbarItem icon='thread' />
        </MessageToolbar>
      </MessageToolbarWrapper>
    </Message>
    <Message className='customclass' clickable sequential>
      <MessageLeftContainer />
      <MessageContainer>
        <MessageBody>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </MessageBody>
      </MessageContainer>
    </Message>
    <Message className='customclass' clickable sequential>
      <MessageLeftContainer />
      <MessageContainer>
        <MessageBody>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </MessageBody>
      </MessageContainer>
      <MessageToolbarWrapper>
        <MessageToolbar>
          <MessageToolbarItem icon='quote' />
          <MessageToolbarItem icon='clock' />
          <MessageToolbarItem icon='thread' />
        </MessageToolbar>
      </MessageToolbarWrapper>
    </Message>
    <ThreadMessage>
      <ThreadMessageRow>
        <ThreadMessageLeftContainer>
          <ThreadMessageIconThread />
        </ThreadMessageLeftContainer>
        <ThreadMessageContainer>
          <ThreadMessageOrigin>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat a duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam...
          </ThreadMessageOrigin>
          <ThreadMessageUnfollow />
        </ThreadMessageContainer>
      </ThreadMessageRow>
      <ThreadMessageRow>
        <ThreadMessageLeftContainer>
          <Avatar url={avatarUrl} size='x16' />
        </ThreadMessageLeftContainer>
        <ThreadMessageContainer>
          <ThreadMessageBody>
            <ThreadMessageEmoji image={`url(${avatarUrl})`} name='test' />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat a duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam...
          </ThreadMessageBody>
        </ThreadMessageContainer>
      </ThreadMessageRow>
    </ThreadMessage>
  </Box>
);

export const MessageSelected: StoryFn<typeof Message> = () => {
  const [selected, setSelected] = useState(true);
  return (
    <Box>
      <MessageDivider>May, 24, 2020</MessageDivider>
      <Message
        className='customclass'
        onClick={() => setSelected(!selected)}
        isSelected={selected}
      >
        <MessageLeftContainer>
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
        </MessageLeftContainer>
        <MessageContainer>
          <MessageHeader>
            <MessageNameContainer>
              <MessageName>Haylie George</MessageName>{' '}
              <MessageUsername>@haylie.george</MessageUsername>
            </MessageNameContainer>
            <MessageRoles>
              <MessageRole>Admin</MessageRole>
              <MessageRole>User</MessageRole>
              <MessageRole>Owner</MessageRole>
            </MessageRoles>
            <MessageTimestamp>12:00 PM</MessageTimestamp>
          </MessageHeader>
          <MessageBody>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat a duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam...
          </MessageBody>
          <MessageReactions>
            <MessageReaction counter={1} />
            <MessageReaction counter={2} />
            <MessageReaction counter={3} />
            <MessageReactionAction />
          </MessageReactions>
        </MessageContainer>
      </Message>
    </Box>
  );
};

export const MessageEditing: StoryFn<typeof Message> = () => (
  <Box>
    <MessageDivider>May, 24, 2020</MessageDivider>
    <Message className='customclass' clickable>
      <MessageLeftContainer>
        <Avatar url={avatarUrl} size={'x36'} />
      </MessageLeftContainer>
      <MessageContainer>
        <MessageHeader>
          <MessageNameContainer>
            <MessageName>Haylie George</MessageName>{' '}
            <MessageUsername>@haylie.george</MessageUsername>
          </MessageNameContainer>
          <MessageRoles>
            <MessageRole>Admin</MessageRole>
            <MessageRole>User</MessageRole>
            <MessageRole>Owner</MessageRole>
          </MessageRoles>
          <MessageTimestamp>12:00 PM</MessageTimestamp>
        </MessageHeader>
        <MessageBody>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat a duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam...
        </MessageBody>
        <MessageReactions>
          <MessageReaction counter={1} />
          <MessageReaction counter={2} />
          <MessageReaction counter={3} />
          <MessageReactionAction />
        </MessageReactions>
      </MessageContainer>
      <MessageToolbarWrapper>
        <MessageToolbar>
          <MessageToolbarItem icon='quote' />
          <MessageToolbarItem icon='clock' />
          <MessageToolbarItem icon='thread' />
        </MessageToolbar>
      </MessageToolbarWrapper>
    </Message>
    <Message className='customclass' clickable sequential isEditing>
      <MessageLeftContainer />
      <MessageContainer>
        <MessageBody>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </MessageBody>
      </MessageContainer>
      <MessageToolbarWrapper>
        <MessageToolbar>
          <MessageToolbarItem icon='quote' />
          <MessageToolbarItem icon='clock' />
          <MessageToolbarItem icon='thread' />
        </MessageToolbar>
      </MessageToolbarWrapper>
    </Message>
    <Message className='customclass' clickable sequential>
      <MessageLeftContainer />
      <MessageContainer>
        <MessageBody>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </MessageBody>
      </MessageContainer>
    </Message>
    <Message className='customclass' clickable sequential>
      <MessageLeftContainer />
      <MessageContainer>
        <MessageBody>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </MessageBody>
      </MessageContainer>
      <MessageToolbarWrapper>
        <MessageToolbar>
          <MessageToolbarItem icon='quote' />
          <MessageToolbarItem icon='clock' />
          <MessageToolbarItem icon='thread' />
        </MessageToolbar>
      </MessageToolbarWrapper>
    </Message>
  </Box>
);

export const MessageUnorderedList: StoryFn<typeof Message> = () => (
  <Box>
    <MessageDivider>May, 24, 2020</MessageDivider>
    <Message className='customclass' clickable>
      <MessageLeftContainer>
        <Avatar url={avatarUrl} size={'x36'} />
      </MessageLeftContainer>
      <MessageContainer>
        <MessageHeader>
          <MessageNameContainer>
            <MessageName>Haylie George</MessageName>{' '}
            <MessageUsername>@haylie.george</MessageUsername>
          </MessageNameContainer>
          <MessageRoles>
            <MessageRole>Admin</MessageRole>
            <MessageRole>User</MessageRole>
            <MessageRole>Owner</MessageRole>
          </MessageRoles>
          <MessageTimestamp>12:00 PM</MessageTimestamp>
        </MessageHeader>
        <MessageBody>
          Unordered list:
          <ul>
            <li>Ut enim ad minim</li>
            <li>Incididunt ut labore</li>
            <li>Labore et dolore</li>
          </ul>
        </MessageBody>
        <MessageReactions>
          <MessageReaction counter={1} />
          <MessageReaction counter={2} />
          <MessageReaction counter={3} />
          <MessageReactionAction />
        </MessageReactions>
      </MessageContainer>
      <MessageToolbarWrapper>
        <MessageToolbar>
          <MessageToolbarItem icon='quote' />
          <MessageToolbarItem icon='clock' />
          <MessageToolbarItem icon='thread' />
        </MessageToolbar>
      </MessageToolbarWrapper>
    </Message>
  </Box>
);

export const MessageOrderedList: StoryFn<typeof Message> = () => (
  <Box>
    <MessageDivider>May, 24, 2020</MessageDivider>
    <Message className='customclass' clickable>
      <MessageLeftContainer>
        <Avatar url={avatarUrl} size={'x36'} />
      </MessageLeftContainer>
      <MessageContainer>
        <MessageHeader>
          <MessageNameContainer>
            <MessageName>Haylie George</MessageName>{' '}
            <MessageUsername>@haylie.george</MessageUsername>
          </MessageNameContainer>
          <MessageRoles>
            <MessageRole>Admin</MessageRole>
            <MessageRole>User</MessageRole>
            <MessageRole>Owner</MessageRole>
          </MessageRoles>
          <MessageTimestamp>12:00 PM</MessageTimestamp>
        </MessageHeader>
        <MessageBody>
          Ordered list:
          <ol>
            <li value={1}>Ut enim ad minim</li>
            <li value={2}>Incididunt ut labore</li>
            <li value={6}>Labore et dolore</li>
          </ol>
        </MessageBody>
        <MessageReactions>
          <MessageReaction counter={1} />
          <MessageReaction counter={2} />
          <MessageReaction counter={3} />
          <MessageReactionAction />
        </MessageReactions>
      </MessageContainer>
      <MessageToolbarWrapper>
        <MessageToolbar>
          <MessageToolbarItem icon='quote' />
          <MessageToolbarItem icon='clock' />
          <MessageToolbarItem icon='thread' />
        </MessageToolbar>
      </MessageToolbarWrapper>
    </Message>
  </Box>
);

export const MessageHighlighted: StoryFn<typeof Message> = () => (
  <Box>
    <MessageDivider>May, 24, 2020</MessageDivider>
    <Message className='customclass' highlight>
      <MessageLeftContainer>
        <Avatar url={avatarUrl} size={'x36'} />
      </MessageLeftContainer>
      <MessageContainer>
        <MessageHeader>
          <MessageNameContainer>
            <MessageName>Haylie George</MessageName>{' '}
            <MessageUsername>@haylie.george</MessageUsername>
          </MessageNameContainer>
          <MessageRoles>
            <MessageRole>Admin</MessageRole>
            <MessageRole>User</MessageRole>
            <MessageRole>Owner</MessageRole>
          </MessageRoles>
          <MessageTimestamp>12:00 PM</MessageTimestamp>
        </MessageHeader>
        <MessageBody>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat a duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam...
        </MessageBody>
        <MessageReactions>
          <MessageReaction counter={1} />
          <MessageReaction counter={2} />
          <MessageReaction counter={3} />
          <MessageReactionAction />
        </MessageReactions>
      </MessageContainer>
      <MessageToolbarWrapper>
        <MessageToolbar>
          <MessageToolbarItem icon='quote' />
          <MessageToolbarItem icon='clock' />
          <MessageToolbarItem icon='thread' />
        </MessageToolbar>
      </MessageToolbarWrapper>
    </Message>
    <Message className='customclass' sequential>
      <MessageLeftContainer />
      <MessageContainer>
        <MessageBody>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </MessageBody>
      </MessageContainer>
      <MessageToolbarWrapper>
        <MessageToolbar>
          <MessageToolbarItem icon='quote' />
          <MessageToolbarItem icon='clock' />
          <MessageToolbarItem icon='thread' />
        </MessageToolbar>
      </MessageToolbarWrapper>
    </Message>
    <Message className='customclass' sequential>
      <MessageLeftContainer />
      <MessageContainer>
        <MessageBody>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </MessageBody>
      </MessageContainer>
    </Message>
    <Message className='customclass' sequential>
      <MessageLeftContainer />
      <MessageContainer>
        <MessageBody>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </MessageBody>
      </MessageContainer>
      <MessageToolbarWrapper>
        <MessageToolbar>
          <MessageToolbarItem icon='quote' />
          <MessageToolbarItem icon='clock' />
          <MessageToolbarItem icon='thread' />
        </MessageToolbar>
      </MessageToolbarWrapper>
    </Message>
  </Box>
);

export const MessagePending: StoryFn<typeof Message> = () => (
  <Box>
    <MessageDivider>May, 24, 2020</MessageDivider>
    <Message className='customclass' isPending>
      <MessageLeftContainer>
        <Avatar url={avatarUrl} size={'x36'} />
      </MessageLeftContainer>
      <MessageContainer>
        <MessageHeader>
          <MessageNameContainer>
            <MessageName>Haylie George</MessageName>{' '}
            <MessageUsername>@haylie.george</MessageUsername>
          </MessageNameContainer>
          <MessageRoles>
            <MessageRole>Admin</MessageRole>
            <MessageRole>User</MessageRole>
            <MessageRole>Owner</MessageRole>
          </MessageRoles>
          <MessageTimestamp>12:00 PM</MessageTimestamp>
        </MessageHeader>
        <MessageBody>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat a duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam...
        </MessageBody>
      </MessageContainer>
      <MessageToolbarWrapper>
        <MessageToolbar>
          <MessageToolbarItem icon='quote' />
          <MessageToolbarItem icon='clock' />
          <MessageToolbarItem icon='thread' />
        </MessageToolbar>
      </MessageToolbarWrapper>
    </Message>
    <Message className='customclass' isPending sequential>
      <MessageLeftContainer />
      <MessageContainer>
        <MessageBody>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </MessageBody>
      </MessageContainer>
      <MessageToolbarWrapper>
        <MessageToolbar>
          <MessageToolbarItem icon='quote' />
          <MessageToolbarItem icon='clock' />
          <MessageToolbarItem icon='thread' />
        </MessageToolbar>
      </MessageToolbarWrapper>
    </Message>
    <Message className='customclass' isPending sequential>
      <MessageLeftContainer />
      <MessageContainer>
        <MessageBody>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </MessageBody>
      </MessageContainer>
    </Message>
    <Message className='customclass' isPending sequential>
      <MessageLeftContainer />
      <MessageContainer>
        <MessageBody>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </MessageBody>
      </MessageContainer>
      <MessageToolbarWrapper>
        <MessageToolbar>
          <MessageToolbarItem icon='quote' />
          <MessageToolbarItem icon='clock' />
          <MessageToolbarItem icon='thread' />
        </MessageToolbar>
      </MessageToolbarWrapper>
    </Message>
  </Box>
);

export const MessageWithMetrics: StoryFn<typeof Message> = () => (
  <Box>
    <MessageDivider>May, 24, 2020</MessageDivider>
    <Message className='customclass'>
      <MessageLeftContainer>
        <Avatar url={avatarUrl} size={'x36'} />
      </MessageLeftContainer>
      <MessageContainer>
        <MessageHeader>
          <MessageNameContainer>
            <MessageName>Haylie George</MessageName>{' '}
            <MessageUsername>@haylie.george</MessageUsername>
          </MessageNameContainer>
          <MessageRoles>
            <MessageRole>Admin</MessageRole>
            <MessageRole>User</MessageRole>
            <MessageRole>Owner</MessageRole>
          </MessageRoles>
          <MessageTimestamp>12:00 PM</MessageTimestamp>
        </MessageHeader>
        <MessageBody>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </MessageBody>
        <MessageBlock>
          <MessageMetrics>
            <MessageMetricsReply>Reply</MessageMetricsReply>
            <MessageMetricsItem>
              <MessageMetricsItemIcon name='thread' />
              <MessageMetricsItemLabel>1</MessageMetricsItemLabel>
            </MessageMetricsItem>
            <MessageMetricsItem>
              <MessageMetricsItemIcon name='user' />
              <MessageMetricsItemLabel>2</MessageMetricsItemLabel>
            </MessageMetricsItem>
            <MessageMetricsItem>
              <MessageMetricsItemIcon name='clock' />
              <MessageMetricsItemLabel>12:30 PM</MessageMetricsItemLabel>
            </MessageMetricsItem>
            <MessageMetricsFollowing name='bell' />
          </MessageMetrics>
        </MessageBlock>
      </MessageContainer>
      <MessageToolbarWrapper>
        <MessageToolbar>
          <MessageToolbarItem icon='quote' />
          <MessageToolbarItem icon='clock' />
          <MessageToolbarItem icon='thread' />
        </MessageToolbar>
      </MessageToolbarWrapper>
    </Message>
  </Box>
);

export const MessageWithHeadings: StoryFn<typeof Message> = () => (
  <Box>
    <MessageDivider>May, 24, 2020</MessageDivider>
    <Message className='customclass' clickable>
      <MessageLeftContainer>
        <Avatar url={avatarUrl} size={'x36'} />
      </MessageLeftContainer>
      <MessageContainer>
        <MessageHeader>
          <MessageNameContainer>
            <MessageName>Haylie George</MessageName>{' '}
            <MessageUsername>@haylie.george</MessageUsername>
          </MessageNameContainer>
          <MessageRoles>
            <MessageRole>Admin</MessageRole>
            <MessageRole>User</MessageRole>
            <MessageRole>Owner</MessageRole>
          </MessageRoles>
          <MessageTimestamp>12:00 PM</MessageTimestamp>
        </MessageHeader>
        <MessageBody>
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
        </MessageBody>
      </MessageContainer>
      <MessageToolbarWrapper>
        <MessageToolbar>
          <MessageToolbarItem icon='quote' />
          <MessageToolbarItem icon='clock' />
          <MessageToolbarItem icon='thread' />
        </MessageToolbar>
      </MessageToolbarWrapper>
    </Message>
  </Box>
);

export const LotsOfReactions: StoryFn<typeof Message> = () => (
  <Box>
    <MessageDivider>May, 24, 2020</MessageDivider>
    <Message className='customclass' clickable>
      <MessageLeftContainer>
        <Avatar url={avatarUrl} size={'x36'} />
      </MessageLeftContainer>
      <MessageContainer>
        <MessageHeader>
          <MessageNameContainer>
            <MessageName>Haylie George</MessageName>{' '}
            <MessageUsername>@haylie.george</MessageUsername>
          </MessageNameContainer>
          <MessageRoles>
            <MessageRole>Admin</MessageRole>
            <MessageRole>User</MessageRole>
            <MessageRole>Owner</MessageRole>
          </MessageRoles>
          <MessageTimestamp>12:00 PM</MessageTimestamp>
        </MessageHeader>
        <MessageBody>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat a duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam...
        </MessageBody>
        <MessageReactions>
          {Array.from({ length: 100 }).map((_, index) => (
            <MessageReaction key={index} counter={index} mine={!(index % 3)} />
          ))}
          <MessageReactionAction />
        </MessageReactions>
      </MessageContainer>
      <MessageToolbarWrapper>
        <MessageToolbar>
          <MessageToolbarItem icon='quote' />
          <MessageToolbarItem icon='clock' />
          <MessageToolbarItem icon='thread' />
        </MessageToolbar>
      </MessageToolbarWrapper>
    </Message>
  </Box>
);

export const BlockAfterHeader: StoryFn<typeof Message> = () => (
  <Box>
    <MessageDivider>May, 24, 2020</MessageDivider>
    <Message className='customclass' clickable>
      <MessageLeftContainer>
        <Avatar url={avatarUrl} size={'x36'} />
      </MessageLeftContainer>
      <MessageContainer>
        <MessageHeader>
          <MessageNameContainer>
            <MessageName>Haylie George</MessageName>{' '}
            <MessageUsername>@haylie.george</MessageUsername>
          </MessageNameContainer>
          <MessageRoles>
            <MessageRole>Admin</MessageRole>
            <MessageRole>User</MessageRole>
            <MessageRole>Owner</MessageRole>
          </MessageRoles>
          <MessageTimestamp>12:00 PM</MessageTimestamp>
        </MessageHeader>
        <MessageBlock>
          <Box
            width='full'
            bg='status-background-success'
            height='200px'
            border='1px solid'
            borderColor='stroke-extra-light'
            borderRadius='4px'
          />
        </MessageBlock>
      </MessageContainer>
      <MessageToolbarWrapper>
        <MessageToolbar>
          <MessageToolbarItem icon='quote' />
          <MessageToolbarItem icon='clock' />
          <MessageToolbarItem icon='thread' />
        </MessageToolbar>
      </MessageToolbarWrapper>
    </Message>
  </Box>
);
