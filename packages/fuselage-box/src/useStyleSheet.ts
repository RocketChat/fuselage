import { useIsomorphicLayoutEffect } from '@rocket.chat/fuselage-hooks';

type LazySingletonStyleSheet = {
  use(): void;
  unuse(): void;
};

export const useStyleSheet = (styleSheet: LazySingletonStyleSheet): void => {
  useIsomorphicLayoutEffect(() => {
    styleSheet.use();

    return () => {
      styleSheet.unuse();
    };
  }, [styleSheet]);
};
