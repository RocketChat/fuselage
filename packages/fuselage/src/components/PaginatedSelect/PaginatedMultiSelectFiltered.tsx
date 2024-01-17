import type { ComponentProps, Ref, FormEvent, ReactElement } from 'react';
import React, { useCallback, forwardRef } from 'react';

import PaginatedMultiSelect, {
  type PaginatedMultiSelectOption,
} from './PaginatedMultiSelect';
import type Box from '../Box';
import Flex from '../Flex';
import { InputBox } from '../InputBox';
import { type OptionsPaginated } from '../OptionsPaginated';

type PaginatedMultiSelectFilteredProps = Omit<
  ComponentProps<typeof Box>,
  'onChange' | 'value' | 'filter'
> & {
  error?: boolean;
  options: PaginatedMultiSelectOption[];
  withTitle?: boolean;
  placeholder?: string;
  endReached?: (start?: number, end?: number) => void;
  value?: PaginatedMultiSelectOption[];
  onChange: (values: PaginatedMultiSelectOption[]) => void;
  renderOptions?: (
    props: ComponentProps<typeof OptionsPaginated>
  ) => ReactElement | null;
  anchor?: any;
  filter?: string;
  setFilter?: (value: string) => void;
};

export const PaginatedMultiSelectFiltered = ({
  filter,
  setFilter,
  options,
  placeholder,
  ...props
}: PaginatedMultiSelectFilteredProps) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const anchor = useCallback(
    forwardRef(
      (
        {
          children: _children,
          filter,
          ...props
        }: ComponentProps<typeof InputBox>,
        ref: Ref<HTMLInputElement>
      ) => (
        <Flex.Item grow={1}>
          <InputBox.Input
            ref={ref}
            placeholder={placeholder}
            value={filter}
            onInput={(e: FormEvent<HTMLInputElement>) =>
              setFilter?.(e.currentTarget.value)
            }
            {...props}
            rcx-input-box--undecorated
          />
        </Flex.Item>
      )
    ),
    []
  );

  return (
    <PaginatedMultiSelect
      filter={filter}
      options={options}
      {...props}
      anchor={anchor}
    />
  );
};
