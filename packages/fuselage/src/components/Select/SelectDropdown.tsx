import type { ElementType, RefObject, SyntheticEvent } from 'react';
import React from 'react';

import { Options, PositionAnimated } from '..';
import type { OptionType } from '../../types/OptionType';

const prevent = (e: SyntheticEvent) => {
  e.preventDefault();
  e.stopPropagation();
  e.nativeEvent.stopImmediatePropagation();
};

type SelectDropdownProps = {
  anchorRef: RefObject<Element>;
  visibility: 'hidden' | 'visible' | 'hiding' | 'unhiding' | undefined;
  inlineSize: number;
  options: OptionType[];
  onSelect: (value: OptionType) => void;
  renderItem?: ElementType;
  cursor: number;
  customEmpty?: string;
  multiple?: boolean;
};

const SelectDropdown = ({
  anchorRef,
  visibility,
  inlineSize,
  options,
  onSelect,
  renderItem,
  cursor,
  customEmpty,
  multiple = false,
}: SelectDropdownProps) => (
  <PositionAnimated visible={visibility} anchor={anchorRef}>
    <Options
      width={inlineSize}
      options={options}
      onSelect={onSelect}
      renderItem={renderItem}
      cursor={cursor}
      customEmpty={customEmpty}
      onMouseDown={prevent}
      multiple={multiple}
    />
  </PositionAnimated>
);

export default SelectDropdown;
