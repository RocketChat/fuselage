import type { AriaListBoxOptions } from '@react-aria/listbox';
import React, { memo, useRef } from 'react';
import { useListBox } from 'react-aria';
import type { ListState } from 'react-stately';

import Box from '../../Box';
import { SelectOption } from './SelectOption';

interface ListBoxProps extends AriaListBoxOptions<unknown> {
  listBoxRef?: React.RefObject<HTMLUListElement>;
  state: ListState<unknown>;
  width?: number;
}

export const SelectListBox = memo(function ListBox({
  state,
  width,
  ...props
}: ListBoxProps) {
  const ref = useRef<HTMLUListElement>(null);
  const { listBoxRef = ref } = props;
  const { listBoxProps } = useListBox(props, state, listBoxRef);

  return (
    <Box
      rcx-options
      style={{ width }}
      {...listBoxProps}
      ref={listBoxRef}
      is='ul'
    >
      {[...state.collection].map((item) => (
        <SelectOption key={item.key} item={item} state={state} />
      ))}
    </Box>
  );
});
