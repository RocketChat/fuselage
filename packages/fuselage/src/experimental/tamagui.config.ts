import border from '@rocket.chat/fuselage-tokens/dist/border.json';
import breakpoints from '@rocket.chat/fuselage-tokens/dist/breakpoints.json';
import colors from '@rocket.chat/fuselage-tokens/dist/colors.json';
import { createTamagui } from '@tamagui/core';

import { getThemePalette } from '../helpers/getPalette';

/**
 * Minimal Tamagui configuration for `@rocket.chat/fuselage/experimental`.
 *
 * Tokens are read from `@rocket.chat/fuselage-tokens` rather than restated
 * here, so the experimental components resolve the same values as the rest of
 * the library and pick up token changes without a second edit. The main entry
 * point consumes these same JSON files.
 *
 * @see https://tamagui.dev/docs/core/configuration
 */

/**
 * `xs` has no `minViewportWidth` -- it is the implicit floor -- so it
 * contributes no media query.
 */
const media = Object.fromEntries(
  Object.entries(breakpoints)
    .filter(([, { minViewportWidth }]) => typeof minViewportWidth === 'number')
    .map(([name, { minViewportWidth }]) => [
      name,
      { minWidth: minViewportWidth },
    ]),
) as {
  [K in keyof typeof breakpoints]: { minWidth: number };
};

export const tamaguiConfig = createTamagui({
  tokens: {
    radius: border.radius,
    color: colors,
    /**
     * fuselage has no space or size token file: the `x{n}` scale the main
     * entry point exposes is computed as `n / 16` rem rather than stored.
     * These follow that same rule, in pixels, and should move into
     * `@rocket.chat/fuselage-tokens` alongside the others.
     */
    space: { none: 0, x4: 4, x8: 8, x12: 12, x16: 16, x24: 24, x32: 32 },
    size: { none: 0, x4: 4, x8: 8, x12: 12, x16: 16, x24: 24, x32: 32 },
  },
  /**
   * The same three themes `PaletteStyleTag` defines, built from the same
   * `getThemePalette` it uses, so both halves of the library resolve identical
   * values for every one of the ~105 semantic color names.
   *
   * These are resolved colors rather than `var(--rcx-color-*)` references, so
   * Tamagui themes its components on its own. That means `FuselageProvider`
   * and `PaletteStyleTag` have to be given the same theme -- otherwise the
   * SCSS-styled and Tamagui-styled halves of the UI disagree.
   */
  themes: {
    'light': getThemePalette('light'),
    'dark': getThemePalette('dark'),
    'high-contrast': getThemePalette('high-contrast'),
  },
  media,
});

type FuselageTamaguiConfig = typeof tamaguiConfig;

declare module '@tamagui/core' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface TamaguiCustomConfig extends FuselageTamaguiConfig {}
}
