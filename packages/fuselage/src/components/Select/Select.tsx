import type { ComponentProps } from 'react';
import React from 'react';
import { Item } from 'react-stately';

import { SelectAria } from './SelectAria';

export type SelectOption = readonly [
  value: string,
  label: string,
  selected?: boolean
];

export const Select = function Select({
  options,
  ...props
}: ComponentProps<typeof SelectAria> & { options: SelectOption[] }) {
  return (
    <SelectAria {...props}>
      {options.map((option, index) => (
        <Item title={option[1] ?? option[0]} textValue={option[0]} key={index}>
          {option[1] ?? option[0]}
        </Item>
      ))}
    </SelectAria>
  );
};
