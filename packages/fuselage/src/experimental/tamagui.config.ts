import border from '@rocket.chat/fuselage-tokens/dist/border.json';
import breakpoints from '@rocket.chat/fuselage-tokens/dist/breakpoints.json';
import colors from '@rocket.chat/fuselage-tokens/dist/colors.json';
import { createTamagui } from '@tamagui/core';

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
   * The three themes fuselage targets. They are empty while components still
   * read their colors from the `--rcx-*` custom properties that
   * `PaletteStyleTag` emits, which keeps the experimental components themed by
   * exactly the same mechanism as the rest of the library.
   */
  themes: {
    'light': {},
    'dark': {},
    'high-contrast': {},
  },
  media,
});

type FuselageTamaguiConfig = typeof tamaguiConfig;

declare module '@tamagui/core' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface TamaguiCustomConfig extends FuselageTamaguiConfig {}
}
