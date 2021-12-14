import { action } from '@storybook/addon-actions';
import {
  Title,
  Description,
  Primary,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Box, Scrollable, Tile } from '../../..';

export default {
  title: 'Box/Modifiers/Scrollable_new',
  component: Scrollable,
  parameters: {
    docs: {
      description: {
        component: 'Add scroll capability to the wrapped component.',
      },
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <ArgsTable />
          <Stories title={''} />
        </>
      ),
    },
  },
} as ComponentMeta<typeof Scrollable>;

export const Default: ComponentStory<typeof Scrollable> = () => (
  <Scrollable>
    <Tile padding='none' maxWidth='full' h={100}>
      <Box w='200%' h='1000%' />
    </Tile>
  </Scrollable>
);

export const HorizontalScrolling: ComponentStory<typeof Scrollable> = () => (
  <Scrollable horizontal>
    <Tile padding='none' maxWidth='full'>
      <Box width='200%' height={100} />
    </Tile>
  </Scrollable>
);

export const VerticalScrolling: ComponentStory<typeof Scrollable> = () => (
  <Scrollable vertical>
    <Tile padding='none' height={100}>
      <Box height='1000%' />
    </Tile>
  </Scrollable>
);

export const SmoothScrolling: ComponentStory<typeof Scrollable> = () => (
  <Scrollable smooth>
    <Tile padding='none' height={100}>
      <Box height='1000%' />
    </Tile>
  </Scrollable>
);

export const OnScrollContentEvent: ComponentStory<typeof Scrollable> = () => (
  <Scrollable onScrollContent={action('scrollContent')}>
    <Tile padding='none' height={100}>
      <Box height='1000%' />
    </Tile>
  </Scrollable>
);
