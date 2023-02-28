import type { ComponentProps } from 'react';
import React, { memo } from 'react';

import { CheckBox } from '../CheckBox';
import Option from '../Option';

type CheckOptionProps = ComponentProps<typeof Option>;

const CheckOption = ({
  selected,
  children: label,
  ...options
}: CheckOptionProps) => (
  <Option label={label as string} selected={selected} {...options}>
    <CheckBox checked={selected} />
  </Option>
);

export default memo(CheckOption);
