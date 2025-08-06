import type { ReactNode } from 'react';
import { useCallback, useEffect, useState } from 'react';
import { styled, Stack, Theme } from 'tamagui';

export type VisibilityType = 'hidden' | 'visible' | 'hiding' | 'unhiding';

type AnimatedVisibilityProps = {
  children: ReactNode;
  visibility?: VisibilityType;
};

const AnimatedStack = styled(Stack, {
  animation: '230ms',
  opacity: 1,
  transform: [{ translateY: 0 }],

  variants: {
    visibility: {
      hiding: {
        animation: 'quick',
        opacity: 0,
        transform: [{ translateY: 16 }],
      },
      unhiding: {
        animation: 'quick',
        opacity: 1,
        transform: [{ translateY: 0 }],
      },
    },
  } as const,
});

const Visibility = {
  HIDDEN: 'hidden' as VisibilityType,
  VISIBLE: 'visible' as VisibilityType,
  HIDING: 'hiding' as VisibilityType,
  UNHIDING: 'unhiding' as VisibilityType,
};

export const AnimatedVisibility = ({
  children,
  visibility: propVisibility = 'visible',
}: AnimatedVisibilityProps) => {
  const [visibility, setVisibility] =
    useState<VisibilityType>(propVisibility);

  useEffect(() => {
    setVisibility((visibility) => {
      if (
        propVisibility === Visibility.VISIBLE &&
        visibility !== propVisibility
      ) {
        return Visibility.UNHIDING;
      }

      if (
        propVisibility === Visibility.HIDDEN &&
        visibility !== propVisibility
      ) {
        return Visibility.HIDING;
      }

      return visibility;
    });
  }, [propVisibility]);

  const handleAnimationEnd = useCallback(() => {
    setVisibility((visibility) => {
      if (visibility === Visibility.HIDING) {
        return Visibility.HIDDEN;
      }

      if (visibility === Visibility.UNHIDING) {
        return Visibility.VISIBLE;
      }

      return visibility;
    });
  }, []);

  if (visibility === 'hidden') {
    return null;
  }

  return (
    <Theme name='light'>
      <AnimatedStack
        visibility={visibility as 'hiding' | 'unhiding' | undefined}
        onAnimationEnd={handleAnimationEnd}
      >
        {children}
      </AnimatedStack>
    </Theme>
  );
};

(AnimatedVisibility as any).HIDDEN = Visibility.HIDDEN;
(AnimatedVisibility as any).VISIBLE = Visibility.VISIBLE;
(AnimatedVisibility as any).HIDING = Visibility.HIDING;
(AnimatedVisibility as any).UNHIDING = Visibility.UNHIDING;