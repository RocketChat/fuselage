import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { styled } from '@tamagui/core';

import { RcxView } from '../../primitives';

import { useGridContext } from './Grid';

const GridItemBase = styled(RcxView, {
  name: 'GridItem',
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 0,
});

export type GridItemProps = ComponentPropsWithoutRef<typeof GridItemBase> & {
  xs?: 1 | 2 | 3 | 4;
  sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  lg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  xl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  children?: ReactNode;
};

const GridItem = ({ xs, sm, md, lg, xl, children, ...props }: GridItemProps) => {
  const { activeBreakpoint, gutter, totalColumns } = useGridContext();
  const halfGutter = gutter / 2;

  // Determine the column span for the active breakpoint
  const breakpointColumns: Record<string, number | undefined> = {
    xs,
    sm,
    md,
    lg,
    xl,
  };

  const columns = breakpointColumns[activeBreakpoint];

  const columnStyles = columns
    ? {
        flexGrow: 0 as const,
        flexBasis: `${(columns / totalColumns) * 100}%`,
        maxWidth: `${(columns / totalColumns) * 100}%`,
      }
    : {};

  return (
    <GridItemBase
      paddingBlock={halfGutter}
      paddingInline={halfGutter}
      {...columnStyles}
      {...props}
    >
      {children}
    </GridItemBase>
  );
};

export default GridItem;
