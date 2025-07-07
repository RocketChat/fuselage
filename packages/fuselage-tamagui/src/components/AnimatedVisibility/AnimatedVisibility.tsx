import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
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

export const AnimatedVisibility = ({
  children,
  visibility = 'visible',
}: AnimatedVisibilityProps) => {
  const [currentVisibility, setVisibility] =
    useState<VisibilityType>(visibility);

  useEffect(() => {
    setVisibility(visibility);
  }, [visibility]);

  if (currentVisibility === 'hidden') {
    return null;
  }

  return (
    <Theme name='light'>
      <AnimatedStack
        visibility={currentVisibility as 'hiding' | 'unhiding' | undefined}
      >
        {children}
      </AnimatedStack>
    </Theme>
  );
};
