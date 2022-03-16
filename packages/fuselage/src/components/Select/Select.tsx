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
import SelectValue from './SelectValue';
import SelectWrapper from './SelectWrapper';
import { useDefaultSelect } from './useSelect';

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
  const {
    containerRef,
    anchorRef,
    dropdownOpen,
    containerProps,
    valueProps,
    anchorProps,
    dropdownProps,
  } = useDefaultSelect({
    value,
    options,
    onChange,
  });
  const mergedAnchorRef = useMergedRefs(ref, anchorRef);

  return (
    <SelectContainer
      ref={containerRef}
      disabled={disabled}
      invalid={Boolean(error)}
      {...containerProps}
      {...props}
    >
      <SelectWrapper>
        <SelectValue placeholder={placeholder} {...valueProps} />
        <SelectAnchor
          ref={mergedAnchorRef}
          placeholder={placeholder}
          disabled={disabled}
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
});

export default Select;
