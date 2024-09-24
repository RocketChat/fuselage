import { action } from '@storybook/addon-actions';
import type { Meta } from '@storybook/react';

import Box from '../Box';
import Tile from '../Tile';
import { Scrollable } from './Scrollable';

export default {
  title: 'Layout/Scrollable',
  component: Scrollable,
} satisfies Meta<typeof Scrollable>;

export const Default = () => (
  <Scrollable>
    <Tile padding='none' maxWidth='full' h={100}>
      <Box w='200%' h='1000%' />
    </Tile>
  </Scrollable>
);

export const HorizontalScrolling = () => (
  <Scrollable horizontal>
    <Tile padding='none' maxWidth='full'>
      <Box width='200%' height={100} />
    </Tile>
  </Scrollable>
);

export const VerticalScrolling = () => (
  <Scrollable vertical>
    <Tile padding='none' height={100}>
      <Box height='1000%' />
    </Tile>
  </Scrollable>
);

export const SmoothScrolling = () => (
  <Scrollable smooth>
    <Tile padding='none' height={100}>
      <Box height='1000%' />
    </Tile>
  </Scrollable>
);

export const OnScrollContentEvent = () => (
  <Scrollable onScrollContent={action('scrollContent')}>
    <Tile padding='none' height={100}>
      <Box height='1000%' />
    </Tile>
  </Scrollable>
);
