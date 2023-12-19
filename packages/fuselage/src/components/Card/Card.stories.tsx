import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Card, CardBody, CardCol, CardTitle } from '.';
import { Avatar } from '../Avatar';
import { Badge } from '../Badge';
import { Button, IconButton } from '../Button';
import { Icon } from '../Icon';
import { Tag } from '../Tag';
import CardControls from './CardControls';
import CardHeader from './CardHeader';
import CardRow from './CardRow';

export default {
  title: 'Containers/Card',
  component: Card,
  subcomponents: {
    CardHeader,
    CardTitle,
    CardCol,
    CardRow,
    CardBody,
    CardControls,
  },
  parameters: {
    backgrounds: { default: 'dark' },
    layout: 'centered',
    controls: { hideNoControlsWarning: true },
  },
} as ComponentMeta<typeof Card>;

export const Horizontal: ComponentStory<typeof Card> = () => (
  <Card horizontal>
    <CardRow>
      <CardCol>
        <Icon name='document-eye' size='x24' />
      </CardCol>
      <CardCol>
        <CardTitle variant='h3' info='Card info here'>
          Heading 3
        </CardTitle>
        <CardBody>
          Lorem ipsum dolor sit amet. In adipisci consequatur qui laudantium
          voluptatem rem praesentium earum ut consectetur.
        </CardBody>
      </CardCol>
    </CardRow>
    <CardControls>
      <Button medium>Button</Button>
      <Button medium primary>
        Button
      </Button>
      <Badge small variant='primary' />
      <Tag>Tag</Tag>
      <IconButton icon='menu' small aria-label='menu' />
    </CardControls>
  </Card>
);

export const HorizontalNoIcon: ComponentStory<typeof Card> = () => (
  <Card horizontal>
    <CardCol>
      <CardTitle variant='h3' info='Card info here'>
        Heading 3
      </CardTitle>
      <CardBody>
        Lorem ipsum dolor sit amet. In adipisci consequatur qui laudantium
        voluptatem rem praesentium earum ut consectetur.
      </CardBody>
    </CardCol>
    <CardControls>
      <Badge small variant='primary' />
      <Tag>Card tag</Tag>
      <IconButton icon='menu' small aria-label='menu' />
    </CardControls>
  </Card>
);

export const HorizontalNoAction: ComponentStory<typeof Card> = () => (
  <Card horizontal>
    <CardRow>
      <Icon name='document-eye' size='x24' />
      <CardCol>
        <CardTitle variant='h3'>Heading 3</CardTitle>
        <CardBody>
          Lorem ipsum dolor sit amet. In adipisci consequatur qui laudantium
          voluptatem rem praesentium earum ut consectetur.
        </CardBody>
      </CardCol>
    </CardRow>
  </Card>
);

export const TitleH4: ComponentStory<typeof Card> = () => (
  <Card horizontal>
    <CardCol>
      <CardTitle variant='h4'>Heading 4</CardTitle>
      <CardBody>
        Lorem ipsum dolor sit amet. In adipisci consequatur qui laudantium
        voluptatem rem praesentium earum ut consectetur.
      </CardBody>
    </CardCol>
  </Card>
);
TitleH4.storyName = 'Title h4';

export const TitleH5: ComponentStory<typeof Card> = () => (
  <Card horizontal>
    <CardCol>
      <CardTitle variant='h5'>Heading 5</CardTitle>
      <CardBody>
        Lorem ipsum dolor sit amet. In adipisci consequatur qui laudantium
        voluptatem rem praesentium earum ut consectetur.
      </CardBody>
    </CardCol>
  </Card>
);
TitleH5.storyName = 'Title h5';

const imgUrl =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcEBgIDBQj/xAAuEAACAQQAAwcEAQUAAAAAAAABAgMABAUREiExBhMUIkFRYQcWcYGhFTJSgpH/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQBAP/EAB4RAAIBBQEBAQAAAAAAAAAAAAABAgMREiExE0HR/9oADAMBAAIRAxEAPwBuXuIkhBuMe5ib/AHQP49q4L3mLitryTLTSpOiHQI5k/HzXa/qbFOEudVTu1dumWvcTaNCZYZ7vU6g6LxqjOU/24dfs1Ouh9FnkMpd3Reeyx83hAxZZEhkdV9/MBrX71WGPvJcqrJBGveKATtuXXqNU0pu02bTHXD/AGvJAluyxxRd6F4x00o+NdKoVrjbzJdvVe1t5cVLc2ck8qjnohgpPtz2v7G6JtPQ2VJwjlcw+37mchpnK6GtIuv5NFWeTsLNPvxWTvpfjvOEfwKKzEVkSct2vscS/BIzSN0YRkeX81UpPqO8masJETu7OOccY4dswYFQeftv096XV5knuJGdm2T1+agvMXj8jEaHX905QihabvcbuS7X566mLWLwSY8PuRnk/u4eZ0deTl71Ef6hY+0yM88TzeNZY4luYwpVYyduOfrvhPTnr0pXSX9y5mCsyJMdyxxvwq599em+taItqCSNc90ChvZRUruUcT0JiO18Elpk7t8v41LWzacxkBSuvjQ/FFJayjDWrCTepAQ2vUH0oo/Jk3ovpwJJeVCP5CN+lFFaaMqy+nAyuChvrTI2kN9JAsi2ZOy4IBHMnkSCP+iqBexSWdxLazoUljJVlPUH2oorkV10pRc7b1zXb/hZOzuJvM86QWEXeELxOzHSIPcmiiiunVlF2RNTpRkrs//Z';

export const HorizontalCustom: ComponentStory<typeof Card> = () => (
  <Card horizontal>
    <CardRow>
      <CardCol>
        <Avatar url={imgUrl} alt='avatar' />
      </CardCol>
      <CardCol>
        <CardHeader>
          <CardTitle variant='h4'>Heading 3</CardTitle>
          <Tag variant='featured'>Header tag</Tag>
        </CardHeader>
        <CardBody>
          Lorem ipsum dolor sit amet. In adipisci consequatur qui laudantium rem
          praesentium earum ut consectetur.
        </CardBody>
      </CardCol>
    </CardRow>

    <CardControls>
      <Badge small variant='primary' />
      <Tag>Card tag</Tag>
      <IconButton icon='menu' small aria-label='menu' />
    </CardControls>
  </Card>
);

export const Vertical: ComponentStory<typeof Card> = () => (
  <Card>
    <CardCol>
      <CardHeader>
        <Icon name='address-book' size='x24' />
        <CardTitle variant='h3' info='Heading info'>
          Heading 3
        </CardTitle>
      </CardHeader>
      <CardBody>
        Lorem ipsum dolor sit amet. In adipisci consequatur qui laudantium rem
        praesentium earum ut consectetur. Lorem ipsum dolor sit amet. In
        adipisci consequatur qui laudantium rem praesentium earum ut
        consectetur.
      </CardBody>
    </CardCol>
    <CardControls>
      <Button medium primary>
        Button
      </Button>
      <Button medium>Button</Button>
    </CardControls>
  </Card>
);

export const VerticalNoIcon: ComponentStory<typeof Card> = () => (
  <Card>
    <CardCol>
      <CardHeader>
        <CardTitle variant='h3'>Heading 3</CardTitle>
      </CardHeader>
      <CardBody>
        Lorem ipsum dolor sit amet. In adipisci consequatur qui laudantium rem
        praesentium earum ut consectetur. Lorem ipsum dolor sit amet. In
        adipisci consequatur qui laudantium rem praesentium earum ut
        consectetur.
      </CardBody>
    </CardCol>
    <CardControls>
      <Button medium>Button</Button>
    </CardControls>
  </Card>
);

export const Hero: ComponentStory<typeof Card> = () => (
  <Card hero>
    <CardCol>
      <CardHeader>
        <CardTitle variant='h3'>Heading 3</CardTitle>
      </CardHeader>
      <CardBody>
        Lorem ipsum dolor sit amet. In adipisci consequatur qui laudantium rem
        praesentium earum ut consectetur. Lorem ipsum dolor sit amet. In
        adipisci consequatur qui laudantium rem praesentium earum ut
        consectetur.
      </CardBody>
    </CardCol>
    <CardControls>
      <Button medium>Button</Button>
    </CardControls>
  </Card>
);

export const VerticalCustom: ComponentStory<typeof Card> = () => (
  <Card>
    <CardCol>
      <CardHeader>
        <Avatar url={imgUrl} alt='avatar' />
        <CardTitle variant='h3'>Heading 3</CardTitle>
      </CardHeader>
      <CardBody>
        <CardCol>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>
              In adipisci consequatur qui laudantium rem praesentium earum ut.
            </li>
            <li>Consectetur.</li>
          </ul>
        </CardCol>
        <CardCol>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>
              In adipisci consequatur qui laudantium rem praesentium earum ut.
            </li>
            <li>Consectetur.</li>
          </ul>
        </CardCol>
      </CardBody>
    </CardCol>
    <CardControls>
      <Button medium>Button</Button>
    </CardControls>
  </Card>
);
