import type { FormEvent, Ref } from 'react';
import React, { forwardRef } from 'react';

import { InputBox } from '../InputBox';
import type { SelectAnchorParams } from './SelectAnchorParams';

type SelectFilteredAnchorProps = SelectAnchorParams & {
  filter: string;
  onChangeFilter: (filter: string) => void;
  placeholder?: string;
};

const SelectFilteredAnchor = forwardRef(function SelectFilteredAnchor(
  {
    filter,
    onChangeFilter,
    placeholder,
    filled: _filled,
    ...props
  }: SelectFilteredAnchorProps,
  ref: Ref<Element>
) {
  return (
    <InputBox.Input
      rcx-input-box--undecorated
      rcx-select__focus
      ref={ref}
      marginInline={4}
      flexGrow={1}
      placeholder={placeholder}
      value={filter}
      onInput={(e: FormEvent<HTMLInputElement>) =>
        onChangeFilter(e.currentTarget.value)
      }
      {...props}
    />
  );
});

export default SelectFilteredAnchor;
