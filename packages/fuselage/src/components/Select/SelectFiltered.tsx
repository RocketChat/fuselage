import type { Keys } from '@rocket.chat/icons';
import type {
  ComponentProps,
  Dispatch,
  ElementType,
  ReactNode,
  SetStateAction,
} from 'react';
import React, { useMemo, useState } from 'react';

import { Select } from '.';
import type { SelectOption } from '../../types/SelectOption';
import type { Box } from '../Box';
import type { SelectAnchorParams } from './SelectAnchorParams';
import SelectFilteredAnchor from './SelectFilteredAnchor';
import SelectValue from './SelectValue';
import type { SelectValueParams } from './SelectValueParams';

type SelectFilteredProps = Omit<
  ComponentProps<typeof Box>,
  'value' | 'onChange'
> & {
  anchor?: ElementType;
  error?: string;
  options: SelectOption[];
  value: SelectOption[0];
  onChange: (value: SelectOption[0]) => void;
  getLabel?: (params: SelectOption) => SelectOption[1];
  getValue?: (params: SelectOption) => SelectOption[0];
  renderItem?: ElementType;
  renderSelected?:
    | ElementType<SelectValueParams>
    | ((params: SelectValueParams) => ReactNode);
  customEmpty?: string;
  isControlled?: boolean;
  filter?: string;
  setFilter?: Dispatch<SetStateAction<string>>;
  addonIcon?: Keys;
};

const SelectFiltered = ({
  options,
  placeholder,
  filter: propFilter,
  setFilter: propSetFilter,
  ...props
}: SelectFilteredProps) => {
  const [filter, setFilter] = useState('');

  const filteredOptions = useMemo((): SelectOption[] => {
    if (propFilter) {
      return options;
    }

    return options.filter(
      ([, label]: SelectOption) =>
        !filter || label.toLowerCase().includes(filter.toLowerCase())
    );
  }, [propFilter, options, filter]);

  return (
    <Select
      placeholder={placeholder}
      filter={propFilter || filter}
      options={filteredOptions}
      {...props}
      anchor={(params: SelectAnchorParams) => (
        <SelectFilteredAnchor
          placeholder={placeholder}
          filter={propFilter || filter}
          onChangeFilter={propSetFilter || setFilter}
          {...params}
        />
      )}
      anchorInactive={false}
      renderSelected={(params: SelectValueParams) =>
        params.anchorActive ? null : <SelectValue {...params} />
      }
    />
  );
};

export default SelectFiltered;
