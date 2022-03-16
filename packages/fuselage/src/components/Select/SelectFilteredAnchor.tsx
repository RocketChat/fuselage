import type {
  FocusEventHandler,
  FormEvent,
  KeyboardEventHandler,
  MouseEventHandler,
  Ref,
} from 'react';
import React, { forwardRef } from 'react';

import { InputBox } from '../InputBox';

type SelectFilteredAnchorProps = {
  disabled: boolean;
  placeholder: string | undefined;
  hidden: boolean;
  onClick: MouseEventHandler;
  onBlur: FocusEventHandler;
  onKeyUp: KeyboardEventHandler;
  onKeyDown: KeyboardEventHandler;
  filter: string;
  onChangeFilter: (filter: string) => void;
};

const SelectFilteredAnchor = forwardRef(function SelectFilteredAnchor(
  {
    disabled,
    placeholder,
    hidden,
    filter,
    onChangeFilter,
    ...props
  }: SelectFilteredAnchorProps,
  ref: Ref<Element>
) {
  return (
    <InputBox.Input
      rcx-input-box--undecorated
      rcx-select__focus
      rcx-select__focus--hidden={hidden}
      ref={ref}
      marginInline={4}
      flexGrow={1}
      value={filter}
      placeholder={placeholder}
      disabled={disabled}
      onInput={(e: FormEvent<HTMLInputElement>) =>
        onChangeFilter(e.currentTarget.value)
      }
      {...props}
    />
  );
});

export default SelectFilteredAnchor;
