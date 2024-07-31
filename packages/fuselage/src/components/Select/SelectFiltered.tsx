import type { IconName } from '@rocket.chat/icons';
import type { Dispatch, ForwardedRef, SetStateAction } from 'react';
import { forwardRef, useState } from 'react';

import type { SelectAnchorParams } from './SelectAnchorParams';
import SelectFilteredAnchor from './SelectFilteredAnchor';
import type { SelectLegacyProps } from './SelectLegacy';
import { SelectLegacy } from './SelectLegacy';

/** @public */
export type SelectFilteredProps = SelectLegacyProps & {
  filter?: string;
  setFilter?: Dispatch<SetStateAction<string>>;
  addonIcon?: IconName;
};

/** @public */
export const SelectFiltered = forwardRef(function SelectFiltered(
  {
    options,
    placeholder,
    filter: propFilter,
    setFilter: propSetFilter,
    ...props
  }: SelectFilteredProps,
  ref: ForwardedRef<HTMLInputElement>
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
