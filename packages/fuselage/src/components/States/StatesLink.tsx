import type { AllHTMLAttributes } from 'react';

import type { BoxProps } from '../Box/Box';
import Box from '../Box/Box';

type StatesLinkProps = BoxProps & AllHTMLAttributes<HTMLAnchorElement>;

const StatesLink = (props: StatesLinkProps) => (
  <Box is='a' rcx-states__link {...props} />
);

export default StatesLink;
