// @ts-nocheck

import type { ComponentProps, ComponentType } from 'react';
import React, { forwardRef, useState } from 'react';
import type { OptionProps, GroupBase, MultiValueProps } from 'react-select';
import Select from 'react-select';

// import { useCursor } from '../Options';
// import Position from '../Position';
// import PositionAnimated from '../PositionAnimated';
import Control from './Control';
import DropdownIndicator from './DropdownIndicator';
import MultiValue from './MultiValue';
import SelectMenu from './SelectMenu';
import SelectOption from './SelectOption';
import './ComboBox.styles.scss';

export type SelectOptionProps =
  | ComponentType<OptionProps<unknown, boolean, GroupBase<unknown>>>
  | undefined;

export type LabelValueProps =
  | ComponentType<MultiValueProps<unknown, boolean, GroupBase<unknown>>>
  | undefined;

type SelectProps = {
  renderOption: SelectOptionProps;
  renderLabel: LabelValueProps;
} & ComponentProps<typeof Select>;

const SelectV3 = ({ renderOption, renderLabel, ...props }: SelectProps) => (
  <Select
    components={{
      Control,
      DropdownIndicator,
      Option: renderOption || SelectOption,
      MultiValue: renderLabel || MultiValue,
      Menu: SelectMenu,
    }}
    {...props}
  />
);
export default SelectV3;
