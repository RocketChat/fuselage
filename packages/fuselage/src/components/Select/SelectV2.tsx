import type { ComponentProps } from 'react';
import React from 'react';
import { Item } from 'react-stately';

import { SelectAria } from './SelectAria';

type SelectOption = readonly [value: string, label: string, selected?: boolean];

export const SelectV2 = function Select({
  options,
  ...props
}: Omit<ComponentProps<typeof SelectAria>, 'children'> & {
  options: SelectOption[];
}) {
  return (
    <SelectAria {...props}>
      {options.map((option) => (
        <Item
          title={option[1] ?? option[0]}
          textValue={option[0]}
          key={option[0]}
        >
          {option[1] ?? option[0]}
        </Item>
      ))}
    </SelectAria>
  );
};
