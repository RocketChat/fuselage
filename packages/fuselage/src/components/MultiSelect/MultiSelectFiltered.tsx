import React, {
  ComponentProps,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';

import { Icon } from '..';
import { MultiSelect } from './MultiSelect';
import { MultiSelectAnchorParams } from './MultiSelectAnchorParams';
import MultiSelectFilteredAnchor from './MultiSelectFilteredAnchor';

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
      filter={filter}
      options={options}
      anchor={(params: MultiSelectAnchorParams) => (
        <MultiSelectFilteredAnchor
          placeholder={placeholder}
          filter={filter}
          onChangeFilter={setFilter}
          {...params}
        />
      )}
    />
  );
};
