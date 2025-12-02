import type { FormEvent } from 'react';
import { useCallback, forwardRef } from 'react';

import Flex from '../Flex';
import { Input, type InputProps } from '../InputBox';

import type { PaginatedMultiSelectProps } from './PaginatedMultiSelect';
import PaginatedMultiSelect from './PaginatedMultiSelect';

type PaginatedMultiSelectFilteredProps = {
  setFilter?: (value: string) => void;
} & PaginatedMultiSelectProps;

export const PaginatedMultiSelectFiltered = ({
  filter,
  setFilter,
  options,
  placeholder,
  ...props
}: PaginatedMultiSelectFilteredProps) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const anchor = useCallback(
    forwardRef<HTMLInputElement, InputProps>(
      ({ children: _children, filter, ...props }, ref) => (
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
