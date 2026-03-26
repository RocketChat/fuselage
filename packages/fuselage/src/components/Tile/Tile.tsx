import { forwardRef } from 'react';

import { styled } from 'tamagui';

import { RcxText } from '../../primitives';

// RcxText — needs font props (p2 scale), renders block content
const TileBase = styled(RcxText, {
  name: 'Tile',

  display: 'block',
  padding: '$x16',

  borderRadius: '$x4',

  // p2 font scale
  fontFamily: '$body',
  fontSize: '$p2',
  fontWeight: '$p2',
  lineHeight: '$p2',
  letterSpacing: '$p2',

  color: '$fontDefault',
  backgroundColor: '$surfaceLight',

  variants: {
    elevation: {
      '0': {
        boxShadow: 'none',
      },
      '1': {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '$shadowElevationBorder',
        boxShadow: '0 0 12px 0 var(--shadowElevation1)',
      },
      '2': {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '$shadowElevationBorder',
        boxShadow: '0 0 2px 0 var(--shadowElevation2x), 0 0 12px 0 var(--shadowElevation2y)',
      },
    },
  } as const,

  defaultVariants: {
    elevation: '1',
  },
});

export type TileProps = {
  elevation?: '0' | '1' | '2';
  padding?: number | string;
  children?: React.ReactNode;
  [key: string]: any;
};

const Tile = forwardRef<HTMLElement, TileProps>(function Tile(
  { elevation = '1', ...props },
  ref,
) {
  return (
    <TileBase
      ref={ref as any}
      elevation={elevation}
      {...(props as any)}
    />
  );
});

export default Tile;
