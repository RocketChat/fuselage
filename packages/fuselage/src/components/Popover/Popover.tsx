import type { ReactNode } from 'react';
import { useRef } from 'react';
import type { AriaPopoverProps } from 'react-aria';
import { usePopover, DismissButton, Overlay } from 'react-aria';
import type { OverlayTriggerState } from 'react-stately';

import { useOwnerDocument } from '../../contexts';

export interface PopoverProps extends Omit<AriaPopoverProps, 'popoverRef'> {
  children: ReactNode;
  state: OverlayTriggerState;
  portalContainer?: Element;
}

function Popover({ portalContainer, ...props }: PopoverProps) {
  const popoverRef = useRef<HTMLDivElement>(null);
  const { state, children, isNonModal } = props;

  const { document: ownerDocument } = useOwnerDocument();

  const { popoverProps, underlayProps } = usePopover(
    {
      ...props,
      popoverRef,
      boundaryElement: ownerDocument?.body,
    },
    state,
  );

  return (
    <Overlay portalContainer={ownerDocument?.body}>
      {!isNonModal && <div {...underlayProps} />}
      <div {...popoverProps} ref={popoverRef}>
        {!isNonModal && <DismissButton onDismiss={state.close} />}
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  );
}

export default Popover;
