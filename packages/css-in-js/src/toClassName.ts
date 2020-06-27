import { createClassName } from './names';
import { referenceRules } from './sheet';
import { transpile } from './transpile';
import { cssFn } from './tags';

/**
 * Process a value as a className.
 *
 * @return a string containing a className or undefined
 */
export const toClassName = (value: cssFn | string): string | undefined => {
  if (typeof value === 'function') {
    const content = value() || undefined;

    if (!content) {
      return undefined;
    }

    const className = createClassName(value.className, content);
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
