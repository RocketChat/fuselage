import React, { ComponentProps, ReactElement, ReactNode } from 'react';

import { Box } from '../Box';
import { Item } from './Item';

type AccordionProps = ComponentProps<typeof Box> & {
  animated?: boolean;
  children: ReactNode;
};

export function Accordion(props: AccordionProps): ReactElement<AccordionProps> {
  return <Box animated rcx-accordion {...props} />;
}

Accordion.Item = Item;
