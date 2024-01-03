import type { AllHTMLAttributes, ComponentProps } from 'react';
import React from 'react';

import Box from '../Box/Box';

type StatesLinkProps = ComponentProps<typeof Box> &
  AllHTMLAttributes<HTMLAnchorElement>;

const StatesLink = (props: StatesLinkProps) => (
  <Box is='a' rcx-states__link {...props} />
);

export default StatesLink;
