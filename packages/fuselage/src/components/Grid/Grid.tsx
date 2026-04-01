import { useMediaQuery } from '@rocket.chat/fuselage-hooks';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { createContext, useContext } from 'react';
import { styled } from '@tamagui/core';

import { RcxView } from '../../primitives';

import GridItem from './GridItem';

const GridWrapper = styled(RcxView, {
  name: 'GridWrapper',
  overflow: 'hidden',
});

const GridInner = styled(RcxView, {
  name: 'Grid',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
});

type BreakpointName = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type GridProps = ComponentPropsWithoutRef<typeof GridInner> & {
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  children?: ReactNode;
};

const GUTTER_MAP: Record<BreakpointName, number> = {
  xs: 16,
  sm: 16,
  md: 24,
  lg: 24,
  xl: 24,
};

const COLUMNS_MAP: Record<BreakpointName, number> = {
  xs: 4,
  sm: 8,
  md: 8,
  lg: 12,
  xl: 12,
};

const BREAKPOINT_QUERIES: Record<BreakpointName, string> = {
  xs: '(min-width: 0px)',
  sm: '(min-width: 600px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
};

export type GridContextValue = {
  activeBreakpoint: BreakpointName;
  gutter: number;
  totalColumns: number;
};

export const GridContext = createContext<GridContextValue>({
  activeBreakpoint: 'xs',
  gutter: 16,
  totalColumns: 4,
});

export const useGridContext = () => useContext(GridContext);

const useActiveBreakpoint = (
  forced?: BreakpointName,
): BreakpointName => {
  const isXl = useMediaQuery(BREAKPOINT_QUERIES.xl);
  const isLg = useMediaQuery(BREAKPOINT_QUERIES.lg);
  const isMd = useMediaQuery(BREAKPOINT_QUERIES.md);
  const isSm = useMediaQuery(BREAKPOINT_QUERIES.sm);

  if (forced) return forced;
  if (isXl) return 'xl';
  if (isLg) return 'lg';
  if (isMd) return 'md';
  if (isSm) return 'sm';
  return 'xs';
};

const Grid = ({ xs, sm, md, lg, xl, children, ...props }: GridProps) => {
  const forcedBreakpoint = xs
    ? 'xs'
    : sm
      ? 'sm'
      : md
        ? 'md'
        : lg
          ? 'lg'
          : xl
            ? 'xl'
            : undefined;

  const activeBreakpoint = useActiveBreakpoint(forcedBreakpoint);
  const gutter = GUTTER_MAP[activeBreakpoint];
  const totalColumns = COLUMNS_MAP[activeBreakpoint];
  const halfGutter = gutter / 2;

  return (
    <GridContext.Provider value={{ activeBreakpoint, gutter, totalColumns }}>
      <GridWrapper>
        <GridInner
          marginBlock={-halfGutter}
          marginInline={-halfGutter}
          {...props}
        >
          {children}
        </GridInner>
      </GridWrapper>
    </GridContext.Provider>
  );
};

Grid.Item = GridItem;

export default Grid;
