import * as React from 'react';
import type { AriaPopoverProps } from 'react-aria';
import { usePopover, DismissButton, Overlay } from 'react-aria';
import type { OverlayTriggerState } from 'react-stately';

interface PopoverProps extends Omit<AriaPopoverProps, 'popoverRef'> {
  children: React.ReactNode;
  state: OverlayTriggerState;
  className?: string;
  popoverRef?: React.RefObject<HTMLDivElement>;
}

export function Popover(props: PopoverProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { popoverRef = ref, state, children, isNonModal } = props;

  const { popoverProps, underlayProps } = usePopover(
    {
      ...props,
      containerPadding: 8,
      popoverRef,
    },
    state
  );

  return (
    <Overlay>
      {!isNonModal && <div {...underlayProps} />}
      <div {...popoverProps} ref={popoverRef}>
        {!isNonModal && <DismissButton onDismiss={state.close} />}
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  );
}
