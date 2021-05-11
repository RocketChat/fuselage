import {
  ComponentProps,
  ForwardRefExoticComponent,
  PropsWithChildren,
} from 'react';

import { Box } from '../Box';

type MarginsProps = PropsWithChildren<{
  all?: ComponentProps<typeof Box>['margin'];
  block?: ComponentProps<typeof Box>['marginBlock'];
  blockStart?: ComponentProps<typeof Box>['marginBlockStart'];
  blockEnd?: ComponentProps<typeof Box>['marginBlockEnd'];
  inline?: ComponentProps<typeof Box>['marginInline'];
  inlineStart?: ComponentProps<typeof Box>['marginInlineStart'];
  inlineEnd?: ComponentProps<typeof Box>['marginInlineEnd'];
}>;
const Margins: ForwardRefExoticComponent<MarginsProps>;

export = Margins;
