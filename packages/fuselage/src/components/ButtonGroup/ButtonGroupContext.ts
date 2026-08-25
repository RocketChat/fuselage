import { createContext } from 'react';

type ButtonGroupContextValue = {
  joined: boolean;
};

export const ButtonGroupContext = createContext<ButtonGroupContextValue>({
  joined: false,
});

export const warnGhostOutsideJoinedGroup = (
  component: string,
  ghost: boolean | undefined,
  joined: boolean,
) => {
  if (
    process.env['NODE_ENV'] !== 'production' &&
    process.env['NODE_ENV'] !== 'test' &&
    ghost &&
    !joined
  ) {
    console.warn(
      `${component}: \`ghost\` only takes effect inside a joined \`ButtonGroup\` and was ignored.`,
    );
  }
};
