import React, { ComponentProps } from 'react';

import { CheckBox } from '../CheckBox';
import Option from './Option';

export const CheckOption = React.memo<typeof Option>(
  ({
    selected,
    children: label,
    ...options
  }: ComponentProps<typeof Option>) => (
    <Option label={label as string} selected={selected} {...options}>
      <CheckBox checked={selected} />
    </Option>
  )
);
