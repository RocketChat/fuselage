import { DocsContainer as BaseContainer } from '@storybook/addon-docs/blocks';
import type { ComponentProps } from 'react';
import { useDarkMode } from 'storybook-dark-mode';

import { theme } from './theme';

export const DocsContainer = ({
  children,
  context,
}: ComponentProps<typeof BaseContainer>) => {
  const dark = useDarkMode();

  return (
    <BaseContainer
      context={{
        ...context,
        storyById: (id) => {
          const storyContext = context.storyById(id);
          return {
            ...storyContext,
            parameters: {
              ...storyContext?.parameters,
              docs: {
                ...storyContext?.parameters?.docs,
                theme: dark ? theme.dark : theme.normal,
              },
            },
          };
        },
      }}
    >
      {children}
    </BaseContainer>
  );
};
