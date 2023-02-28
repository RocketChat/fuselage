import type { ComponentProps, ReactElement, ReactNode } from 'react';
import React from 'react';

import Box from '../Box';

type AccordionProps = ComponentProps<typeof Box> & {
  animated?: boolean;
  children: ReactNode;
};

const Accordion = (props: AccordionProps): ReactElement<AccordionProps> => (
  <Box animated rcx-accordion {...props} />
);

export default Accordion;
