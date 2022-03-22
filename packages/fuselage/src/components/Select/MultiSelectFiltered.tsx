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
import { CheckOption } from '../Options';
import MultiSelectFilteredAnchor from './MultiSelectFilteredAnchor';
import MultiSelectValue from './MultiSelectValue';
import SelectAddon from './SelectAddon';
import SelectContainer from './SelectContainer';
import SelectDropdown from './SelectDropdown';
import SelectWrapper from './SelectWrapper';
import { useSelectDropdown } from './useSelectDropdown';
import { useSelectState } from './useSelectState';

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
  addonIcon?: Keys;
  error?: string | boolean;
  customEmpty?: string;
  renderItem?: ElementType;
};

const MultiSelectFiltered = ({
  value,
  options,
  onChange,
  filter: propFilter,
  setFilter: propSetFilter,
  placeholder,
  disabled = false,
  error = false,
  addonIcon,
  renderItem = CheckOption,
  customEmpty,
  ...containerProps
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

  const {
    selected: selectedOptions,
    match: matchOptions,
    append: selectOption,
  } = useSelectState({
    values: value,
    defaultValues: [],
    options: filteredOptions,
    onAppend: onChange,
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
    hideOnSelect: false,
    matchOptions,
    selectOption,
    toDropdownOption: (option, selected) => [option[0], option[1], selected],
  });

  return (
    <SelectContainer
      ref={containerRef}
      disabled={disabled}
      invalid={Boolean(error)}
      onClick={triggerDropdown}
      {...containerProps}
    >
      <SelectWrapper>
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
      </SelectWrapper>
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
