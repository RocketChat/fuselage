import type { ElementType, RefObject } from 'react';
import React from 'react';

import { Options, PositionAnimated } from '..';
import type { OptionType } from '../../types/OptionType';

type SelectDropdownProps = {
  anchorRef: RefObject<Element>;
  visibility: 'hidden' | 'visible' | 'hiding' | 'unhiding' | undefined;
  inlineSize: number;
  options: OptionType[];
  onSelect: (value: OptionType) => void;
  renderItem?: ElementType;
  cursor: number;
  customEmpty?: string;
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
}: SelectDropdownProps) => {
  0;

  return (
    <PositionAnimated visible={visibility} anchor={anchorRef}>
      <Options
        width={inlineSize}
        role='listbox'
        options={options}
        onSelect={onSelect}
        renderItem={renderItem}
        cursor={cursor}
        customEmpty={customEmpty}
      />
    </PositionAnimated>
  );
};

export default SelectDropdown;
