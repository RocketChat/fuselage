import type { FormEvent } from 'react';
import { useCallback, forwardRef } from 'react';

import { FlexItem } from '../Flex';
import { Input, type InputProps } from '../InputBox';

import type { PaginatedMultiSelectProps } from './PaginatedMultiSelect';
import PaginatedMultiSelect from './PaginatedMultiSelect';

export type PaginatedMultiSelectFilteredProps = {
  setFilter?: (value: string) => void;
} & PaginatedMultiSelectProps;

const PaginatedMultiSelectFiltered = ({
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
        <FlexItem grow={1}>
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
        </FlexItem>
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

export default PaginatedMultiSelectFiltered;
