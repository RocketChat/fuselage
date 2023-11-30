import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { ComponentProps } from 'react';
import React from 'react';

import { Badge } from '../Badge';
import { Button, IconButton } from '../Button';
import Card from '../Card/Card';
import CardBody from '../Card/CardBody';
import CardCol from '../Card/CardCol';
import CardControls from '../Card/CardControls';
import CardHeader from '../Card/CardHeader';
import CardRow from '../Card/CardRow';
import CardTitle from '../Card/CardTitle';
import { Icon } from '../Icon';
import { Tag } from '../Tag';
import { CardGroup } from './CardGroup';

export default {
  title: 'Components/CardGroup',
  component: CardGroup,
  parameters: {
    backgrounds: { default: 'dark' },
    layout: 'centered',
    controls: { hideNoControlsWarning: true },
  },
} as ComponentMeta<typeof CardGroup>;

const CardItem = (props: ComponentProps<typeof Card>) => (
  <Card width='x260' {...props}>
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
const CardHorizontal: ComponentStory<typeof Card> = (props) => (
  <Card horizontal {...props}>
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
    <CardControls>
      <Badge small variant='primary' />
      <Tag>Card tag</Tag>
      <IconButton icon='menu' small aria-label='menu' />
    </CardControls>
  </Card>
);
export const Default: ComponentStory<typeof CardGroup> = (args) => (
  <CardGroup {...args}>
    {Array.from(new Array(9)).map((_, index) => (
      <CardItem key={index} />
    ))}
  </CardGroup>
);

export const Wrap: ComponentStory<typeof CardGroup> = Default.bind({});
Wrap.args = {
  wrap: true,
};

export const WrapAlignCenter: ComponentStory<typeof CardGroup> = Default.bind(
  {}
);
WrapAlignCenter.args = {
  wrap: true,
  align: 'center',
};

export const WrapStretch: ComponentStory<typeof CardGroup> = Default.bind({});
WrapStretch.args = {
  wrap: true,
  stretch: true,
};

export const VerticalWithHorizontalCard: ComponentStory<typeof CardGroup> = (
  args
) => (
  <CardGroup vertical {...args}>
    {Array.from(new Array(9)).map((_, index) => (
      <CardHorizontal key={index} />
    ))}
  </CardGroup>
);
