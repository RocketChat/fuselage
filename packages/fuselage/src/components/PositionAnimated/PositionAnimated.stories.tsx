import type { StoryFn, Meta } from '@storybook/react';
import { useRef } from 'react';

import AnimatedVisibility from '../AnimatedVisibility';
import Tile from '../Tile';
import PositionAnimated from './PositionAnimated';

export default {
  title: 'Layout/PositionAnimated',
  component: PositionAnimated,
  parameters: {
    layout: 'centered',
  },
  args: {
    visible: AnimatedVisibility.VISIBLE,
  },
} satisfies Meta<typeof PositionAnimated>;

const Template: StoryFn<typeof PositionAnimated> = ({ visible, placement }) => {
  const ref = useRef<HTMLElement>(null);

  return (
    <>
      <Tile padding={12} ref={ref}>
        Anchor element
      </Tile>
      <PositionAnimated anchor={ref} visible={visible} placement={placement}>
        <Tile>Positioned element</Tile>
      </PositionAnimated>
    </>
  );
};

export const topStart = Template.bind({});
topStart.args = { placement: 'top-start' };

export const topMiddle = Template.bind({});
topMiddle.args = { placement: 'top-middle' };

export const topEnd = Template.bind({});
topEnd.args = { placement: 'top-end' };

export const bottomStart = Template.bind({});
bottomStart.args = { placement: 'bottom-start' };

export const bottomMiddle = Template.bind({});
bottomMiddle.args = { placement: 'bottom-middle' };

export const bottomEnd = Template.bind({});
bottomEnd.args = { placement: 'bottom-end' };

export const rightStart = Template.bind({});
rightStart.args = { placement: 'right-start' };

export const rightMiddle = Template.bind({});
rightMiddle.args = { placement: 'right-middle' };

export const rightEnd = Template.bind({});
rightEnd.args = { placement: 'right-end' };

export const leftStart = Template.bind({});
leftStart.args = { placement: 'left-start' };

export const leftMiddle = Template.bind({});
leftMiddle.args = { placement: 'left-middle' };

export const leftEnd = Template.bind({});
leftEnd.args = { placement: 'left-end' };
