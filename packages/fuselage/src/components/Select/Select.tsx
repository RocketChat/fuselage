import { useMergedRefs } from '@rocket.chat/fuselage-hooks';
import type { Keys } from '@rocket.chat/icons';
import type { ComponentProps, Ref, ElementType } from 'react';
import React, { forwardRef } from 'react';

import type { SelectOption } from '../../types/SelectOption';
import type { Box } from '../Box';
import SelectAddon from './SelectAddon';
import SelectAnchor from './SelectAnchor';
import SelectContainer from './SelectContainer';
import SelectDropdown from './SelectDropdown';
import SelectPlaceholder from './SelectPlaceholder';
import SelectValue from './SelectValue';
import SelectWrapper from './SelectWrapper';
import { useSelect } from './useSelect';

type SelectProps = Omit<ComponentProps<typeof Box>, 'value' | 'onChange'> & {
  value?: SelectOption[0];
  options: SelectOption[];
  onChange?: (value: SelectOption[0], selected: SelectOption[]) => void;
  addonIcon?: Keys;
  error?: string | boolean;
  renderItem?: ElementType;
  customEmpty?: string;
};

const Select = forwardRef(function Select(
  {
    value,
    options,
    onChange,
    error = false,
    disabled = false,
    placeholder,
    renderItem,
    addonIcon = 'chevron-down',
    customEmpty,
    ...containerProps
  }: SelectProps,
  ref: Ref<HTMLElement>
) {
  const {
    selected,
    containerRef,
    anchorRef,
    anchorProps,
    dropdownProps,
    dropdownOpen,
    triggerDropdown,
  } = useSelect({
    options,
    value,
    onChange,
    getValue: ([value]) => value,
    toDropdownOption: ([value, label], selected) => [value, label, selected],
  });

  const mergedAnchorRef = useMergedRefs(ref, anchorRef);

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
