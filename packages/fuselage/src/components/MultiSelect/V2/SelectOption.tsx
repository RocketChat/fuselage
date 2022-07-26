import type { Node } from '@react-types/shared';
import React, { useRef } from 'react';
import { useOption } from 'react-aria';
import type { ListState } from 'react-stately';

import Option from '../../Options/Option';

interface OptionProps {
  item: Node<unknown>;
  state: ListState<unknown>;
}

export const SelectOption = ({ item, state }: OptionProps) => {
  const ref = useRef<HTMLLIElement>(null);
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    optionProps: { is: _, ...optionProps },
    isSelected,
    isFocused,
  } = useOption(
    {
      key: item.key,
    },
    state,
    ref
  );
  return (
    <Option {...optionProps} selected={isSelected} focus={isFocused} ref={ref}>
      {item.rendered}
    </Option>
  );
};
