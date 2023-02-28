import type { SyntheticEvent, ComponentProps, Ref } from 'react';
import React, { useCallback, forwardRef } from 'react';

import type Box from '../Box';
import Flex from '../Flex';
import { InputBox } from '../InputBox';
import PaginatedMultiSelect from './PaginatedMultiSelect';

type PaginatedMultiSelectOption = {
  value?: string | number;
  label?: string | number;
};

type PaginatedMultiSelectFilteredProps = ComponentProps<typeof Box> & {
  error?: boolean;
  options: PaginatedMultiSelectOption[];
  withTitle?: boolean;
  placeholder: string;
  endReached?: (start?: number, end?: number) => void;
  value?: PaginatedMultiSelectOption['value'];
  setFilter?: (value: PaginatedMultiSelectOption['value']) => void;
  filter?: string;
};

const PaginatedMultiSelectFiltered = ({
  filter,
  setFilter,
  options,
  placeholder,
  ...props
}: PaginatedMultiSelectFilteredProps) => {
  const anchor = useCallback(
    // eslint-disable-next-line react/no-multi-comp
    forwardRef(function AnchorComponent(
      {
        children: _children,
        filter,
        ...props
      }: ComponentProps<typeof InputBox>,
      ref: Ref<HTMLInputElement>
    ) {
      return (
        <Flex.Item grow={1}>
          <InputBox.Input
            ref={ref}
            placeholder={placeholder}
            value={filter}
            onInput={(e: SyntheticEvent) =>
              setFilter &&
              setFilter((e.currentTarget as HTMLInputElement).value)
            }
            {...props}
            rcx-input-box--undecorated
          />
        </Flex.Item>
      );
    }),
    []
  );
  return (
    <PaginatedMultiSelect
      filter={filter}
      options={options}
      placeholder={placeholder}
      {...props}
      anchor={anchor}
    />
  );
};

export default PaginatedMultiSelectFiltered;
