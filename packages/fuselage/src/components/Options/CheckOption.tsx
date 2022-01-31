import React from 'react';

import { CheckBox } from '../CheckBox';
import Option from './Option';
import { OptionProps } from './Option/Option';

export const CheckOption = React.memo<typeof Option>(
  ({ selected, children: label, ...options }: OptionProps) => (
    <Option label={label as string} selected={selected} {...options}>
      <CheckBox checked={selected} />
    </Option>
  )
);
