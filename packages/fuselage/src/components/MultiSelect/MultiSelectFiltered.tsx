import type { Keys } from '@rocket.chat/icons';
import type {
  ComponentProps,
  Dispatch,
  ElementType,
  ReactNode,
  SetStateAction,
} from 'react';
import React, { useMemo, useState } from 'react';

import type { SelectOption } from '../../types/SelectOption';
import type { Box } from '../Box';
import { MultiSelect } from './MultiSelect';
import type { MultiSelectAnchorParams } from './MultiSelectAnchorParams';
import MultiSelectFilteredAnchor from './MultiSelectFilteredAnchor';

type MultiSelectFilteredProps = Omit<
  ComponentProps<typeof Box>,
  'onChange' | 'value'
> & {
  value?: SelectOption[0][];
  error?: string;
  options: SelectOption[];
  onChange: (params: SelectOption[0][]) => void;
  getLabel?: (params: SelectOption) => SelectOption[1];
  getValue?: (params: SelectOption) => SelectOption[0];
  customEmpty?: string;
  anchor?:
    | ElementType<MultiSelectAnchorParams>
    | ((params: MultiSelectAnchorParams) => ReactNode);
  renderItem?: ElementType;
  renderSelected?: ElementType;
  filter?: string;
  setFilter?: Dispatch<SetStateAction<string>>;
  addonIcon?: Keys;
};

export const MultiSelectFiltered = ({
  options,
  filter: propFilter,
  setFilter: propSetFilter,
  ...props
}: MultiSelectFilteredProps) => {
  const [filter, setFilter] = useState('');

  const filteredOptions: SelectOption[] = useMemo(() => {
    if (propFilter) {
      return options;
    }

    return options.filter(
      ([, label]: SelectOption) =>
        !filter || label.toLowerCase().includes(filter.toLowerCase())
    );
  }, [propFilter, options, filter]);

  return (
    <MultiSelect
      {...props}
      filter={propFilter || filter}
      options={filteredOptions}
      anchor={(params: MultiSelectAnchorParams) => (
        <MultiSelectFilteredAnchor
          filter={propFilter || filter}
          onChangeFilter={propSetFilter || setFilter}
          {...params}
        />
      )}
    />
  );
};
