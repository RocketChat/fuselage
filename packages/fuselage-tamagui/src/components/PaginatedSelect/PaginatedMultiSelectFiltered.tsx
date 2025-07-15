import { styled, Input, XStack, Theme } from 'tamagui';
import { useState, useCallback } from 'react';
import type { ComponentProps } from 'react';

import { PaginatedMultiSelect } from './PaginatedMultiSelect';
import type { PaginatedMultiSelectOption } from './PaginatedMultiSelect';

const FilterInput = styled(Input, {
  flex: 1,
  minWidth: 100,
  padding: '$1',
  borderWidth: 0,
  backgroundColor: 'transparent',
});

type PaginatedMultiSelectFilteredProps = Omit<ComponentProps<typeof PaginatedMultiSelect>, 'filter'> & {
  filter?: string;
  setFilter?: (filter: string) => void;
};

export function PaginatedMultiSelectFiltered({
  filter = '',
  setFilter,
  placeholder,
  value = [],
  ...props
}: PaginatedMultiSelectFilteredProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterChange = useCallback((e: any) => {
    setFilter?.(e.target.value);
  }, [setFilter]);

  return (
    <Theme name="light">
      <PaginatedMultiSelect
        {...props}
        value={value}
        filter={filter}
        renderInput={() => (
          <FilterInput
            value={filter}
            onChange={handleFilterChange}
            placeholder={!value.length ? placeholder : undefined}
            onFocus={() => setIsOpen(true)}
            onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          />
        )}
      />
    </Theme>
  );
}

export default PaginatedMultiSelectFiltered;