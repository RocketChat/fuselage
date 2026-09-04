import { createClassName } from '@rocket.chat/css-in-js';

const SINGLE_DECLARATION = /^([a-z-]+):\s*(.+?)\s*(?:!important)?;?$/;

/**
 * Readable class name for an atomic (single-prop) style. Prefixes the class
 * with `<property>[-<value>]` so it can be recognised in the DOM, and always
 * keeps a short content hash so distinct declarations can never collide.
 * Falls back to the plain hash for multi-declaration or non-tokenish values
 * (e.g. `var(--…)` colors, `calc(…)`, box-shadows).
 *
 * Kept free of React imports so it can be reused by build-time tooling.
 */
export const buildAtomicClassName = (content: string): string => {
  const hash = createClassName(content).slice('rcx-css-'.length);
  const match = SINGLE_DECLARATION.exec(content);

  if (match) {
    const [, property, rawValue] = match;
    const value = rawValue
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

    if (value && value.length <= 24) {
      return `rcx-${property}-${value}-${hash.slice(0, 5)}`;
    }

    return `rcx-${property}-${hash}`;
  }

  return `rcx-css-${hash}`;
};
