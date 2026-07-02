import type {
  AriaAttributes,
  FocusEventHandler,
  InputEvent,
  KeyboardEventHandler,
  MouseEventHandler,
  ReactNode,
  RefAttributes,
} from 'react';

import { FlexItem } from '../Flex';
import { Input } from '../InputBox';

type MultiSelectFilteredAnchorProps = RefAttributes<HTMLInputElement> & {
  children: ReactNode;
  disabled: boolean;
  filter: string;
  onChangeFilter: (filter: string) => void;
  placeholder?: string;
  onClick: MouseEventHandler;
  onBlur: FocusEventHandler;
  onKeyUp: KeyboardEventHandler;
  onKeyDown: KeyboardEventHandler;
  role?: string;
  id?: string;
  name?: string;
} & AriaAttributes;

function MultiSelectFilteredAnchor({
  children: _children,
  filter,
  onChangeFilter,
  placeholder,
  ...props
}: MultiSelectFilteredAnchorProps) {
  return (
    <FlexItem grow={1}>
      <Input
        placeholder={placeholder}
        value={filter}
        onInput={(e: InputEvent<HTMLInputElement>) =>
          onChangeFilter(e.currentTarget.value)
        }
        {...props}
        rcx-input-box--undecorated
        order={1}
        autoComplete='off'
      />
    </FlexItem>
  );
}

export default MultiSelectFilteredAnchor;
