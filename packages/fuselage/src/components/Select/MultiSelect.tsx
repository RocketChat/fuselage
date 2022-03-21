import { useMergedRefs } from '@rocket.chat/fuselage-hooks';
import type { Keys } from '@rocket.chat/icons';
import type { ComponentProps, ElementType, Ref } from 'react';
import React, { forwardRef } from 'react';

import type { SelectOption } from '../../types/SelectOption';
import type { Box } from '../Box';
import { CheckOption } from '../Options';
import MultiSelectAnchor from './MultiSelectAnchor';
import MultiSelectValue from './MultiSelectValue';
import SelectAddon from './SelectAddon';
import SelectContainer from './SelectContainer';
import SelectDropdown from './SelectDropdown';
import SelectPlaceholder from './SelectPlaceholder';
import SelectWrapper from './SelectWrapper';
import { useMultiSelectState } from './useMultiSelectState';
import { useSelectDropdown } from './useSelectDropdown';

type MultiSelectProps = Omit<
  ComponentProps<typeof Box>,
  'onChange' | 'value'
> & {
  value?: SelectOption[0][];
  options: SelectOption[];
  onChange?: (
    values: string[],
    selectedOptions: SelectOption<string>[]
  ) => void;
  addonIcon?: Keys;
  error?: string | boolean;
  customEmpty?: string;
  renderItem?: ElementType;
};

const MultiSelect = forwardRef(function MultiSelect(
  {
    value,
    options,
    onChange,
    disabled = false,
    error = false,
    placeholder,
    addonIcon,
    renderItem = CheckOption,
    customEmpty,
    ...containerProps
  }: MultiSelectProps,
  ref: Ref<HTMLInputElement>
) {
  const { selectedOptions, matchOptions, selectOption } = useMultiSelectState({
    defaultValue: value ?? [],
    options,
    onChange,
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
    options,
    selectedOptions,
    hideOnSelect: false,
    matchOptions,
    selectOption,
    toDropdownOption: (option, selected) => [option[0], option[1], selected],
  });

  const mergedAnchorRef = useMergedRefs(ref, anchorRef);

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
        {selectedOptions.length === 0 && (
          <SelectPlaceholder>{placeholder}</SelectPlaceholder>
        )}
        <MultiSelectAnchor
          ref={mergedAnchorRef}
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
});

export default MultiSelect;
