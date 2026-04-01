import { useBreakpoints } from '@rocket.chat/fuselage-hooks';
import type { AllHTMLAttributes } from 'react';
import { styled, createStyledContext } from '@tamagui/core';

import { RcxInteractive, RcxView } from '../../primitives';

export const CardContext = createStyledContext({
  horizontal: false as boolean,
});

const CardFrame = styled(RcxView, {
  name: 'Card',
  context: CardContext,
  display: 'flex',
  color: '$fontDefault',
  borderRadius: '$x8',
  backgroundColor: '$surfaceLight',

  variants: {
    horizontal: {
      true: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: '$x12',
        gap: '$x16',
      },
      false: {
        flexDirection: 'column',
        padding: '$x20',
        gap: '$x24',
      },
    },

    hero: {
      true: {
        padding: '$x28',
      },
    },

    wrap: {
      true: {
        flexWrap: 'wrap',
      },
    },
  } as const,

  defaultVariants: {
    horizontal: false,
  },
});

const CardClickableFrame = styled(RcxInteractive, {
  name: 'CardClickable',
  context: CardContext,
  display: 'flex',
  color: '$fontDefault',
  borderRadius: '$x8',
  backgroundColor: '$surfaceLight',

  hoverStyle: {
    backgroundColor: '$surfaceHover',
  },

  focusStyle: {
    backgroundColor: '$surfaceHover',
    outlineWidth: 0,
  },

  variants: {
    horizontal: {
      true: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: '$x12',
        gap: '$x16',
      },
      false: {
        flexDirection: 'column',
        padding: '$x20',
        gap: '$x24',
      },
    },

    hero: {
      true: {
        padding: '$x28',
      },
    },

    wrap: {
      true: {
        flexWrap: 'wrap',
      },
    },
  } as const,

  defaultVariants: {
    horizontal: false,
  },
});

export type CardProps = {
  horizontal?: boolean;
  hero?: boolean;
  clickable?: boolean;
} & Omit<AllHTMLAttributes<HTMLElement>, 'is'>;

const Card = ({ horizontal, hero, clickable, ...props }: CardProps) => {
  const breakpoints = useBreakpoints();
  const isMobile = !breakpoints.includes('sm');

  const Frame = clickable ? CardClickableFrame : CardFrame;

  return (
    <Frame
      horizontal={!!horizontal}
      hero={hero}
      wrap={horizontal && isMobile ? true : undefined}
      {...props}
    />
  );
};

export default Card;
