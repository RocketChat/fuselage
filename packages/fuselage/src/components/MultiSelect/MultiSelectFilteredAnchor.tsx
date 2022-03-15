import type {
  FocusEventHandler,
  FormEvent,
  KeyboardEventHandler,
  MouseEventHandler,
  ReactNode,
  Ref,
} from 'react';
import React, { forwardRef } from 'react';

import Flex from '../Flex';
import { InputBox } from '../InputBox';

type MultiSelectFilteredAnchorProps = {
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

const MultiSelectFilteredAnchor = forwardRef(function MultiSelectFilteredAnchor(
  {
    children: _children,
    filter,
    onChangeFilter,
    placeholder,
    ...props
  }: MultiSelectFilteredAnchorProps,
  ref: Ref<Element>
) {
  return (
    <Flex.Item grow={1}>
      <InputBox.Input
        ref={ref}
        placeholder={placeholder}
        value={filter}
        onInput={(e: FormEvent<HTMLInputElement>) =>
          onChangeFilter(e.currentTarget.value)
        }
        {...props}
        rcx-input-box--undecorated
        aria-haspopup='listbox'
      />
    </Flex.Item>
  );
});

export default MultiSelectFilteredAnchor;
