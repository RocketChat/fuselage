import React, { memo } from 'react';

import { CheckBox } from '../CheckBox';
import type { OptionProps } from './Option';
import Option from './Option';

/** @public */
export type CheckOptionProps = OptionProps;

/** @public */
function CheckOption({
  selected,
  children: label,
  ...options
}: CheckOptionProps) {
  return (
    <Option label={label as string} selected={selected} {...options}>
      <CheckBox checked={selected} />
    </Option>
  );
}

export default memo(CheckOption);
