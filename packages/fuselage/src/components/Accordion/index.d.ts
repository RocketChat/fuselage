import { ComponentProps, ForwardRefExoticComponent } from 'react';

import { Box } from '../Box';

type AccordionProps = ComponentProps<typeof Box>;
type AccordionItemProps = Omit<ComponentProps<typeof Box>, 'title'> & {
  defaultExpanded?: boolean;
  title?: string;
};

export const Accordion: ForwardRefExoticComponent<AccordionProps> & {
  Item: ForwardRefExoticComponent<AccordionItemProps>;
};
