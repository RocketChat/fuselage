import type { ReactNode } from 'react';
import { useRef } from 'react';
import type { AriaPopoverProps } from 'react-aria';
import { usePopover, DismissButton, Overlay } from 'react-aria';
import type { OverlayTriggerState } from 'react-stately';

interface PopoverProps extends Omit<AriaPopoverProps, 'popoverRef'> {
  children: ReactNode;
  state: OverlayTriggerState;
}

export function Popover(props: PopoverProps) {
  const popoverRef = useRef<HTMLDivElement>(null);
  const { state, children, isNonModal } = props;

  const { popoverProps, underlayProps } = usePopover(
    {
      ...props,
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
