import type { AllHTMLAttributes } from 'react';

import type { BoxProps } from '../Box/Box';
import Box from '../Box/Box';

/** @public */
export type StatesLinkProps = BoxProps & AllHTMLAttributes<HTMLAnchorElement>;

/** @public */
const StatesLink = (props: StatesLinkProps) => (
  <Box is='a' rcx-states__link {...props} />
);

export default StatesLink;
