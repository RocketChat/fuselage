import type {
  FocusEventHandler,
  InputEvent,
  KeyboardEventHandler,
  MouseEventHandler,
  ReactNode,
  RefAttributes,
} from 'react';

import { Input } from '../InputBox';

type SelectFilteredAnchorProps = RefAttributes<HTMLInputElement> & {
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

function SelectFilteredAnchor({
  children: _children,
  filter,
  onChangeFilter,
  placeholder,
  ...props
}: SelectFilteredAnchorProps) {
  return (
    <Input
      mi={4}
      flexGrow={1}
      className='rcx-select__focus'
      placeholder={placeholder}
      value={filter}
      onInput={(e: InputEvent<HTMLInputElement>) =>
        onChangeFilter(e.currentTarget.value)
      }
      {...props}
      rcx-input-box--undecorated
    />
  );
}

export default SelectFilteredAnchor;
