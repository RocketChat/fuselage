import { createSelector } from './selectors';
import { referenceRules } from './sheet';
import { transpile } from './transpile';
import type { cssFn, classNameFn } from './tags';

/**
 * Process a value as a className.
 *
 * @return a string containing a className or undefined
 */
export const toClassName = (value: cssFn | classNameFn | string): string => {
  if (typeof value === 'function') {
    const rules = [];
    rules.push(value(rules));

    const content = rules.filter(Boolean).join('') || undefined;

    if (!content) {
      return undefined;
    }

    const className = (value as classNameFn).className || createSelector(content)[0];
    const encodedClassName = className.replace(/@|#|:/g, (char) => `\\${ char }`);

    const parsedRules = transpile(`.${ encodedClassName }`, content);
    referenceRules(parsedRules);

    return className;
  }

  if (typeof value === 'string' && value) {
    return value;
  }

  return undefined;
};
