import type { ComponentProps, Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

import type { Icon } from '../index.js';

import { MultiSelect } from './MultiSelect.js';
import type { MultiSelectAnchorParams } from './MultiSelectAnchorParams.js';
import MultiSelectFilteredAnchor from './MultiSelectFilteredAnchor.js';

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
