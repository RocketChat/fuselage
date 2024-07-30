import type { ReactNode } from 'react';
import React from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';
import AccordionItem from './AccordionItem';

/** @public */
export type AccordionProps = BoxProps & {
  animated?: boolean;
  children: ReactNode;
};

/**
 * An `Accordion` allows users to toggle the display of sections of content.
 *
 * @public
 */
function Accordion(props: AccordionProps) {
  return <Box animated rcx-accordion {...props} />;
}

/** @public */
// eslint-disable-next-line @typescript-eslint/no-namespace
namespace Accordion {
  /**
   * @deprecated use `AccordionItem` instead
   */
  export const Item = AccordionItem;
}

export default Accordion;
