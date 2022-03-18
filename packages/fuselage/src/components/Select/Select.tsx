import { useMergedRefs } from '@rocket.chat/fuselage-hooks';
import type { Keys } from '@rocket.chat/icons';
import type { ComponentProps, Ref, ElementType } from 'react';
import React, { forwardRef } from 'react';

import type { OptionType } from '../../types/OptionType';
import type { SelectOption } from '../../types/SelectOption';
import type { Box } from '../Box';
import SelectAddon from './SelectAddon';
import SelectAnchor from './SelectAnchor';
import SelectContainer from './SelectContainer';
import SelectDropdown from './SelectDropdown';
import SelectPlaceholder from './SelectPlaceholder';
import SelectValue from './SelectValue';
import SelectWrapper from './SelectWrapper';
import { useSelectDropdown } from './useSelectDropdown';
import { useSelectState } from './useSelectState';

type SelectProps = Omit<ComponentProps<typeof Box>, 'value' | 'onChange'> & {
  value?: SelectOption[0];
  options: SelectOption[];
  error?: string | boolean;
  onChange?: (value: SelectOption[0]) => void;
  renderItem?: ElementType;
  customEmpty?: string;
  addonIcon?: Keys;
};

const Select = forwardRef(function Select(
  {
    value,
    error = false,
    disabled = false,
    options = [],
    onChange,
    placeholder = '',
    renderItem,
    addonIcon = 'chevron-down',
    customEmpty,
    ...props
  }: SelectProps,
  ref: Ref<HTMLElement>
) {
  const { selectedOptions, matchOptions, selectOption } = useSelectState({
    defaultValue: value,
    options,
    onChange,
    getValue: (option: SelectOption) => option[0],
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
    hideOnSelect: true,
    matchOptions,
    selectOption,
    toDropdownOption: (option, selected): OptionType => {
      const value = option[0];
      return [value, option[1], selected];
    },
  });

  const mergedAnchorRef = useMergedRefs(ref, anchorRef);

  const [selectedOption] = selectedOptions;

  return (
    <SelectContainer
      ref={containerRef}
      disabled={disabled}
      invalid={Boolean(error)}
      onClick={triggerDropdown}
      {...props}
    >
      <SelectWrapper>
        {selectedOption ? (
          <SelectValue
            label={selectedOption[1]}
            accessibleLabel={selectedOption[1]}
          />
        ) : (
          <SelectPlaceholder>{placeholder}</SelectPlaceholder>
        )}
        <SelectAnchor
          ref={mergedAnchorRef}
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
        {...dropdownProps}
      />
    </SelectContainer>
  );
});

export default Select;
