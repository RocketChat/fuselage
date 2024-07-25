import React, { memo } from 'react';

import { CheckBox } from '../CheckBox';
import type { OptionProps } from './Option';
import Option from './Option';

type CheckOptionProps = OptionProps;

export const CheckOption = memo(function CheckOption({
  selected,
  children: label,
  ...options
}: CheckOptionProps) {
  return (
    <Option label={label as string} selected={selected} {...options}>
      <CheckBox checked={selected} />
    </Option>
  );
});
