import React, {
  FocusEventHandler,
  forwardRef,
  KeyboardEventHandler,
  MouseEventHandler,
  ReactNode,
  Ref,
} from 'react';

import SelectFocus from '../Select/SelectFocus';

type MultiSelectAnchorProps = {
  children: ReactNode;
  disabled: boolean;
  onClick: MouseEventHandler;
  onBlur: FocusEventHandler;
  onKeyUp: KeyboardEventHandler;
  onKeyDown: KeyboardEventHandler;
};

const MultiSelectAnchor = forwardRef(function MultiSelectAnchor(
  props: MultiSelectAnchorProps,
  ref: Ref<Element>
) {
  return (
    <SelectFocus
      rcx-input-box--undecorated
      ref={ref}
      aria-haspopup='listbox'
      order={1}
      {...props}
    />
  );
});

export default MultiSelectAnchor;
