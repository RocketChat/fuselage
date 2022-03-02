import type {
  FocusEventHandler,
  FormEvent,
  KeyboardEventHandler,
  MouseEventHandler,
  ReactNode,
  Ref,
} from 'react';
import React, { forwardRef } from 'react';

import { InputBox } from '../InputBox';

type SelectFilteredAnchorProps = {
  children: ReactNode;
  disabled: boolean;
  filter: string;
  onChangeFilter: (filter: string) => void;
  placeholder?: string;
  onClick: MouseEventHandler;
  onBlur: FocusEventHandler;
  onKeyUp: KeyboardEventHandler;
  onKeyDown: KeyboardEventHandler;
};

const SelectFilteredAnchor = forwardRef(function SelectFilteredAnchor(
  {
    children: _children,
    filter,
    onChangeFilter,
    placeholder,
    ...props
  }: SelectFilteredAnchorProps,
  ref: Ref<Element>
) {
  return (
    <InputBox.Input
      mi='x4'
      flexGrow={1}
      className='rcx-select__focus'
      ref={ref}
      placeholder={placeholder}
      value={filter}
      onInput={(e: FormEvent<HTMLInputElement>) =>
        onChangeFilter(e.currentTarget.value)
      }
      {...props}
      rcx-input-box--undecorated
    />
  );
});

export default SelectFilteredAnchor;
