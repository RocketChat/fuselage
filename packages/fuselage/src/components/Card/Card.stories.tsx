import { Button } from '@rocket.chat/fuselage';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Card, CardBody, CardCol, CardTitle } from '.';
import { Avatar } from '../Avatar';
import { Badge } from '../Badge';
import Box from '../Box/Box';
import { MenuItem, MenuV2 } from '../Menu';
import { Tag } from '../Tag';
import CardContent from './CardContent';
import CardControls from './CardControls';
import CardFramedIcon from './CardFramedIcon';
import CardHeader from './CardHeader';
import CardHorizontal from './CardHorizontal';

export default {
  title: 'Components/Card',
  component: Card,
  subcomponents: {
    CardHorizontal,
    CardHeader,
    CardTitle,
    CardCol,
    CardContent,
    CardBody,
    CardControls,
    // CardDivider,
    // CardColSection,
    // CardColTitle,
    // CardFooter,
  },
  parameters: {
    backgrounds: { default: 'dark' },
    layout: 'centered',
    controls: { hideNoControlsWarning: true },
  },
} as ComponentMeta<typeof Card>;

export const Horizontal: ComponentStory<typeof Card> = () => (
  <CardHorizontal aria-describedby='lalala'>
    <CardContent>
      <CardFramedIcon icon='document-eye' />
      <CardCol>
        <CardTitle variant='h3' info='Card info here'>
          Heading 3
        </CardTitle>
        <CardBody>
          Lorem ipsum dolor sit amet. In adipisci consequatur qui laudantium
          voluptatem rem praesentium earum ut consectetur.
        </CardBody>
      </CardCol>
    </CardContent>
    <CardControls>
      <Button>Button</Button>
      <Button primary>Button</Button>
      <Badge small variant='primary' />
      <Tag>Tag</Tag>
      <MenuV2 placement='bottom-end'>
        <MenuItem key='1'>Profile</MenuItem>
        <MenuItem key='2'>Chats</MenuItem>
        <MenuItem key='3'>Settings</MenuItem>
      </MenuV2>
      <span hidden />
    </CardControls>
  </CardHorizontal>
);
export const HorizontalNoIcon: ComponentStory<typeof Card> = () => (
  <CardHorizontal aria-describedby='lalala'>
    <CardContent column>
      <CardTitle variant='h3' info='Card info here'>
        Heading 3
      </CardTitle>
      <CardBody>
        Lorem ipsum dolor sit amet. In adipisci consequatur qui laudantium
        voluptatem rem praesentium earum ut consectetur.
      </CardBody>
    </CardContent>
    <CardControls>
      <Button>Button</Button>
      <Button primary>Button</Button>
      <Badge small variant='primary' />
      <Tag>Tag</Tag>
      <MenuV2 placement='bottom-end'>
        <MenuItem key='1'>Profile</MenuItem>
        <MenuItem key='2'>Chats</MenuItem>
        <MenuItem key='3'>Settings</MenuItem>
      </MenuV2>
      <span hidden />
    </CardControls>
  </CardHorizontal>
);

export const HorizontalNoAction: ComponentStory<typeof Card> = () => (
  <CardHorizontal>
    <CardFramedIcon icon='document-eye' />
    <CardCol>
      <CardTitle variant='h3'>Heading 3</CardTitle>
      <CardBody>
        Lorem ipsum dolor sit amet. In adipisci consequatur qui laudantium
        voluptatem rem praesentium earum ut consectetur.
      </CardBody>
    </CardCol>
  </CardHorizontal>
);

export const TitleH4: ComponentStory<typeof Card> = () => (
  <CardHorizontal>
    <CardCol>
      <CardTitle variant='h4'>Heading 4</CardTitle>
      <CardBody>
        Lorem ipsum dolor sit amet. In adipisci consequatur qui laudantium
        voluptatem rem praesentium earum ut consectetur.
      </CardBody>
    </CardCol>
  </CardHorizontal>
);
TitleH4.storyName = 'Title h4';

export const TitleH5: ComponentStory<typeof Card> = () => (
  <CardHorizontal>
    <CardCol>
      <CardTitle variant='h5'>Heading 5</CardTitle>
      <CardBody>
        Lorem ipsum dolor sit amet. In adipisci consequatur qui laudantium
        voluptatem rem praesentium earum ut consectetur.
      </CardBody>
    </CardCol>
  </CardHorizontal>
);
TitleH5.storyName = 'Title h5';

const imgUrl =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcEBgIDBQj/xAAuEAACAQQAAwcEAQUAAAAAAAABAgMABAUREiExBhMUIkFRYQcWcYGhFTJSgpH/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQBAP/EAB4RAAIBBQEBAQAAAAAAAAAAAAABAgMREiExE0HR/9oADAMBAAIRAxEAPwBuXuIkhBuMe5ib/AHQP49q4L3mLitryTLTSpOiHQI5k/HzXa/qbFOEudVTu1dumWvcTaNCZYZ7vU6g6LxqjOU/24dfs1Ouh9FnkMpd3Reeyx83hAxZZEhkdV9/MBrX71WGPvJcqrJBGveKATtuXXqNU0pu02bTHXD/AGvJAluyxxRd6F4x00o+NdKoVrjbzJdvVe1t5cVLc2ck8qjnohgpPtz2v7G6JtPQ2VJwjlcw+37mchpnK6GtIuv5NFWeTsLNPvxWTvpfjvOEfwKKzEVkSct2vscS/BIzSN0YRkeX81UpPqO8masJETu7OOccY4dswYFQeftv096XV5knuJGdm2T1+agvMXj8jEaHX905QihabvcbuS7X566mLWLwSY8PuRnk/u4eZ0deTl71Ef6hY+0yM88TzeNZY4luYwpVYyduOfrvhPTnr0pXSX9y5mCsyJMdyxxvwq599em+taItqCSNc90ChvZRUruUcT0JiO18Elpk7t8v41LWzacxkBSuvjQ/FFJayjDWrCTepAQ2vUH0oo/Jk3ovpwJJeVCP5CN+lFFaaMqy+nAyuChvrTI2kN9JAsi2ZOy4IBHMnkSCP+iqBexSWdxLazoUljJVlPUH2oorkV10pRc7b1zXb/hZOzuJvM86QWEXeELxOzHSIPcmiiiunVlF2RNTpRkrs//Z';
export const HorizontalWithCustomHeaderAndContent: ComponentStory<
  typeof Card
> = () => (
  <CardHorizontal>
    <CardContent>
      <CardCol>
        <CardHeader>
          <CardTitle variant='h4'>Heading 3</CardTitle>
          <Tag variant='featured'>Header tag</Tag>
        </CardHeader>
        <CardBody>
          <Box mie={4}>
            <Avatar url={imgUrl} />
          </Box>
          Lorem ipsum dolor sit amet. In adipisci consequatur qui laudantium rem
          praesentium earum ut consectetur. Lorem ipsum dolor sit amet. In
          adipisci consequatur qui laudantium rem praesentium earum ut
          consectetur.
        </CardBody>
      </CardCol>
    </CardContent>
  </CardHorizontal>
);
