import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { useOverlayTrigger } from 'react-aria';
import { useOverlayTriggerState } from 'react-stately';

import { Button, Popover, Tile } from '../..';

export default {
  title: 'Layout/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => {
  const ref = React.useRef(null);
  const state = useOverlayTriggerState({});
  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: 'dialog' },
    state,
    ref
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
            React.isValidElement(args.children) &&
            React.cloneElement(args.children, overlayProps)}
        </Popover>
      )}
    </>
  );
};

export const Default: ComponentStory<typeof Popover> = Template.bind({});
Default.args = {
  children: <Tile>Popover Content</Tile>,
};
