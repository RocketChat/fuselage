import type { AriaSelectProps } from '@react-types/select';
import type { ComponentProps, Key, Ref } from 'react';
import React, { forwardRef } from 'react';
import { Item } from 'react-stately';

import { SelectAria } from './SelectAria';

type SelectOption = readonly [value: string, label: string, selected?: boolean];

type SelectProps<T, V extends Key> = Omit<
  AriaSelectProps<T>,
  'value' | 'onChange' | 'children'
> & {
  error?: string;
  placeholder?: string;
  value?: V | null;
  onChange?: ((key: V) => any) | undefined;
  options: SelectOption[];
  small?: boolean;
} & Omit<React.AllHTMLAttributes<HTMLElement>, 'onChange'>;

export const Select = forwardRef(function Select<
  T extends object,
  V extends Key
>({ options, ...props }: SelectProps<T, V>, ref: Ref<HTMLElement>) {
  return (
    <SelectAria ref={ref} {...(props as ComponentProps<typeof SelectAria>)}>
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
});
