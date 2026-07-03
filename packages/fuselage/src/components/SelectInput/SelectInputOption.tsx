import type { RefAttributes } from 'react';

import { Box, type BoxProps } from '../Box';

export type SelectInputOptionProps = Omit<BoxProps, 'ref'> &
  RefAttributes<HTMLOptionElement>;

function SelectInputOption(props: SelectInputOptionProps) {
  return <Box is='option' rcx-input-box__option {...props} />;
}

export default SelectInputOption;
