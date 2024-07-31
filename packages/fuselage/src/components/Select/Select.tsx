import type { AriaSelectProps } from '@react-types/select';
import type { Key, ForwardedRef, AllHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { Item } from 'react-stately';

import type { SelectAriaProps } from './SelectAria';
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
} & Omit<AllHTMLAttributes<HTMLElement>, 'onChange'>;

/** @public */
export const Select = forwardRef(function Select<
  T extends object,
  V extends Key
>({ options, ...props }: SelectProps<T, V>, ref: ForwardedRef<HTMLElement>) {
  return (
    <SelectAria ref={ref} {...(props as SelectAriaProps)}>
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
