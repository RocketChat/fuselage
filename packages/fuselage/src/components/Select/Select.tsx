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
import { useSelect } from './useSelect';

type SelectProps = Omit<ComponentProps<typeof Box>, 'value' | 'onChange'> & {
  error?: string | boolean;
  options: SelectOption[];
  value?: SelectOption[0];
  onChange?: (value: SelectOption[0]) => void;
  getLabel?: (params: SelectOption) => SelectOption[1];
  getValue?: (params: SelectOption) => SelectOption[0];
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
    getValue,
    getLabel,
    placeholder = '',
    renderItem,
    addonIcon = 'chevron-down',
    customEmpty,
    ...props
  }: SelectProps,
  ref: Ref<HTMLInputElement>
) {
  const {
    containerProps,
    wrapperProps,
    valueParams,
    anchorParams,
    addonProps,
    dropdownProps,
  } = useSelect({
    ref,
    value,
    options,
    onChange,
    getValue,
    getLabel,
    placeholder,
    disabled,
    error,
    anchorInactive: true,
    addonIcon,
    renderItem,
    customEmpty,
  });

  return (
    <SelectContainer {...containerProps} {...props}>
      <SelectWrapper {...wrapperProps}>
        <SelectValue {...valueParams} />
        <SelectAnchor {...anchorParams} />
      </SelectWrapper>
      <SelectAddon {...addonProps} />
      <SelectDropdown {...dropdownProps} />
    </SelectContainer>
  );
});

export default Select;
