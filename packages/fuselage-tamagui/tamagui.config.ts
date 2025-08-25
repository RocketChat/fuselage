import { createTamagui, createTokens } from '@tamagui/core';

export const tokens = createTokens({
  // Colors from Fuselage - using the migrated tokens
  color: {
    white: '#FFFFFF',
    // Neutral colors
    n100: '#F7F8FA',
    n200: '#F2F3F5',
    n250: '#EBECEF',
    n300: '#EEEFF1',
    n400: '#E4E7EA',
    n450: '#D7DBE0',
    n500: '#CBCED1',
    n600: '#9EA2A8',
    n700: '#6C737A',
    n800: '#2F343D',
    n900: '#1F2329',
    // Red colors
    r100: '#FFE9EC',
    r200: '#FFC1C9',
    r300: '#F98F9D',
    r400: '#F5455C',
    r500: '#EC0D2A',
    r600: '#D40C26',
    r700: '#BB0B21',
    r800: '#9B1325',
    r900: '#8B0719',
    r1000: '#6B0513',
    // Blue colors
    b100: '#E8F2FF',
    b200: '#D1EBFE',
    b300: '#76B7FC',
    b400: '#549DF9',
    b500: '#156FF5',
    b600: '#095AD2',
    b700: '#10529E',
    b800: '#01336B',
    b900: '#012247',
    // Green colors
    g100: '#E5FBF4',
    g200: '#C0F6E4',
    g300: '#96F0D2',
    g400: '#6CE9C0',
    g500: '#2DE0A5',
    g600: '#1ECB92',
    g700: '#19AC7C',
    g800: '#148660',
    g900: '#106D4F',
    g1000: '#0D5940',
    // Yellow colors
    y100: '#FFF8E0',
    y200: '#FFECAD',
    y300: '#FFE383',
    y400: '#FFD95A',
    y500: '#FFD031',
    y600: '#F3BE08',
    y700: '#DFAC00',
    y800: '#AC892F',
    y900: '#8E6300',
    y1000: '#573D00',
  },

  // Spacing system
  space: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
  },

  // Size system
  size: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
  },

  // Border radius system
  radius: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
  },

  // Z-index system
  zIndex: {
    0: 0,
    1: 100,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
  },

  // Font sizes
  fontSize: {
    c1: 12,
    c2: 14,
    p1: 16,
    p2: 18,
  },

  // Line heights
  lineHeight: {
    c1: 16,
    c2: 20,
    p1: 24,
    p2: 28,
  },
});

export const tamaguiConfig = createTamagui({
  fonts: {
    body: {
      family: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      size: {
        c1: 12,
        c2: 14,
        p1: 16,
        p2: 18,
        $true: 16,
      },
      lineHeight: {
        c1: 16,
        c2: 20,
        p1: 24,
        p2: 28,
        $true: 24,
      },
      weight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        $true: '400',
      },
    },
  },
  tokens,
  themes: {
    light: {
      background: tokens.color.white,
      color: tokens.color.n900,
    },
    dark: {
      background: tokens.color.n900,
      color: tokens.color.white,
    },
  },
  media: {
    xs: { maxWidth: 599 },
    sm: { minWidth: 600, maxWidth: 767 },
    md: { minWidth: 768, maxWidth: 1023 },
    lg: { minWidth: 1024, maxWidth: 1279 },
    xl: { minWidth: 1280, maxWidth: 1599 },
    xxl: { minWidth: 1600, maxWidth: 1919 },
    xxxl: { minWidth: 1920 },
    gtXs: { minWidth: 600 },
    gtSm: { minWidth: 768 },
    gtMd: { minWidth: 1024 },
    gtLg: { minWidth: 1280 },
    gtXl: { minWidth: 1600 },
    gtXxl: { minWidth: 1920 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  },

  // Shorthands
  shorthands: {
    px: 'paddingHorizontal',
    f: 'flex',
    m: 'margin',
    w: 'width',
  } as const,
});

export type AppConfig = typeof tamaguiConfig;

declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default tamaguiConfig;
