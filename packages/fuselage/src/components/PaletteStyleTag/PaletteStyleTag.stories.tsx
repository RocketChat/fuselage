import type { ComponentStory } from '@storybook/react';
import React from 'react';

import {
  Avatar,
  Box,
  Button,
  Message,
  MessageDivider,
  MessageReactions,
  MessageReaction,
  MessageToolbar,
  MessageToolbarItem,
  MessageToolbarWrapper,
  Bubble,
  Card,
  CardHeader,
  FramedIcon,
  CardTitle,
  CardBody,
  CardControls,
  PaletteStyleTag,
} from '..';

const avatarUrl =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcEBgIDBQj/xAAuEAACAQQAAwcEAQUAAAAAAAABAgMABAUREiExBhMUIkFRYQcWcYGhFTJSgpH/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQBAP/EAB4RAAIBBQEBAQAAAAAAAAAAAAABAgMREiExE0HR/9oADAMBAAIRAxEAPwBuXuIkhBuMe5ib/AHQP49q4L3mLitryTLTSpOiHQI5k/HzXa/qbFOEudVTu1dumWvcTaNCZYZ7vU6g6LxqjOU/24dfs1Ouh9FnkMpd3Reeyx83hAxZZEhkdV9/MBrX71WGPvJcqrJBGveKATtuXXqNU0pu02bTHXD/AGvJAluyxxRd6F4x00o+NdKoVrjbzJdvVe1t5cVLc2ck8qjnohgpPtz2v7G6JtPQ2VJwjlcw+37mchpnK6GtIuv5NFWeTsLNPvxWTvpfjvOEfwKKzEVkSct2vscS/BIzSN0YRkeX81UpPqO8masJETu7OOccY4dswYFQeftv096XV5knuJGdm2T1+agvMXj8jEaHX905QihabvcbuS7X566mLWLwSY8PuRnk/u4eZ0deTl71Ef6hY+0yM88TzeNZY4luYwpVYyduOfrvhPTnr0pXSX9y5mCsyJMdyxxvwq599em+taItqCSNc90ChvZRUruUcT0JiO18Elpk7t8v41LWzacxkBSuvjQ/FFJayjDWrCTepAQ2vUH0oo/Jk3ovpwJJeVCP5CN+lFFaaMqy+nAyuChvrTI2kN9JAsi2ZOy4IBHMnkSCP+iqBexSWdxLazoUljJVlPUH2oorkV10pRc7b1zXb/hZOzuJvM86QWEXeELxOzHSIPcmiiiunVlF2RNTpRkrs//Z';

export default {
  title: 'Themes',
  component: PaletteStyleTag,
};

const Template: ComponentStory<typeof PaletteStyleTag> = (args) => (
  <>
    <PaletteStyleTag {...args} />
    <Card>
      <CardHeader>
        <FramedIcon icon='address-book' />
        <CardTitle variant='h3'>{args.theme}-theme</CardTitle>
      </CardHeader>
      <CardBody>
        Lorem ipsum dolor sit amet. In adipisci consequatur qui laudantium rem
        praesentium earum ut consectetur. Lorem ipsum dolor sit amet. In
        adipisci consequatur qui laudantium rem praesentium earum ut
        consectetur.
      </CardBody>
      <CardControls>
        <Button medium primary>
          Button
        </Button>
        <Button medium danger>
          Button
        </Button>
        <Button medium>Button</Button>
      </CardControls>
    </Card>
  </>
);

export const Light = Template.bind({});
Light.args = {
  theme: 'light',
};

export const Dark = Template.bind({});
Dark.args = {
  theme: 'dark',
};

export const HighContrast = Template.bind({});
HighContrast.args = {
  theme: 'high-contrast',
};

const MessageTemplate: ComponentStory<typeof PaletteStyleTag> = (args) => (
  <Box bg='room'>
    <PaletteStyleTag {...args} />
    <MessageDivider>
      <Bubble small secondary>
        May, 24, 2020
      </Bubble>
    </MessageDivider>
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
          <MessageReaction mine counter={1} />
          <MessageReaction counter={2} />
          <MessageReaction counter={3} />
          <MessageReaction />
        </MessageReactions>
      </Message.Container>
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

export const MessageLight = MessageTemplate.bind({});
MessageLight.args = {
  theme: 'light',
};

export const MessageDark = MessageTemplate.bind({});
MessageDark.args = {
  theme: 'dark',
};

export const MessageHighContrast = MessageTemplate.bind({});
MessageHighContrast.args = {
  theme: 'high-contrast',
};

const Custom: ComponentStory<typeof PaletteStyleTag> = (args) => (
  <>
    <PaletteStyleTag {...args} />
    <div
      style={{
        backgroundColor: 'var(--fuselage-color-surface-neutral)',
        color: 'var(--fuselage-color-font-default)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h2>Custom prefix</h2>
      <h4>--fuselage-color</h4>
      <div style={{ width: '100%' }}>
        <ul>
          <li style={{ color: 'var(--fuselage-color-font-default)' }}>
            font-default
          </li>
          <li style={{ color: 'var(--fuselage-color-font-danger)' }}>
            font-danger
          </li>
          <li style={{ color: 'var(--fuselage-color-font-info)' }}>
            font-info
          </li>
        </ul>
      </div>
    </div>
  </>
);
export const CustomPrefix = Custom.bind({});
CustomPrefix.args = {
  theme: 'light',
  prefix: '--fuselage-color',
};
