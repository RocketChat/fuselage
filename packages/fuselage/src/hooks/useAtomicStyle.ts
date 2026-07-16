import type { cssFn } from '@rocket.chat/css-in-js';
import {
  createClassName,
  escapeName,
  transpile,
  attachRules,
} from '@rocket.chat/css-in-js';
import { useDebugValue, useInsertionEffect, useMemo } from 'react';

import { useOwnerDocument } from '../contexts';

const SINGLE_DECLARATION = /^([a-z-]+):\s*(.+?)\s*(?:!important)?;?$/;

/**
 * Readable class name for an atomic (single-prop) style. Prefixes the class
 * with `<property>[-<value>]` so it can be recognised in the DOM, and always
 * keeps a short content hash so distinct declarations can never collide.
 * Falls back to the plain hash for multi-declaration or non-tokenish values
 * (e.g. `var(--…)` colors, `calc(…)`, box-shadows).
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

/**
 * Atomic counterpart of useStyle: takes one cssFn per styling prop and emits
 * one class per prop instead of a single merged class. attachRules already
 * dedupes identical rules per document and ref-counts them, so shared
 * declarations (e.g. `display: flex`) resolve to a single stylesheet rule
 * reused by every Box instead of being duplicated in each combination class.
 */
export const useAtomicStyle = (styles: cssFn[]): string => {
  const rules = useMemo(
    () =>
      styles.map((cssFn) => {
        const content = cssFn();
        const className = buildAtomicClassName(content);
        return { className, selector: `.${escapeName(className)}`, content };
      }),
    [styles],
  );

  const classNames = rules.map((rule) => rule.className).join(' ');
  useDebugValue(classNames);

  const { document } = useOwnerDocument();

  useInsertionEffect(() => {
    const detaches = rules.map(({ selector, content }) =>
      attachRules(transpile(selector, content), { document }),
    );

    return () => {
      for (const detach of detaches) {
        setTimeout(detach, 1000);
      }
    };
  }, [rules, document]);

  return classNames;
};
