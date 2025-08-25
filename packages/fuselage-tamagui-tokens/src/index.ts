import { createTamagui } from '@tamagui/core';
import { badgeTokens } from './tokens/badge';
import { buttonTokens } from './tokens/button';
import { statusTokens } from './tokens/status';
import { statusBulletTokens } from './tokens/status-bullet';
import { surface } from './tokens/surface';
import { shadow } from './tokens/shadow';
import { stroke } from './tokens/stroke';
import { font } from './tokens/font';
import { colorTokens } from './tokens/colors';
import { typographyTokens } from './tokens/typography';

const { badge } = badgeTokens;

// Helper function to remap surface tokens
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


// Utility functions and configuration setup

export const config = createTamagui({
  defaultFont: 'body',
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,

  tokens: {
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
    color: colorTokens,
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
    font: {
      body: typographyTokens.fontFamilies.sans.join(','),
      mono: typographyTokens.fontFamilies.mono.join(','),
    },
  },

  themes: {
    light: {
      background: colorTokens.white,
      color: colorTokens.n900,

      // Surface tokens
      ...reMapSurface('surface', surface.light),
      backgroundColor: surface.light.neutral,

      // Shadow tokens
      ...reMapSurface('shadow', shadow.light),

      // Stroke tokens
      ...reMapSurface('stroke', stroke.light),
      borderColor: stroke.light.medium,

      // Font tokens
      ...reMapSurface('font', font.light),

      // Component tokens
      ...buttonTokens.button.light,
      ...statusTokens.status.light,
      ...statusBulletTokens.statusBullet.light,

      // Badge tokens
      'badge-primary-background': badge.light.primary.background,
      'badge-primary-color': badge.light.primary.color,
      'badge-secondary-background': badge.light.secondary.background,
      'badge-secondary-color': badge.light.secondary.color,
      'badge-danger-background': badge.light.danger.background,
      'badge-danger-color': badge.light.danger.color,
      'badge-warning-background': badge.light.warning.background,
      'badge-warning-color': badge.light.warning.color,
      'badge-ghost-background': badge.light.ghost.background,
      'badge-ghost-color': badge.light.ghost.color,
      'badge-disabled-background': badge.light.disabled.background,
      'badge-disabled-color': badge.light.disabled.color,
    },
    dark: {
      background: colorTokens.n900,
      color: colorTokens.white,

      // Surface tokens
      ...reMapSurface('surface', surface.dark),
      backgroundColor: surface.dark.neutral,

      // Shadow tokens
      ...reMapSurface('shadow', shadow.dark),

      // Stroke tokens
      ...reMapSurface('stroke', stroke.dark),
      borderColor: stroke.dark.medium,

      // Font tokens
      ...reMapSurface('font', font.dark),

      // Component tokens
      ...buttonTokens.button.dark,
      ...statusTokens.status.dark,
      ...statusBulletTokens.statusBullet.dark,

      // Badge tokens
      'badge-primary-background': badge.dark.primary.background,
      'badge-primary-color': badge.dark.primary.color,
      'badge-secondary-background': badge.dark.secondary.background,
      'badge-secondary-color': badge.dark.secondary.color,
      'badge-danger-background': badge.dark.danger.background,
      'badge-danger-color': badge.dark.danger.color,
      'badge-warning-background': badge.dark.warning.background,
      'badge-warning-color': badge.dark.warning.color,
      'badge-ghost-background': badge.dark.ghost.background,
      'badge-ghost-color': badge.dark.ghost.color,
      'badge-disabled-background': badge.dark.disabled.background,
      'badge-disabled-color': badge.dark.disabled.color,
    },
  },
  // Add essential Tamagui configurations
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
});

export default config;

export type AppConfig = typeof config;

declare module '@tamagui/core' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface TamaguiCustomConfig extends AppConfig {}
}
