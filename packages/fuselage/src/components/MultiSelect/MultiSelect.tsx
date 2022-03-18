import { useMergedRefs } from '@rocket.chat/fuselage-hooks';
import type { Keys } from '@rocket.chat/icons';
import type { ComponentProps, ElementType, Ref } from 'react';
import React, { forwardRef } from 'react';

import type { OptionType } from '../../types/OptionType';
import type { SelectOption } from '../../types/SelectOption';
import type { Box } from '../Box';
import { CheckOption } from '../Options';
import SelectAddon from '../Select/SelectAddon';
import SelectContainer from '../Select/SelectContainer';
import SelectDropdown from '../Select/SelectDropdown';
import SelectPlaceholder from '../Select/SelectPlaceholder';
import { useSelectDropdown } from '../Select/useSelectDropdown';
import MultiSelectAnchor from './MultiSelectAnchor';
import MultiSelectValue from './MultiSelectValue';
import MultiSelectWrapper from './MultiSelectWrapper';
import { useMultiSelectState } from './useMultiSelectState';

type MultiSelectProps = Omit<
  ComponentProps<typeof Box>,
  'onChange' | 'value'
> & {
  value?: SelectOption[0][];
  error?: string;
  options: SelectOption[];
  onChange?: (
    values: string[],
    selectedOptions: SelectOption<string>[]
  ) => void;
  customEmpty?: string;
  renderItem?: ElementType;
  addonIcon?: Keys;
};

export const MultiSelect = forwardRef(function MultiSelect(
  {
    value,
    options,
    error,
    disabled = false,
    onChange,
    placeholder,
    renderItem = CheckOption,
    customEmpty,
    addonIcon,
    ...props
  }: MultiSelectProps,
  ref: Ref<HTMLInputElement>
) {
  const { selectedOptions, matchOptions, selectOption } = useMultiSelectState({
    defaultValue: value ?? [],
    options,
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
    options,
    selectedOptions,
    hideOnSelect: false,
    matchOptions,
    selectOption,
    toDropdownOption: (option, selected): OptionType => {
      const value = option[0];
      return [value, option[1], selected];
    },
  });

  const mergedAnchorRef = useMergedRefs(ref, anchorRef);

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
        {selectedOptions.length === 0 && (
          <SelectPlaceholder>{placeholder}</SelectPlaceholder>
        )}
        <MultiSelectAnchor
          ref={mergedAnchorRef}
          placeholder={selectedOptions.length > 0 ? undefined : undefined}
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
});
