import React, { useState } from 'react';

import { MultiSelect } from './MultiSelect';
import MultiSelectFilteredAnchor from './MultiSelectFilteredAnchor';

export const MultiSelectFiltered = ({ placeholder, ...props }) => {
  const [filter, setFilter] = useState('');

  return (
    <MultiSelect
      filter={filter}
      {...props}
      anchor={(params) => (
        <MultiSelectFilteredAnchor
          placeholder={placeholder}
          filter={filter}
          onChangeFilter={setFilter}
          {...params}
        />
      )}
      onSelect={() => setFilter('')}
    />
  );
};
