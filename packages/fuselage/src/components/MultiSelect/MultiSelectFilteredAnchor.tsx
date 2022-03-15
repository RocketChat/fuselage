import type { FormEvent, Ref } from 'react';
import React, { forwardRef } from 'react';

import { InputBox } from '../InputBox';
import type { MultiSelectAnchorParams } from './MultiSelectAnchorParams';

type MultiSelectFilteredAnchorProps = MultiSelectAnchorParams & {
  filter: string;
  onChangeFilter: (filter: string) => void;
  placeholder?: string;
};

const MultiSelectFilteredAnchor = forwardRef(function MultiSelectFilteredAnchor(
  {
    filter,
    onChangeFilter,
    placeholder,
    filled,
    ...props
  }: MultiSelectFilteredAnchorProps,
  ref: Ref<Element>
) {
  return (
    <InputBox.Input
      rcx-input-box--undecorated
      ref={ref}
      placeholder={filled ? undefined : placeholder}
      value={filter}
      flexGrow={1}
      onInput={(e: FormEvent<HTMLInputElement>) =>
        onChangeFilter(e.currentTarget.value)
      }
      aria-haspopup='listbox'
      {...props}
    />
  );
});

export default MultiSelectFilteredAnchor;
