import type { ComponentProps, Ref, FormEvent } from 'react';
import { useCallback, forwardRef } from 'react';

import Flex from '../Flex';
import { Input, type InputProps } from '../InputBox';

import PaginatedMultiSelect from './PaginatedMultiSelect';

type PaginatedMultiSelectFilteredProps = {
  setFilter?: (value: string) => void;
} & ComponentProps<typeof PaginatedMultiSelect>;

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
        { children: _children, filter, ...props }: InputProps,
        ref: Ref<HTMLInputElement>,
      ) => (
        <Flex.Item grow={1}>
          <Input
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
      ),
    ),
    [],
  );

  return (
    <PaginatedMultiSelect
      filter={filter}
      options={options}
      anchor={anchor}
      {...props}
    />
  );
};
