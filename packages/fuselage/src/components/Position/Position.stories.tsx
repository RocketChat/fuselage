import type { StoryFn, Meta } from '@storybook/react-webpack5';
import { useRef } from 'react';

import Tile from '../Tile';

import Position from './Position';

export default {
  title: 'Layout/Position',
  component: Position,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Position>;

const Template: StoryFn<typeof Position> = ({ placement }) => {
  const ref = useRef<HTMLElement>(null);

  return (
    <>
      <Tile padding={12} ref={ref}>
        Anchor element
      </Tile>
      <Position anchor={ref} placement={placement}>
        <Tile>Positioned element</Tile>
      </Position>
    </>
  );
};

export const TopStart = Template.bind({});
TopStart.args = { placement: 'top-start' };

export const TopMiddle = Template.bind({});
TopMiddle.args = { placement: 'top-middle' };

export const TopEnd = Template.bind({});
TopEnd.args = { placement: 'top-end' };

export const BottomStart = Template.bind({});
BottomStart.args = { placement: 'bottom-start' };

export const BottomMiddle = Template.bind({});
BottomMiddle.args = { placement: 'bottom-middle' };

export const BottomEnd = Template.bind({});
BottomEnd.args = { placement: 'bottom-end' };

export const RightStart = Template.bind({});
RightStart.args = { placement: 'right-start' };

export const RightMiddle = Template.bind({});
RightMiddle.args = { placement: 'right-middle' };

export const RightEnd = Template.bind({});
RightEnd.args = { placement: 'right-end' };

export const LeftStart = Template.bind({});
LeftStart.args = { placement: 'left-start' };

export const LeftMiddle = Template.bind({});
LeftMiddle.args = { placement: 'left-middle' };

export const LeftEnd = Template.bind({});
LeftEnd.args = { placement: 'left-end' };
