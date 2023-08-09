import type { ComponentProps, Dispatch, Ref, SetStateAction } from 'react';
import React, { forwardRef, useState } from 'react';

import { SelectLegacy } from '.';
import type { Icon } from '..';
import type { SelectAnchorParams } from './SelectAnchorParams';
import SelectFilteredAnchor from './SelectFilteredAnchor';

export type SelectFilteredProps = ComponentProps<typeof SelectLegacy> & {
  filter?: string;
  setFilter?: Dispatch<SetStateAction<string>>;
  addonIcon?: ComponentProps<typeof Icon>['name'];
};

export const SelectFiltered = forwardRef(function SelectFiltered(
  {
    options,
    placeholder,
    filter: propFilter,
    setFilter: propSetFilter,
    ...props
  }: SelectFilteredProps,
  ref: Ref<HTMLInputElement>
) {
  const [filter, setFilter] = useState('');

  return (
    <SelectLegacy
      ref={ref}
      placeholder={placeholder}
      filter={propFilter || filter}
      options={options}
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
});
