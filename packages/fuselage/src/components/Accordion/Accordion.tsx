import type { ComponentProps, ReactElement, ReactNode } from 'react';
import React from 'react';

import { AccordionItem } from './AccordionItem';
import Box from '../Box';

type AccordionProps = ComponentProps<typeof Box> & {
  animated?: boolean;
  children: ReactNode;
};

export function Accordion(props: AccordionProps): ReactElement<AccordionProps> {
  return <Box animated rcx-accordion {...props} />;
}

/**
 * @deprecated use named import instead
 */
Accordion.Item = AccordionItem;
