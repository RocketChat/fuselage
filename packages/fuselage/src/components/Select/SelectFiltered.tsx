import type { Keys } from '@rocket.chat/icons';
import type {
  ComponentProps,
  Dispatch,
  ElementType,
  SetStateAction,
} from 'react';
import React from 'react';

import { localeIncludes } from '../../helpers/localeIncludes';
import type { SelectOption } from '../../types/SelectOption';
import type { Box } from '../Box';
import SelectAddon from './SelectAddon';
import SelectContainer from './SelectContainer';
import SelectDropdown from './SelectDropdown';
import SelectFilteredAnchor from './SelectFilteredAnchor';
import SelectPlaceholder from './SelectPlaceholder';
import SelectValue from './SelectValue';
import SelectWrapper from './SelectWrapper';
import { useSelect } from './useSelect';

type SelectFilteredProps = Omit<
  ComponentProps<typeof Box>,
  'value' | 'defaultValue' | 'onChange'
> & {
  value?: SelectOption[0];
  defaultValue?: SelectOption[0];
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
  options,
  value,
  defaultValue,
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
  const {
    selected,
    filter,
    setFilter,
    containerRef,
    anchorRef,
    anchorProps,
    dropdownProps,
    dropdownOpen,
    triggerDropdown,
  } = useSelect({
    options,
    value,
    defaultValue,
    onChange,
    getValue: ([value]) => value,
    filter: propFilter,
    onChangeFilter: propSetFilter,
    matchFilter: ([, label], filter) =>
      localeIncludes(label, filter, {
        sensitivity: 'base',
      }),
    toDropdownOption: ([value, label], selected) => [value, label, selected],
  });

  const [selectedOption] = selected;

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
