import type { ForwardedRef } from 'react';
import { forwardRef } from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

/** @public */
export type PlaceholderProps = BoxProps;

/** @public */
const Placeholder = forwardRef(function Placeholder(
  props: PlaceholderProps,
  ref: ForwardedRef<HTMLOptionElement>
) {
  return <Box is='option' rcx-input-box__placeholder ref={ref} {...props} />;
});

export default Placeholder;
