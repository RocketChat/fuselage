import type { StoryFn, Meta } from '@storybook/react-vite';
import { cloneElement, isValidElement, useRef } from 'react';
import { useOverlayTrigger } from 'react-aria';
import { useOverlayTriggerState } from 'react-stately';

import Button from '../Button/index.js';
import Tile from '../Tile/index.js';

import { Popover } from './Popover.js';

export default {
  title: 'Layout/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Popover>;

const Template: StoryFn<typeof Popover> = (args) => {
  const ref = useRef(null);
  const state = useOverlayTriggerState({});
  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: 'dialog' },
    state,
    ref,
  );
  delete triggerProps.onPress;

  return (
    <>
      <Button {...triggerProps} onClick={() => state.toggle()} ref={ref}>
        Open Popover
      </Button>
      {state.isOpen && (
        <Popover {...args} triggerRef={ref} state={state}>
          {args.children &&
            isValidElement(args.children) &&
            cloneElement(args.children, overlayProps)}
        </Popover>
      )}
    </>
  );
};

export const Default: StoryFn<typeof Popover> = Template.bind({});
Default.args = {
  children: <Tile>Popover Content</Tile>,
};
