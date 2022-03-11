import type { Keys } from '@rocket.chat/icons';
import type {
  ComponentProps,
  Dispatch,
  ElementType,
  SetStateAction,
} from 'react';
import React, { useState } from 'react';

import { Select } from '.';
import type { SelectOption } from '../../types/SelectOption';
import type { Box } from '../Box';
import type { SelectAnchorParams } from './SelectAnchorParams';
import SelectFilteredAnchor from './SelectFilteredAnchor';

type SelectFilteredProps = Omit<ComponentProps<typeof Box>, 'onChange'> & {
  anchor?: ElementType;
  error?: string;
  options: SelectOption[];
  onChange: (value: SelectOption[0]) => void;
  getLabel?: (params: SelectOption) => SelectOption[1];
  getValue?: (params: SelectOption) => SelectOption[0];
  renderOptions?: ElementType;
  renderItem?: ElementType;
  renderSelected?: ElementType;
  customEmpty?: string;
  isControlled?: boolean;
  filter?: string;
  setFilter?: Dispatch<SetStateAction<string>>;
  addonIcon?: Keys;
};

export const SelectFiltered = ({
  options,
  placeholder,
  filter: propFilter,
  setFilter: propSetFilter,
  ...props
}: SelectFilteredProps) => {
  const [filter, setFilter] = useState('');

  return (
    <Select
      placeholder={placeholder}
      filter={propFilter || filter}
      options={options}
      isControlled={Boolean(propFilter)}
      {...props}
      anchor={(params: SelectAnchorParams) => (
        <SelectFilteredAnchor
          placeholder={placeholder}
          filter={propFilter || filter}
          onChangeFilter={propSetFilter || setFilter}
          {...params}
        />
      )}
    />
  );
};
