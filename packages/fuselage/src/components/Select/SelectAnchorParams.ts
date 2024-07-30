import type {
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  ReactNode,
  ForwardedRef,
} from 'react';

export type SelectAnchorParams = {
  ref: ForwardedRef<HTMLElement>;
  children: ReactNode;
  disabled: boolean;
  onClick: MouseEventHandler;
  onBlur: FocusEventHandler;
  onKeyUp: KeyboardEventHandler;
  onKeyDown: KeyboardEventHandler;
};
