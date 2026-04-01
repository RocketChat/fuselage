import { css, keyframes } from '@rocket.chat/css-in-js';
import { forwardRef } from 'react';
import { styled } from '@tamagui/core';

import { RcxView } from '../../primitives';

const bounceAnimation = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`;

const ThrobberFrame = styled(RcxView, {
  name: 'Throbber',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  marginBlock: -1,
});

const ThrobberCircle = styled(RcxView, {
  name: 'ThrobberCircle',

  marginInline: 1,
  borderRadius: '$full',
  backgroundColor: '$buttonPrimaryBg',

  variants: {
    disabled: {
      true: {
        backgroundColor: '$buttonSecondaryBg',
      },
    },
  } as const,
});

type CircleProps = {
  circleCount: number;
  iteration: number;
  inheritColor?: boolean;
  disabled?: boolean;
  size?: string;
};

function Circle({
  disabled,
  circleCount,
  iteration,
  inheritColor,
  size = 'x16',
  ...props
}: CircleProps) {
  const animationClass = css`
    animation: ${bounceAnimation} ${circleCount * 0.466}s infinite ease-in-out
      both;
    animation-delay: ${iteration * 0.16}s;
  `;

  const inheritColorClass = inheritColor
    ? css`
        background-color: currentColor;
      `
    : undefined;

  const sizeNum = parseInt(size.replace('x', ''), 10) || 16;

  return (
    <ThrobberCircle
      disabled={disabled}
      className={[animationClass, inheritColorClass].filter(Boolean).join(' ')}
      width={sizeNum}
      height={sizeNum}
      {...props}
    />
  );
}

export type ThrobberProps = {
  circleCount?: number;
  disabled?: boolean;
  inheritColor?: boolean;
  size?: string;
  [key: string]: any;
};

/**
 * Indicates content that has not loaded yet.
 */
const Throbber = forwardRef<HTMLElement, ThrobberProps>(function Throbber(
  { disabled, size = 'x16', circleCount = 3, inheritColor, ...props },
  ref,
) {
  return (
    <ThrobberFrame ref={ref} {...props}>
      {Array.from({ length: circleCount || 3 }, (_, iteration) => (
        <Circle
          key={iteration}
          circleCount={circleCount}
          iteration={iteration}
          disabled={!!disabled}
          size={size}
          inheritColor={!!inheritColor}
        />
      ))}
    </ThrobberFrame>
  );
});

export default Throbber;
