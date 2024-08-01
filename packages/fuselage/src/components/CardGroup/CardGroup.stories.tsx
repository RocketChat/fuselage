import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { ComponentProps } from 'react';

import { CardGroup } from '.';
import { Badge } from '../Badge';
import { Button, IconButton } from '../Button';
import {
  Card,
  CardBody,
  CardCol,
  CardControls,
  CardHeader,
  CardRow,
  CardTitle,
} from '../Card';
import { Icon } from '../Icon';
import { Tag } from '../Tag';

export default {
  title: 'Containers/CardGroup',
  component: CardGroup,
  parameters: {
    backgrounds: { default: 'dark' },
    layout: 'padded',
    controls: { hideNoControlsWarning: true },
  },
} as ComponentMeta<typeof CardGroup>;

const CardItem = (props: ComponentProps<typeof Card>) => (
  <Card {...props}>
    <CardHeader>
      <Icon name='address-book' size='x24' />
      <CardTitle info='Heading info'>Heading</CardTitle>
    </CardHeader>
    <CardBody>
      Lorem ipsum dolor sit amet. In adipisci consequatur qui laudantium rem
      praesentium earum ut consectetur. Lorem ipsum dolor sit amet. In adipisci
      consequatur qui laudantium rem praesentium earum ut consectetur.
    </CardBody>
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
        <CardBody>Lorem ipsum dolor sit amet.</CardBody>
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
      <CardItem key={index} width='x260' />
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
  <CardGroup vertical stretch {...args}>
    {Array.from(new Array(9)).map((_, index) => (
      <CardHorizontal clickable key={index} width='full' />
    ))}
  </CardGroup>
);
