// @ts-nocheck

import React from 'react';
import type { OptionProps } from 'react-select';

import Option from '../Option';

const SelectOption = (props: OptionProps) => {
  const { children, isDisabled, isFocused, isSelected, innerRef, innerProps } =
    props;
  return (
    <Option
      // {...getStyleProps(props, 'option', {
      //   option: true,
      //   'option--is-disabled': isDisabled,
      //   'option--is-focused': isFocused,
      //   'option--is-selected': isSelected,
      // })}
      focus={isFocused}
      selected={isSelected}
      ref={innerRef}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      {...innerProps}
    >
      {children}
    </Option>
  );
};

export default SelectOption;
