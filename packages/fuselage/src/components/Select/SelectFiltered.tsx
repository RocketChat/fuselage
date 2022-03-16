import type { Keys } from '@rocket.chat/icons';
import type {
  ComponentProps,
  Dispatch,
  ElementType,
  SetStateAction,
} from 'react';
import React, { useCallback, useMemo, useState } from 'react';

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
  renderItem?: ElementType;
  customEmpty?: string;
  isControlled?: boolean;
  filter?: string;
  setFilter?: Dispatch<SetStateAction<string>>;
  addonIcon?: Keys;
};

const SelectFiltered = function SelectFiltered({
  value,
  options,
  onChange,
  placeholder,
  disabled = false,
  error = false,
  addonIcon = 'chevron-down',
  renderItem,
  customEmpty,
  filter: propFilter,
  setFilter: propSetFilter,
  ...props
}: SelectFilteredProps) {
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
    containerRef,
    anchorRef,
    dropdownOpen,
    containerProps,
    valueProps,
    anchorProps,
    dropdownProps,
  } = useSelect({
    emptyValue: '',
    getValue: useCallback((option: SelectOption) => option[0] ?? '', []),
    getLabel: useCallback((option: SelectOption) => option[1] ?? '', []),
    getAccessibleLabel: useCallback(
      (option: SelectOption) => option[1] ?? '',
      []
    ),
    value,
    options: filteredOptions,
    onChange,
  });

  return (
    <SelectContainer
      ref={containerRef}
      disabled={disabled}
      invalid={Boolean(error)}
      {...containerProps}
      {...props}
    >
      <SelectWrapper>
        {!dropdownOpen ? (
          <SelectValue placeholder={placeholder} {...valueProps} />
        ) : null}
        <SelectFilteredAnchor
          ref={anchorRef}
          hidden={!dropdownOpen}
          placeholder={placeholder}
          disabled={disabled}
          filter={propFilter || filter}
          onChangeFilter={propSetFilter || setFilter}
          {...anchorProps}
        />
      </SelectWrapper>
      <SelectAddon icon={addonIcon} closed={dropdownOpen} />
      <SelectDropdown
        renderItem={renderItem}
        customEmpty={customEmpty}
        {...dropdownProps}
      />
    </SelectContainer>
  );
};

export default SelectFiltered;
