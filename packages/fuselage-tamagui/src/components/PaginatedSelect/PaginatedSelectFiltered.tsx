import { styled, Input, Theme } from 'tamagui';
import { useState, useCallback } from 'react';
import type { ComponentProps } from 'react';

import { PaginatedSelect } from './PaginatedSelect';

const FilterInput = styled(Input, {
  flex: 1,
  padding: '$2',
  borderRadius: '$2',
  borderWidth: 1,
  borderColor: '$borderColor',
});

type PaginatedSelectFilteredProps = Omit<ComponentProps<typeof PaginatedSelect>, 'filter' | 'setFilter'> & {
  filter?: string;
  setFilter: (filter: string) => void;
};

export function PaginatedSelectFiltered({
  filter = '',
  setFilter,
  placeholder,
  ...props
}: PaginatedSelectFilteredProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterChange = useCallback((e: any) => {
    setFilter(e.target.value);
  }, [setFilter]);

  return (
    <Theme name="light">
      <PaginatedSelect
        {...props}
        filter={filter}
        setFilter={setFilter}
        placeholder={undefined}
        renderInput={() => (
          <FilterInput
            value={filter}
            onChange={handleFilterChange}
            placeholder={placeholder}
            onFocus={() => setIsOpen(true)}
            onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          />
        )}
      />
    </Theme>
  );
}

export default PaginatedSelectFiltered;