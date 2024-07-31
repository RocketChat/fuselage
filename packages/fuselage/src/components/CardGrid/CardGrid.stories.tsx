import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '../Button';
import type { CardProps } from '../Card';
import { Card, CardBody, CardControls, CardHeader, CardTitle } from '../Card';
import { Icon } from '../Icon';
import type { CardGridProps } from './CardGrid';
import CardGrid from './CardGrid';

export default {
  title: 'Containers/CardGrid',
  component: CardGrid,
  parameters: {
    backgrounds: { default: 'dark' },
    layout: 'centered',
    controls: { hideNoControlsWarning: true },
  },
} satisfies ComponentMeta<typeof CardGrid>;

const CardItem = (props: CardProps) => (
  <Card {...props}>
    <CardHeader>
      <Icon name='address-book' size='x24' />
      <CardTitle variant='h3' info='Heading info'>
        Heading 3
      </CardTitle>
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

export const _CardGrid: ComponentStory<typeof CardGrid> = (
  args: CardGridProps
) => (
  <CardGrid {...args} breakpoints={{ xs: 4, sm: 4, md: 4, lg: 3, xl: 3 }}>
    {Array.from(new Array(9)).map((_, index) => (
      <CardItem key={index} />
    ))}
  </CardGrid>
);
