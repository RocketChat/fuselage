import React from 'react';
import type { OptionProps } from 'react-select';

import Option from '../Option';

const SelectOption = ({
  children,
  isDisabled,
  isFocused,
  isSelected,
  innerRef,
  innerProps: { is, ...innerProps },
}: OptionProps) => (
  <Option
    focus={isFocused}
    selected={isSelected}
    ref={innerRef as any}
    disabled={isDisabled}
    aria-disabled={isDisabled}
    {...innerProps}
  >
    {children}
  </Option>
);
export default SelectOption;
