import type { ComponentProps, Dispatch, SetStateAction } from 'react';
import React, { useState } from 'react';

import { Select } from '.';
import type { Icon } from '..';
import type { SelectAnchorParams } from './SelectAnchorParams';
import SelectFilteredAnchor from './SelectFilteredAnchor';

export type SelectFilteredProps = ComponentProps<typeof Select> & {
  filter?: string;
  setFilter?: Dispatch<SetStateAction<string>>;
  addonIcon?: ComponentProps<typeof Icon>['name'];
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
