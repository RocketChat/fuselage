// @ts-nocheck

import React from 'react';
import type { ControlProps, GroupBase } from 'react-select';

import { Box } from '..';

const Control = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  props: ControlProps<Option, IsMulti, Group>
) => {
  const {
    children,
    isDisabled = true,
    // isFocused,
    innerRef,
    innerProps,
    // menuIsOpen,
  } = props;

  return (
    <Box
      ref={innerRef}
      className={[
        'rcx-combobox',
        'rcx-select',
        // 'invalid',
        isDisabled && 'disabled',
      ]}
      // {...getStyleProps(props, 'control', {
      //   'control': true,
      //   'control--is-disabled': isDisabled,
      //   'control--is-focused': isFocused,
      //   'control--menu-is-open': menuIsOpen,
      // })}
      {...innerProps}
    >
      {children}
    </Box>
  );
};

export default Control;
