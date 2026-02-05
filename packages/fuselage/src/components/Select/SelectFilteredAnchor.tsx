import type {
  FocusEventHandler,
  FormEvent,
  KeyboardEventHandler,
  MouseEventHandler,
  ReactNode,
} from 'react';
import { forwardRef } from 'react';

import { Input } from '../InputBox';

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

const SelectFilteredAnchor = forwardRef<
  HTMLInputElement,
  SelectFilteredAnchorProps
>(function SelectFilteredAnchor(
  { children: _children, filter, onChangeFilter, placeholder, ...props },
  ref,
) {
  return (
    <Input
      mi={4}
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
