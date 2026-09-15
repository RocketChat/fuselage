/**
 * `@rocket.chat/fuselage/experimental`
 *
 * Staging area for components and APIs that are still taking shape. Anything
 * exported from here may change or be removed in any release, including patch
 * ones, and graduates to `@rocket.chat/fuselage` once it is stable.
 *
 * No component from outside `src/experimental` may be imported here. These are
 * the Tamagui rewrites of the library, so building one on top of an existing
 * SCSS-styled component would make it a veneer over the system it is meant to
 * replace, and would drag that system's styling into everything downstream of
 * it. Components here compose only other components from `src/experimental`.
 *
 * Helper functions are the exception. They carry no styling and no runtime
 * identity, so `'../helpers/getPalette'` and its like may be imported directly;
 * the cost is a little duplicated code in this bundle and nothing else.
 *
 * Should anything stateful ever need sharing with `@rocket.chat/fuselage` -- a
 * React context, the palette registry, the CSS-in-JS cache -- it has to come
 * through `'..'`, which the bundler leaves external and turns into a `require()`
 * of the main entry point. Importing such a thing by a deeper path would bundle
 * a second, separate copy of it.
 *
 * Styling is Tamagui rather than the SCSS pipeline that backs the main entry
 * point: components declare their styles through `styled()` and resolve design
 * tokens through `tamagui.config`. Mount `FuselageProvider` above them, since
 * Tamagui throws when a styled component has no theme context.
 */

export {
  FuselageProvider,
  type FuselageProviderProps,
} from './FuselageProvider';
export { tamaguiConfig } from './tamagui.config';
