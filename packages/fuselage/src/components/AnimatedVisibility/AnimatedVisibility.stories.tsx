import type { StoryFn, Meta } from '@storybook/react';

import AnimatedVisibility from '.';
import Tile from '../Tile';

export default {
  title: 'Layout/AnimatedVisibility',
  component: AnimatedVisibility,
  argTypes: {
    visibility: {
      control: {
        type: 'inline-radio',
      },
      options: [
        AnimatedVisibility.VISIBLE,
        AnimatedVisibility.HIDDEN,
        AnimatedVisibility.HIDING,
        AnimatedVisibility.UNHIDING,
      ],
    },
  },
} satisfies Meta<typeof AnimatedVisibility>;

export const example: StoryFn<typeof AnimatedVisibility> = ({ visibility }) => (
  <AnimatedVisibility visibility={visibility}>
    <Tile padding={40}>Visible</Tile>
  </AnimatedVisibility>
);
example.args = {
  visibility: AnimatedVisibility.VISIBLE,
};
