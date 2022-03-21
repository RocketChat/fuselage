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
import type { OptionType } from '../../types/OptionType';
import type { SelectOption } from '../../types/SelectOption';
import type { Box } from '../Box';
import { CheckOption } from '../Options';
import MultiSelectFilteredAnchor from './MultiSelectFilteredAnchor';
import MultiSelectValue from './MultiSelectValue';
import MultiSelectWrapper from './MultiSelectWrapper';
import SelectAddon from './SelectAddon';
import SelectContainer from './SelectContainer';
import SelectDropdown from './SelectDropdown';
import { useMultiSelectState } from './useMultiSelectState';
import { useSelectDropdown } from './useSelectDropdown';

type MultiSelectFilteredProps = Omit<
  ComponentProps<typeof Box>,
  'onChange' | 'value'
> & {
  value?: SelectOption[0][];
  options: SelectOption[];
  onChange?: (
    values: string[],
    selectedOptions: SelectOption<string>[]
  ) => void;
  filter?: string;
  setFilter?: Dispatch<SetStateAction<string>>;
  error?: string;
  customEmpty?: string;
  renderItem?: ElementType;
  renderSelected?: ElementType;
  addonIcon?: Keys;
};

const MultiSelectFiltered = ({
  filter: propFilter,
  setFilter: propSetFilter,
  value,
  options = [],
  error,
  disabled = false,
  onChange,
  placeholder,
  renderItem = CheckOption,
  customEmpty,
  addonIcon,
  ...props
}: MultiSelectFilteredProps) => {
  const [filter, setFilter] = useControlledState(propFilter, '', propSetFilter);

  const filteredOptions: SelectOption[] = useMemo(() => {
    if (propFilter !== undefined) {
      return options;
    }

    return options.filter(([, label]: SelectOption) =>
      localeIncludes(label, filter, {
        sensitivity: 'base',
      })
    );
  }, [propFilter, options, filter]);

  const { selectedOptions, matchOptions, selectOption } = useMultiSelectState({
    defaultValue: value ?? [],
    options: filteredOptions,
    onChange,
    getValue: ([value]) => value,
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
    hideOnSelect: false,
    matchOptions,
    selectOption,
    toDropdownOption: (option, selected): OptionType => {
      const value = option[0];
      return [value, option[1], selected];
    },
  });

  return (
    <SelectContainer
      ref={containerRef}
      disabled={disabled}
      invalid={Boolean(error)}
      onClick={triggerDropdown}
      {...props}
    >
      <MultiSelectWrapper>
        {selectedOptions.map((selectedOption) => (
          <MultiSelectValue
            key={selectedOption[0]}
            label={selectedOption[1]}
            accessibleLabel={selectedOption[1]}
            onClick={() => selectOption(selectedOption)}
          />
        ))}
        <MultiSelectFilteredAnchor
          ref={anchorRef}
          filter={propFilter || filter}
          onChangeFilter={propSetFilter || setFilter}
          placeholder={placeholder}
          disabled={disabled}
          {...anchorProps}
        />
      </MultiSelectWrapper>
      <SelectAddon icon={addonIcon} closed={dropdownOpen} />
      <SelectDropdown
        anchorRef={containerRef}
        renderItem={renderItem}
        customEmpty={customEmpty}
        multiple
        {...dropdownProps}
      />
    </SelectContainer>
  );
};

export default MultiSelectFiltered;
