import type { Dispatch, SetStateAction } from 'react';
import { useState, forwardRef } from 'react';

import type { IconProps } from '../Icon';

import type { MultiSelectProps } from './MultiSelect';
import MultiSelect from './MultiSelect';
import type { MultiSelectAnchorParams } from './MultiSelectAnchorParams';
import MultiSelectFilteredAnchor from './MultiSelectFilteredAnchor';

export type MultiSelectFilteredProps = MultiSelectProps & {
  filter?: string;
  setFilter?: Dispatch<SetStateAction<string>>;
  addonIcon?: IconProps['name'];
};

const MultiSelectFiltered = forwardRef<
  HTMLInputElement,
  MultiSelectFilteredProps
>(
  (
    {
      options,
      placeholder,
      filter: propFilter,
      setFilter: propSetFilter,
      ...props
    },
    ref,
  ) => {
    const [filter, setFilter] = useState('');

    return (
      <MultiSelect
        {...props}
        ref={ref}
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
  },
);

export default MultiSelectFiltered;
