import type { ReactNode } from 'react';
import { styled } from '@tamagui/core';

import { RcxText } from '../../../primitives';

export type ThreadMessageOriginProps = {
  children?: ReactNode;
  system?: boolean;
};

const OriginFrame = styled(RcxText, {
  name: 'ThreadMessageOrigin',
  fontFamily: '$body',
  fontSize: '$c1',
  fontWeight: '$c1',
  lineHeight: '$c1',
  letterSpacing: '$c1',
  overflow: 'hidden',
  // @ts-ignore
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflowWrap: 'normal',
  flexShrink: 1,
  cursor: 'pointer',
  color: '$fontInfo',
  variants: {
    system: {
      true: {
        color: '$fontDefault',
      },
    },
  } as const,
});

const ThreadMessageOrigin = ({
  children,
  system,
}: ThreadMessageOriginProps) => (
  <OriginFrame system={system || undefined}>{children}</OriginFrame>
);

export default ThreadMessageOrigin;
