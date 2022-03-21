import type {
  FocusEventHandler,
  FormEvent,
  KeyboardEventHandler,
  MouseEventHandler,
  Ref,
} from 'react';
import React, { forwardRef } from 'react';

import { InputBox } from '../InputBox';

type MultiSelectFilteredAnchorProps = {
  disabled: boolean;
  placeholder: string | undefined;
  onClick: MouseEventHandler;
  onBlur: FocusEventHandler;
  onKeyUp: KeyboardEventHandler;
  onKeyDown: KeyboardEventHandler;
  filter: string;
  onChangeFilter: (filter: string) => void;
};

const MultiSelectFilteredAnchor = forwardRef(function MultiSelectFilteredAnchor(
  {
    filter,
    onChangeFilter,
    placeholder,
    ...props
  }: MultiSelectFilteredAnchorProps,
  ref: Ref<Element>
) {
  return (
    <InputBox.Input
      rcx-input-box--undecorated
      ref={ref}
      placeholder={placeholder}
      value={filter}
      flexGrow={1}
      margin={4}
      onInput={(e: FormEvent<HTMLInputElement>) =>
        onChangeFilter(e.currentTarget.value)
      }
      aria-haspopup='listbox'
      {...props}
    />
  );
});

export default MultiSelectFilteredAnchor;
