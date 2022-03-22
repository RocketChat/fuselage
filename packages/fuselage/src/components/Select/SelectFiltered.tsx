import type { Keys } from '@rocket.chat/icons';
import type {
  ComponentProps,
  Dispatch,
  ElementType,
  SetStateAction,
} from 'react';
import React, { useMemo } from 'react';

import { localeIncludes } from '../../helpers/localeIncludes';
import { useControlledState } from '../../hooks/useControlledState';
import type { SelectOption } from '../../types/SelectOption';
import type { Box } from '../Box';
import SelectAddon from './SelectAddon';
import SelectContainer from './SelectContainer';
import SelectDropdown from './SelectDropdown';
import SelectFilteredAnchor from './SelectFilteredAnchor';
import SelectPlaceholder from './SelectPlaceholder';
import SelectValue from './SelectValue';
import SelectWrapper from './SelectWrapper';
import { useSelectDropdown } from './useSelectDropdown';
import { useSelectState } from './useSelectState';

type SelectFilteredProps = Omit<
  ComponentProps<typeof Box>,
  'value' | 'onChange'
> & {
  value?: SelectOption[0];
  options: SelectOption[];
  onChange?: (value: SelectOption[0], selected: SelectOption[]) => void;
  filter?: string;
  setFilter?: Dispatch<SetStateAction<string>>;
  addonIcon?: Keys;
  error?: string | boolean;
  renderItem?: ElementType;
  customEmpty?: string;
};

const SelectFiltered = function SelectFiltered({
  value,
  options,
  onChange,
  disabled = false,
  error = false,
  placeholder,
  addonIcon = 'chevron-down',
  renderItem,
  customEmpty,
  filter: propFilter,
  setFilter: propSetFilter,
  ...containerProps
}: SelectFilteredProps) {
  const [filter, setFilter] = useControlledState(propFilter, '', propSetFilter);

  const filteredOptions = useMemo((): SelectOption[] => {
    if (propFilter !== undefined) {
      return options;
    }

    return options.filter(([, label]: SelectOption) =>
      localeIncludes(label, filter, {
        sensitivity: 'base',
      })
    );
  }, [propFilter, options, filter]);

  const {
    selected: selectedOptions,
    match: matchOptions,
    replace: selectOption,
  } = useSelectState({
    values: value ? [value] : undefined,
    defaultValues: [],
    options: filteredOptions,
    onReplace: onChange,
    getValue: (option) => option[0],
  });

  const {
    containerRef,
    anchorRef,
    anchorProps,
    dropdownProps,
    dropdownOpen,
    triggerDropdown,
  } = useSelectDropdown({
    options: filteredOptions,
    selectedOptions,
    hideOnSelect: true,
    matchOptions,
    selectOption,
    toDropdownOption: (option, selected) => [option[0], option[1], selected],
  });

  const [selectedOption] = selectedOptions;

  return (
    <SelectContainer
      ref={containerRef}
      disabled={disabled}
      invalid={Boolean(error)}
      onClick={triggerDropdown}
      {...containerProps}
    >
      <SelectWrapper>
        {!dropdownOpen ? (
          <>
            {selectedOption ? (
              <SelectValue
                label={selectedOption[1]}
                accessibleLabel={selectedOption[1]}
              />
            ) : (
              <SelectPlaceholder>{placeholder}</SelectPlaceholder>
            )}
          </>
        ) : null}
        <SelectFilteredAnchor
          ref={anchorRef}
          hidden={!dropdownOpen}
          placeholder={placeholder}
          disabled={disabled}
          filter={filter}
          onChangeFilter={setFilter}
          {...anchorProps}
        />
      </SelectWrapper>
      <SelectAddon icon={addonIcon} closed={dropdownOpen} />
      <SelectDropdown
        anchorRef={containerRef}
        renderItem={renderItem}
        customEmpty={customEmpty}
        {...dropdownProps}
      />
    </SelectContainer>
  );
};

export default SelectFiltered;
