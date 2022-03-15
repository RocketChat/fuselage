import type { Keys } from '@rocket.chat/icons';
import type {
  ComponentProps,
  Dispatch,
  ElementType,
  Ref,
  SetStateAction,
} from 'react';
import React, { forwardRef, useMemo, useState } from 'react';

import type { SelectOption } from '../../types/SelectOption';
import type { Box } from '../Box';
import SelectAddon from './SelectAddon';
import SelectContainer from './SelectContainer';
import SelectDropdown from './SelectDropdown';
import SelectFilteredAnchor from './SelectFilteredAnchor';
import SelectValue from './SelectValue';
import SelectWrapper from './SelectWrapper';
import { useSelect } from './useSelect';

type SelectFilteredProps = Omit<
  ComponentProps<typeof Box>,
  'value' | 'onChange'
> & {
  error?: string | boolean;
  options: SelectOption[];
  value?: SelectOption[0];
  onChange: (value: SelectOption[0]) => void;
  getLabel?: (params: SelectOption) => SelectOption[1];
  getValue?: (params: SelectOption) => SelectOption[0];
  renderItem?: ElementType;
  customEmpty?: string;
  isControlled?: boolean;
  filter?: string;
  setFilter?: Dispatch<SetStateAction<string>>;
  addonIcon?: Keys;
};

const SelectFiltered = forwardRef(function SelectFiltered(
  {
    value,
    options,
    onChange,
    getValue,
    getLabel,
    placeholder,
    disabled = false,
    error = false,
    addonIcon = 'chevron-down',
    renderItem,
    customEmpty,
    filter: propFilter,
    setFilter: propSetFilter,
    ...props
  }: SelectFilteredProps,
  ref: Ref<HTMLElement>
) {
  const [filter, setFilter] = useState('');

  const filteredOptions = useMemo((): SelectOption[] => {
    if (propFilter || !filter) {
      return options;
    }

    return options.filter(([, label]: SelectOption) =>
      label.toLowerCase().includes(filter.toLowerCase())
    );
  }, [propFilter, options, filter]);

  const {
    containerProps,
    wrapperProps,
    valueParams,
    anchorParams,
    addonProps,
    dropdownProps,
  } = useSelect({
    ref,
    value,
    options: filteredOptions,
    onChange,
    getValue,
    getLabel,
    placeholder,
    disabled,
    error,
    anchorInactive: false,
    addonIcon,
    renderItem,
    customEmpty,
  });

  return (
    <SelectContainer {...containerProps} {...props}>
      <SelectWrapper {...wrapperProps}>
        {valueParams.anchorActive ? null : <SelectValue {...valueParams} />}
        <SelectFilteredAnchor
          filter={propFilter || filter}
          onChangeFilter={propSetFilter || setFilter}
          {...anchorParams}
        />
      </SelectWrapper>
      <SelectAddon {...addonProps} />
      <SelectDropdown {...dropdownProps} />
    </SelectContainer>
  );
});

export default SelectFiltered;
