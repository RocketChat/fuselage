import type { ComponentProps } from 'react';
import React, { memo } from 'react';

import Option from './Option';
import { CheckBox } from '../CheckBox';

type CheckOptionProps = ComponentProps<typeof Option>;

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
