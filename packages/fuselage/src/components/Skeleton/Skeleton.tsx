import type { AllHTMLAttributes } from 'react';

import { css, keyframes } from '@rocket.chat/css-in-js';
import { styled } from '@tamagui/core';

import { RcxText } from '../../primitives';

const skeletonAnimation = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 100vw 0; }
`;

const shimmerClass = css`
  animation: ${skeletonAnimation} 1s linear 0s infinite running;
  background: repeat 0% 0% / 100vw 100%
    linear-gradient(
      to right,
      var(--strokeExtraDark),
      color-mix(in srgb, var(--strokeExtraDark), transparent 50%) 50%,
      var(--strokeExtraDark)
    );
`;

const SkeletonBase = styled(RcxText, {
  name: 'Skeleton',

  display: 'block',
  height: '1.2em' as any,
  opacity: 0.1,
  borderRadius: '$x4',

  variants: {
    variant: {
      rect: {},
      text: {
        height: 'auto' as any,
        marginBlock: 0,
        // transform not supported in styled — applied via style prop
      },
      circle: {
        borderRadius: '$full',
      },
    },
  } as const,

  defaultVariants: {
    variant: 'text',
  },
});

export type SkeletonProps = {
  variant?: 'text' | 'rect' | 'circle';
  [key: string]: any;
};

const Skeleton = ({ variant = 'text', ...props }: SkeletonProps) => (
  <SkeletonBase
    variant={variant}
    className={shimmerClass}
    style={
      variant === 'text'
        ? { transform: 'scale(1, 0.6)', transformOrigin: '0 60%' }
        : undefined
    }
    {...(props as any)}
  >
    {variant === 'text' ? '\u00a0' : undefined}
  </SkeletonBase>
);

export default Skeleton;
