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
import { useSelect } from './useSelect';

type MultiSelectProps = Omit<
  ComponentProps<typeof Box>,
  'value' | 'defaultValue' | 'onChange'
> & {
  value?: SelectOption[0][];
  defaultValue?: SelectOption[0][];
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
    options,
    value,
    defaultValue,
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
  const {
    selected,
    select,
    containerRef,
    anchorRef,
    anchorProps,
    dropdownProps,
    dropdownOpen,
    triggerDropdown,
  } = useSelect({
    options,
    multiple: true,
    values: value,
    defaultValues: defaultValue,
    onChange,
    getValue: ([value]) => value,
    toDropdownOption: ([value, label], selected) => [value, label, selected],
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
        {selected.map((selected) => (
          <MultiSelectValue
            key={selected[0]}
            label={selected[1]}
            accessibleLabel={selected[1]}
            onClick={() => select(selected)}
          />
        ))}
        {selected.length === 0 && (
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
