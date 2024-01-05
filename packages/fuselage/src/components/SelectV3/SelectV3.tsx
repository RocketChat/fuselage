import type { ComponentProps, ComponentType } from 'react';
import React from 'react';
import type { OptionProps, GroupBase, MultiValueProps } from 'react-select';
import Select from 'react-select';

import DropdownIndicator from './DropdownIndicator';
import MultiValue from './MultiValue';
import SelectOption from './SelectOption';

export type SelectOptionProps =
  | ComponentType<OptionProps<unknown, boolean, GroupBase<unknown>>>
  | undefined;

export type LabelValueProps =
  | ComponentType<MultiValueProps<unknown, boolean, GroupBase<unknown>>>
  | undefined;

type SelectProps = {
  renderOption: SelectOptionProps;
  renderLabel: LabelValueProps;
  error?: boolean | string;
} & ComponentProps<typeof Select>;

const SelectV3 = ({
  renderOption,
  renderLabel,
  error,
  ...props
}: SelectProps) => (
  <Select
    components={{
      DropdownIndicator,
      Option: renderOption || SelectOption,
      MultiValue: renderLabel || MultiValue,
      IndicatorSeparator: () => null,
    }}
    classNames={{
      container: () => 'rcx-select-v3 rcx-select-v3__container',
      control: ({ isDisabled }) =>
        [
          'rcx-select-v3__control',
          'rcx-box',
          'rcx-box--full',
          isDisabled && 'disabled',
          error && 'invalid',
        ]
          .filter(Boolean)
          .join(' '),
      menu: () => 'rcx-select-v3__menu rcx-tile rcx-tile-elevation-2',
      menuList: () => 'rcx-select-v3__menu-list',
      option: () => 'rcx-select-v3__option',
      valueContainer: () => 'rcx-select-v3__value-container',
      multiValue: () => 'rcx-select-v3__multi-value',
      multiValueLabel: () => 'rcx-select-v3__multi-value-label',
      multiValueRemove: () => 'rcx-select-v3__multi-value-remove',
      input: () => 'rcx-select-v3__input',
      placeholder: () => 'rcx-select-v3__placeholder',
      singleValue: () => 'rcx-select-v3__single-value',
      indicatorsContainer: () => 'rcx-select-v3__indicators-container',
      dropdownIndicator: () => 'rcx-select-v3__dropdown-indicator',
    }}
    {...props}
  />
);
export default SelectV3;
