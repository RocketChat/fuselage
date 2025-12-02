import type { Dispatch, Ref, SetStateAction } from 'react';
import { forwardRef, useState } from 'react';

import type { IconProps } from '..';

import type { SelectProps } from '.';
import { SelectLegacy } from '.';
import type { SelectAnchorParams } from './SelectAnchorParams';
import SelectFilteredAnchor from './SelectFilteredAnchor';

export type SelectFilteredProps = SelectProps & {
  filter?: string;
  setFilter?: Dispatch<SetStateAction<string>>;
  addonIcon?: IconProps['name'];
};

export const SelectFiltered = forwardRef(function SelectFiltered(
  {
    options,
    placeholder,
    filter: propFilter,
    setFilter: propSetFilter,
    ...props
  }: SelectFilteredProps,
  ref: Ref<HTMLInputElement>,
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
