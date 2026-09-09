/**
 * `@rocket.chat/fuselage/experimental`
 *
 * Staging area for components and APIs that are still taking shape. Anything
 * exported from here may change or be removed in any release, including patch
 * ones, and graduates to `@rocket.chat/fuselage` once it is stable.
 *
 * Modules under `src/experimental` must import the package's public API from
 * `'..'` -- never from deeper paths such as `'../components/Box'`. The bundler
 * turns `'..'` into a runtime `require()` of the main entry point, which keeps
 * React contexts, the palette registry and the CSS-in-JS cache as singletons
 * shared with `@rocket.chat/fuselage`.
 *
 * Styles belong in `src/index.scss` so they ship in `dist/fuselage.css`, which
 * consumers already import.
 */

export * from './ExperimentalSurface';
