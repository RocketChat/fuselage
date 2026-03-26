import { css } from '@rocket.chat/css-in-js';
import { forwardRef } from 'react';
import { styled } from 'tamagui';

import { RcxText } from '../../primitives';

const TooltipBase = styled(RcxText, {
  name: 'Tooltip',

  position: 'relative',
  display: 'inline-block',
  maxWidth: 240,
  paddingBlock: 8,
  paddingInline: 12,
  userSelect: 'none',
  pointerEvents: 'none',
  borderRadius: '$x4',
  fontFamily: '$body',
  fontSize: '$p2m',
  fontWeight: '$p2m',
  lineHeight: '$p2m',
  letterSpacing: '$p2m',
  overflowWrap: 'normal',

  variants: {
    variation: {
      dark: {
        color: '$fontWhite',
        backgroundColor: '$surfaceDark',
      },
      light: {
        color: '$fontDefault',
        backgroundColor: '$surfaceNeutral',
      },
    },
  } as const,

  defaultVariants: {
    variation: 'dark',
  },
});

const dirTopArrow = css`
  &::after {
    position: absolute;
    box-sizing: border-box;
    content: ' ';
    border-width: 4px;
    border-color: transparent transparent var(--surfaceDark) var(--surfaceDark);
    border-style: solid;
    border-radius: 0 0 0 2px;
    block-size: 0;
    inline-size: 0;
    inset-block-end: -4px;
    transform: rotate(-45deg);
  }
`;

const dirBottomArrow = css`
  &::after {
    position: absolute;
    box-sizing: border-box;
    content: ' ';
    border-width: 4px;
    border-color: transparent transparent var(--surfaceDark) var(--surfaceDark);
    border-style: solid;
    border-radius: 0 0 0 2px;
    block-size: 0;
    inline-size: 0;
    inset-block-start: -4px;
    transform: rotate(135deg);
  }
`;

const dirLeftArrow = css`
  &::after {
    position: absolute;
    box-sizing: border-box;
    content: ' ';
    border-width: 4px;
    border-color: transparent transparent var(--surfaceDark) var(--surfaceDark);
    border-style: solid;
    border-radius: 0 0 0 2px;
    block-size: 0;
    inline-size: 0;
    inset-block-start: 50%;
    inset-inline-end: -4px;
    margin-block-start: -4px;
    transform: rotate(-135deg);
  }
`;

const dirRightArrow = css`
  &::after {
    position: absolute;
    box-sizing: border-box;
    content: ' ';
    border-width: 4px;
    border-color: transparent transparent var(--surfaceDark) var(--surfaceDark);
    border-style: solid;
    border-radius: 0 0 0 2px;
    block-size: 0;
    inline-size: 0;
    inset-block-start: 50%;
    inset-inline-start: -4px;
    margin-block-start: -4px;
    transform: rotate(45deg);
  }
`;

const posMiddle = css`
  &::after {
    inset-inline-start: 50%;
    margin-inline-start: -4px;
  }
`;

const posStart = css`
  &::after {
    inset-inline-start: 8px;
    margin: 0;
  }
`;

const posEnd = css`
  &::after {
    inset-inline-start: initial;
    inset-inline-end: 8px;
    margin: 0;
  }
`;

const wordBreakStyle = css`
  word-break: break-word;
`;

const directionClassMap: Record<string, string> = {
  top: dirTopArrow,
  bottom: dirBottomArrow,
  left: dirLeftArrow,
  right: dirRightArrow,
};

const positionClassMap: Record<string, string> = {
  middle: posMiddle,
  start: posStart,
  end: posEnd,
};

const parsePlacement = (placement: string | null | undefined) => {
  const [direction, position] = placement
    ? placement.split('-')
    : [false, false];

  if (direction === 'right' || direction === 'left') {
    return [direction, false];
  }

  return [direction, position];
};

export type TooltipProps = {
  variation?: 'dark' | 'light';
  placement?:
    | 'top-start'
    | 'top-middle'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-middle'
    | 'bottom-end'
    | 'top'
    | 'left'
    | 'bottom'
    | 'right'
    | null;
  children?: React.ReactNode;
  [key: string]: any;
};

const Tooltip = forwardRef<HTMLElement, TooltipProps>(function Tooltip(
  { variation = 'dark', placement, children, ...props },
  ref,
) {
  const [direction, position] = parsePlacement(placement);

  const classNames = [wordBreakStyle];

  if (direction && directionClassMap[direction]) {
    classNames.push(directionClassMap[direction]);
  }
  if (position && positionClassMap[position as string]) {
    classNames.push(positionClassMap[position as string]);
  }

  return (
    <TooltipBase
      ref={ref}
      variation={variation}
      className={classNames.join(' ')}
      {...props}
    >
      {children}
    </TooltipBase>
  );
});

export default Tooltip;
