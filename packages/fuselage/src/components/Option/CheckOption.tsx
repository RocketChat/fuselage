import type { ComponentProps } from 'react';
import { memo } from 'react';

import { CheckBox } from '../CheckBox';
import Option from './Option';

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
