import { createClassName, escapeName } from './names';
import { referenceRules } from './sheet';
import { transpile } from './transpile';
import { cssFn } from './tags';

/**
 * Creates a mapping for class names as `css` tagged template functions and
 * strings.
 *
 * @param args the arguments passed to the `css` tagged template functions
 * @returns a mapping function that returns a class name string or `undefined`
 */
export const createClassNameMapping = (...args: unknown[]) =>
  (value: cssFn | string): string | undefined => {
    if (typeof value === 'function') {
      const content = value(...args);

      if (!content) {
        return;
      }

      const className = createClassName(value.className, content);
      const escapedClassName = escapeName(className);

      const transpiledContent = transpile(`.${ escapedClassName }`, content);
      referenceRules(transpiledContent);

      return className;
    }

    if (typeof value === 'string') {
      return value.trim();
    }

    return undefined;
  };
