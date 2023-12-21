import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { ComponentProps } from 'react';
import React from 'react';

import { CardGrid } from '.';
import { Button } from '../Button';
import {
  Card,
  CardBody,
  CardCol,
  CardControls,
  CardHeader,
  CardTitle,
} from '../Card';
import { Icon } from '../Icon';

export default {
  title: 'Containers/CardGrid',
  component: CardGrid,
  parameters: {
    backgrounds: { default: 'dark' },
    layout: 'centered',
    controls: { hideNoControlsWarning: true },
  },
} as ComponentMeta<typeof CardGrid>;

const CardItem = (props: ComponentProps<typeof Card>) => (
  <Card {...props}>
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

export const _CardGrid: ComponentStory<typeof CardGrid> = (
  args: ComponentProps<typeof CardGrid>
) => (
  <CardGrid {...args} breakpoints={{ xs: 4, sm: 4, md: 4, lg: 3, xl: 3 }}>
    {Array.from(new Array(9)).map((_, index) => (
      <CardItem key={index} />
    ))}
  </CardGrid>
);
