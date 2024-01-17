import type { ComponentProps, Dispatch, SetStateAction } from 'react';
import React, { useState } from 'react';

import { MultiSelect } from './MultiSelect';
import type { MultiSelectAnchorParams } from './MultiSelectAnchorParams';
import MultiSelectFilteredAnchor from './MultiSelectFilteredAnchor';
import type { Icon } from '..';

type MultiSelectFilteredProps = ComponentProps<typeof MultiSelect> & {
  filter?: string;
  setFilter?: Dispatch<SetStateAction<string>>;
  addonIcon?: ComponentProps<typeof Icon>['name'];
};

export const MultiSelectFiltered = ({
  options,
  placeholder,
  filter: propFilter,
  setFilter: propSetFilter,
  ...props
}: MultiSelectFilteredProps) => {
  const [filter, setFilter] = useState('');

  return (
    <MultiSelect
      {...props}
      filter={propFilter || filter}
      setFilter={propSetFilter || setFilter}
      options={options}
      anchor={(params: MultiSelectAnchorParams) => (
        <MultiSelectFilteredAnchor
          placeholder={placeholder}
          filter={propFilter || filter}
          onChangeFilter={propSetFilter || setFilter}
          {...params}
        />
      )}
    />
  );
};
