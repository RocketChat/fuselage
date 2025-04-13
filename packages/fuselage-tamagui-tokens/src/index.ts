import { createTokens } from '@tamagui/core';

// Convert existing Fuselage tokens
export const tokens = createTokens({
  color: {
    primary: '#1D74F5',
    danger: '#f5455c',
    success: '#2de0a5',
    warning: '#ffd21f',

    // Surface colors
    surfaceLight: '#FFFFFF',
    surfaceDark: '#1F2329',

    // Text colors
    textPrimary: '#2F343D',
    textSecondary: '#6C727A',
  },
  space: {
    none: 0,
    x2: 2,
    x4: 4,
    x8: 8,
    x12: 12,
    x16: 16,
    x20: 20,
    x24: 24,
    x32: 32,
    x40: 40,
  },
  size: {
    none: 0,
    x2: 2,
    x4: 4,
    x8: 8,
    x12: 12,
    x16: 16,
    x20: 20,
    x24: 24,
    x32: 32,
    x40: 40,
  },
  radius: {
    none: 0,
    small: 2,
    medium: 4,
    large: 8,
    full: 9999,
  },
});
