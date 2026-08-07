import type { cssFn } from '@rocket.chat/css-in-js';
import { escapeName, transpile, attachRules } from '@rocket.chat/css-in-js';
import { useDebugValue, useInsertionEffect, useMemo } from 'react';

import { useOwnerDocument } from '../contexts';

import { buildAtomicClassName } from './buildAtomicClassName';

export { buildAtomicClassName };

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
