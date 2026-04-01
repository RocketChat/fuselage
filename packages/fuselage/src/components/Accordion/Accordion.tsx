import type { ReactNode } from 'react';
import { styled } from '@tamagui/core';

import { RcxView } from '../../primitives';

const AccordionFrame = styled(RcxView, {
  name: 'Accordion',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  borderBlockEndColor: '$strokeExtraLight',
  borderBlockEndWidth: 1,
});

export type AccordionProps = {
  children: ReactNode;
};

/**
 * An `Accordion` allows users to toggle the display of sections of content.
 */
const Accordion = ({ children, ...props }: AccordionProps) => (
  <AccordionFrame {...props}>{children}</AccordionFrame>
);

export default Accordion;
