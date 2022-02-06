import React, { memo, ReactElement } from 'react';

import { CheckBox } from '../CheckBox';
import Option from './Option';
import { OptionProps } from './Option/Option';

export const CheckOption = memo(
  ({ selected, children: label, ...options }: OptionProps): ReactElement => (
    <Option label={label as string} selected={selected} {...options}>
      <CheckBox checked={selected} />
    </Option>
  )
);
