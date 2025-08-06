import { createTokens } from 'tamagui';
import type { Token } from 'tamagui';

// Define your theme tokens
export const tokens = createTokens({
  color: {
    white: '#FFFFFF',
    black: '#000000',
    // Add your color tokens here
  },
  space: {
    0: 0,
    1: 4,
    2: 8,
    3: 16,
    4: 24,
    5: 32,
    6: 40,
    // Add your spacing tokens here
  },
  size: {
    0: 0,
    1: 4,
    2: 8,
    3: 16,
    4: 24,
    5: 32,
    6: 40,
    // Add your size tokens here
  },
  radius: {
    0: 0,
    1: 4,
    2: 8,
    3: 16,
    // Add your border radius tokens here
  },
  zIndex: {
    0: 0,
    1: 100,
    2: 200,
    3: 300,
    // Add your z-index tokens here
  },
});

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
