import type {
  AriaAttributes,
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  ReactNode,
} from 'react';
import { forwardRef } from 'react';

import SelectFocus from '../Select/SelectFocus';

type MultiSelectAnchorProps = {
  children: ReactNode;
  disabled: boolean;
  onClick: MouseEventHandler;
  onBlur: FocusEventHandler;
  onKeyUp: KeyboardEventHandler;
  onKeyDown: KeyboardEventHandler;
  role?: string;
  id?: string;
  name?: string;
} & AriaAttributes;

const MultiSelectAnchor = forwardRef<Element, MultiSelectAnchorProps>(
  function MultiSelectAnchor({ children, ...props }, ref) {
    return (
      <SelectFocus rcx-input-box--undecorated ref={ref} order={1} {...props}>
        {children}
      </SelectFocus>
    );
  },
);

export default MultiSelectAnchor;
