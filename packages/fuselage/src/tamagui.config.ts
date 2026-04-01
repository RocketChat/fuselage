import colors from '@rocket.chat/fuselage-tokens/colors.json';
import { createFont, createTamagui, createTokens } from '@tamagui/core';

import { darkTheme, highContrastTheme, lightTheme } from './themes';
import { createButtonSubThemes } from './themes/buttonSubThemes';

// ---------------------------------------------------------------------------
// Tokens
// ---------------------------------------------------------------------------

const space = {
  x0: 0,
  x1: 1,
  x2: 2,
  x4: 4,
  x8: 8,
  x10: 10,
  x12: 12,
  x14: 14,
  x16: 16,
  x18: 18,
  x20: 20,
  x24: 24,
  x28: 28,
  x32: 32,
  x36: 36,
  x40: 40,
  x44: 44,
  x48: 48,
  x52: 52,
  x56: 56,
  x60: 60,
  x64: 64,
  x68: 68,
  x72: 72,
  x76: 76,
  x80: 80,
  x84: 84,
  x88: 88,
  x92: 92,
  x96: 96,
  x100: 100,
  x104: 104,
  x108: 108,
  x112: 112,
  x116: 116,
  x120: 120,
  x124: 124,
  x128: 128,
  x132: 132,
  x136: 136,
  x140: 140,
  x144: 144,
  x148: 148,
  x152: 152,
  x156: 156,
  x160: 160,
  x164: 164,
  x168: 168,
  x172: 172,
  x176: 176,
  x180: 180,
  x184: 184,
  x188: 188,
  x192: 192,
  x196: 196,
  x200: 200,
  x204: 204,
  x208: 208,
  x212: 212,
  x216: 216,
  x220: 220,
  x224: 224,
  x228: 228,
  x232: 232,
  x236: 236,
  x240: 240,
  x244: 244,
  x248: 248,
  x252: 252,
  x256: 256,
  x260: 260,
  x264: 264,
  x268: 268,
  x272: 272,
  x276: 276,
  x280: 280,
  x284: 284,
  x288: 288,
  x292: 292,
  x296: 296,
  x300: 300,
  x304: 304,
  x308: 308,
  x312: 312,
  x316: 316,
  x320: 320,
  x324: 324,
  x328: 328,
  x332: 332,
  x336: 336,
  x340: 340,
  x344: 344,
  x348: 348,
  x352: 352,
  x356: 356,
  x360: 360,
  x364: 364,
  x368: 368,
  true: 16,
} as const;

const size = {
  ...space,
  none: 0,
  full: '100%',
  sw: '100vw',
  sh: '100vh',
} as const;

const radius = {
  none: 0,
  x2: 2,
  x4: 4,
  x8: 8,
  x16: 16,
  full: 9999,
  true: 4,
} as const;

const zIndex = {
  x0: 0,
  x1: 1,
  x2: 2,
  x10: 10,
  x100: 100,
} as const;

export const tokens = createTokens({
  color: {
    white: colors.white,
    n100: colors.n100,
    n200: colors.n200,
    n250: colors.n250,
    n300: colors.n300,
    n400: colors.n400,
    n450: colors.n450,
    n500: colors.n500,
    n600: colors.n600,
    n700: colors.n700,
    n800: colors.n800,
    n900: colors.n900,
    r100: colors.r100,
    r200: colors.r200,
    r300: colors.r300,
    r400: colors.r400,
    r500: colors.r500,
    r600: colors.r600,
    r700: colors.r700,
    r800: colors.r800,
    r900: colors.r900,
    r1000: colors.r1000,
    o100: colors.o100,
    o200: colors.o200,
    o300: colors.o300,
    o400: colors.o400,
    o500: colors.o500,
    o600: colors.o600,
    o700: colors.o700,
    o800: colors.o800,
    o900: colors.o900,
    o1000: colors.o1000,
    p100: colors.p100,
    p200: colors.p200,
    p300: colors.p300,
    p400: colors.p400,
    p500: colors.p500,
    p600: colors.p600,
    p700: colors.p700,
    p800: colors.p800,
    p900: colors.p900,
    y100: colors.y100,
    y200: colors.y200,
    y300: colors.y300,
    y400: colors.y400,
    y500: colors.y500,
    y600: colors.y600,
    y700: colors.y700,
    y800: colors.y800,
    y900: colors.y900,
    y1000: colors.y1000,
    g100: colors.g100,
    g200: colors.g200,
    g300: colors.g300,
    g400: colors.g400,
    g500: colors.g500,
    g600: colors.g600,
    g700: colors.g700,
    g800: colors.g800,
    g900: colors.g900,
    g1000: colors.g1000,
    b100: colors.b100,
    b200: colors.b200,
    b300: colors.b300,
    b400: colors.b400,
    b500: colors.b500,
    b600: colors.b600,
    b700: colors.b700,
    b800: colors.b800,
    b900: colors.b900,
  },
  space,
  size,
  radius,
  zIndex,
});

// ---------------------------------------------------------------------------
// Fonts
// ---------------------------------------------------------------------------

const sansFontFamily =
  'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Meiryo UI", Arial, sans-serif';

const monoFontFamily =
  'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

const fontSizes = {
  hero: 48,
  h1: 32,
  h2: 24,
  h3: 20,
  h4: 16,
  h5: 14,
  p1: 16,
  p1m: 16,
  p1b: 16,
  p2: 14,
  p2m: 14,
  p2b: 14,
  c1: 12,
  c2: 12,
  micro: 10,
} as const;

const fontLineHeights = {
  hero: 64,
  h1: 40,
  h2: 32,
  h3: 28,
  h4: 24,
  h5: 20,
  p1: 24,
  p1m: 24,
  p1b: 24,
  p2: 20,
  p2m: 20,
  p2b: 20,
  c1: 16,
  c2: 16,
  micro: 12,
} as const;

const fontWeights = {
  hero: '800',
  h1: '700',
  h2: '700',
  h3: '700',
  h4: '700',
  h5: '700',
  p1: '400',
  p1m: '500',
  p1b: '700',
  p2: '400',
  p2m: '500',
  p2b: '700',
  c1: '400',
  c2: '700',
  micro: '700',
} as const;

const fontLetterSpacings = {
  hero: 0,
  h1: 0,
  h2: 0,
  h3: 0,
  h4: 0,
  h5: 0,
  p1: 0,
  p1m: 0,
  p1b: 0,
  p2: 0,
  p2m: 0,
  p2b: 0,
  c1: 0,
  c2: 0,
  micro: 0,
} as const;

const sansFont = createFont({
  family: sansFontFamily,
  size: fontSizes,
  lineHeight: fontLineHeights,
  weight: fontWeights,
  letterSpacing: fontLetterSpacings,
  face: {
    400: { normal: 'Inter' },
    500: { normal: 'Inter' },
    700: { normal: 'Inter' },
    800: { normal: 'Inter' },
  },
});

const monoFont = createFont({
  family: monoFontFamily,
  size: fontSizes,
  lineHeight: fontLineHeights,
  weight: fontWeights,
  letterSpacing: fontLetterSpacings,
  face: {
    400: { normal: 'Menlo' },
    500: { normal: 'Menlo' },
    700: { normal: 'Menlo' },
    800: { normal: 'Menlo' },
  },
});

// ---------------------------------------------------------------------------
// Media queries
// ---------------------------------------------------------------------------

const media = {
  xs: { maxWidth: 439 },
  gtXs: { minWidth: 440 },
  sm: { maxWidth: 767 },
  gtSm: { minWidth: 768 },
  md: { maxWidth: 1023 },
  gtMd: { minWidth: 1024 },
  lg: { maxWidth: 1439 },
  gtLg: { minWidth: 1440 },
  xl: { maxWidth: 1919 },
  gtXl: { minWidth: 1920 },
  xxl: { maxWidth: 99999 },
  gtXxl: { minWidth: 100000 },
} as const;

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

export const tamaguiConfig = createTamagui({
  tokens,
  themes: {
    'light': lightTheme,
    'dark': darkTheme,
    'high-contrast': highContrastTheme,
    // Button sub-themes: allows <Theme name="Button_primary"> to control colors
    ...Object.fromEntries(
      Object.entries(createButtonSubThemes(lightTheme)).map(([k, v]) => [
        `light_${k}`,
        v,
      ]),
    ),
    ...Object.fromEntries(
      Object.entries(createButtonSubThemes(darkTheme)).map(([k, v]) => [
        `dark_${k}`,
        v,
      ]),
    ),
    ...Object.fromEntries(
      Object.entries(createButtonSubThemes(highContrastTheme)).map(([k, v]) => [
        `high-contrast_${k}`,
        v,
      ]),
    ),
  },
  fonts: {
    body: sansFont,
    heading: sansFont,
    mono: monoFont,
  },
  media,
  defaultFont: 'body',
  shouldAddPrefersColorThemes: false,
  themeClassNameOnRoot: false,
});

// ---------------------------------------------------------------------------
// Module augmentation
// ---------------------------------------------------------------------------

export type AppConfig = typeof tamaguiConfig;

declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends AppConfig {}
}
