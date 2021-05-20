import {
  ComponentProps,
  Dispatch,
  ForwardRefExoticComponent,
  SetStateAction,
} from 'react';

import { Box } from '../Box';

type PaginationProps = ComponentProps<typeof Box> & {
  count: number;
  current?: number;
  divider?: boolean;
  itemsPerPage?: 25 | 50 | 100;
  itemsPerPageLabel?: () => string;
  showingResultsLabel?: (props: {
    count: number;
    current: number;
    itemsPerPage: 25 | 50 | 100;
  }) => string;
  onSetCurrent?: Dispatch<SetStateAction<number>>;
  onSetItemsPerPage?: Dispatch<SetStateAction<25 | 50 | 100>>;
};
export const Pagination: ForwardRefExoticComponent<PaginationProps>;
