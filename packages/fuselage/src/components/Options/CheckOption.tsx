import React, { ComponentProps, memo } from 'react';

import { CheckBox } from '../CheckBox';
import Option from './Option';

type CheckOptionProps = ComponentProps<typeof Option>;

export const CheckOption = memo(
  ({ selected, children: label, ...options }: CheckOptionProps) => (
    <Option label={label as string} selected={selected} {...options}>
      <CheckBox checked={selected} />
    </Option>
  )
);
