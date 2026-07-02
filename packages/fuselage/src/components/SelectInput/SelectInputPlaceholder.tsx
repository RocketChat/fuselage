import type { RefAttributes } from 'react';

import { Box, type BoxProps } from '../Box';

export type SelectInputPlaceholderProps = Omit<BoxProps, 'ref'> &
  RefAttributes<HTMLOptionElement>;

function SelectInputPlaceholder(props: SelectInputPlaceholderProps) {
  return <Box is='option' rcx-input-box__placeholder {...props} />;
}

export default SelectInputPlaceholder;
