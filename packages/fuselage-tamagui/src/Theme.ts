import { tokens } from '@rocket.chat/fuselage-tamagui-tokens';

// Re-export tokens from the shared package
export { tokens };
export type { Theme } from '@rocket.chat/fuselage-tamagui-tokens';

export type ThemeTokens = typeof tokens;
export type TokenKeys = keyof typeof tokens;
export type TokenValues<T extends TokenKeys> = keyof (typeof tokens)[T];

// Theme interface
export interface Theme {
  tokens: ThemeTokens;
  getToken: <T extends TokenKeys>(category: T, value: TokenValues<T>) => Token<string | number>;
}

// Create the theme
export const createTheme = (): Theme => {
  return {
    tokens,
    getToken: <T extends TokenKeys>(category: T, value: TokenValues<T>) => {
      return tokens[category][value as string];
    },
  };
};

// Export the default theme
export const theme = createTheme();
