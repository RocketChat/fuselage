import React from 'react';
import type { OptionProps } from 'react-select';

import Option from '../Option';

const SelectOption = ({
  children,
  isDisabled,
  isFocused,
  isSelected,
  innerRef,
  theme,
  innerProps: { is, ...innerProps },
}: OptionProps) => {
  // const {
  //   children,
  //   isDisabled,
  //   isFocused,
  //   isSelected,
  //   innerRef,
  //   theme,
  //   innerProps: { is, ...innerProps },
  // } = props;
  console.log(theme);

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
      ref={innerRef as any}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      {...innerProps}
    >
      {children}
    </Option>
  );
};

export default SelectOption;
