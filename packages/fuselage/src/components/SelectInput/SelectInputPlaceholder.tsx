import { forwardRef } from 'react';

import { Box, type BoxProps } from '../Box';

export type SelectInputPlaceholderProps = BoxProps;

const SelectInputPlaceholder = forwardRef<
  HTMLOptionElement,
  SelectInputPlaceholderProps
>(function Placeholder(props, ref) {
  return <Box is='option' rcx-input-box__placeholder ref={ref} {...props} />;
});

export default SelectInputPlaceholder;
