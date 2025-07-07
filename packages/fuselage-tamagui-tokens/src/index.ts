import buttons from '@rocket.chat/fuselage-tokens/dist/button.json';
import fonts from '@rocket.chat/fuselage-tokens/dist/font.json';
import shadows from '@rocket.chat/fuselage-tokens/dist/shadow.json';
import strokes from '@rocket.chat/fuselage-tokens/dist/stroke.json';
import surfaces from '@rocket.chat/fuselage-tokens/dist/surface.json';
import { createTamagui } from '@tamagui/core';

const { surface } = surfaces;
const { button } = buttons;
const { font } = fonts;
const { shadow } = shadows;
const { stroke } = strokes;

// Keep your reMapSurface function as is
const reMapSurface = <K extends string, S extends { [key: string]: string }>(
  prefix: K,
  surface: S,
): {
  [I in keyof S as `${K}-${I extends string ? I : never}`]: S[I];
} => {
  return Object.keys(surface).reduce((acc, key) => {
    acc[`${prefix}-${key}`] = surface[key];
    return acc;
  }, {} as any);
};

// Add these essential Tamagui tokens
const tokens = {
  size: {
    0: 0,
    1: 4,
    2: 8,
    3: 16,
    4: 24,
    5: 32,
    6: 44,
    7: 56,
    8: 68,
    9: 80,
    10: 96,
    true: 1,
  },
  space: {
    0: 0,
    1: 4,
    2: 8,
    3: 16,
    4: 24,
    5: 32,
    6: 44,
    7: 56,
    8: 68,
    9: 80,
    10: 96,
    true: 1,
  },
  radius: {
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
    true: 1,
  },
  zIndex: {
    0: 0,
    1: 100,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
    dropdown: 1000,
    modal: 1300,
    tooltip: 1500,
  },
};

export const config = createTamagui({
  tokens,
  themes: {
    light: {
      ...reMapSurface('surface', surface.light),
      ...reMapSurface('shadow', shadow.light),
      ...reMapSurface('stroke', stroke.light),
      ...reMapSurface('font', font.light),
      ...reMapSurface('button', button.light),
      backgroundColor: surface.light.neutral,
      background: surface.light.neutral,
      borderColor: stroke.light.medium,
      // Add essential theme colors
      color: font.light.default,
      color1: font.light.info,
      color2: font.light.hint,
      color3: font.light.disabled,
      background1: surface.light.tint,
      background2: surface.light.shade,
    },
    dark: {
      ...reMapSurface('surface', surface.dark),
      ...reMapSurface('shadow', shadow.dark),
      ...reMapSurface('stroke', stroke.dark),
      ...reMapSurface('font', font.dark),
      ...reMapSurface('button', button.dark),
      backgroundColor: surface.dark.neutral,
      background: surface.dark.neutral,
      borderColor: stroke.dark.medium,
      // Add essential theme colors
      color: font.dark.default,
      color1: font.dark.info,
      color2: font.dark.hint,
      color3: font.dark.disabled,
      background1: surface.dark.tint,
      background2: surface.dark.shade,
    },
  },
  // Add essential Tamagui configurations
  defaultFont: 'body',
  animations: {
    fast: {
      type: 'spring',
      damping: 20,
      mass: 1.2,
      stiffness: 250,
    },
    medium: {
      type: 'spring',
      damping: 10,
      mass: 0.9,
      stiffness: 100,
    },
    slow: {
      type: 'spring',
      damping: 20,
      stiffness: 60,
    },
  },
  media: {
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  },
});

export default config;

export type AppConfig = typeof config;

declare module '@tamagui/core' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface TamaguiCustomConfig extends AppConfig {}
}
