import { attachRules, createClassName, escapeName, transpile } from '@rocket.chat/css-in-js';

const references = {};

const referenceRules = (rules) => {
  if (!references[rules]) {
    references[rules] = {
      count: 0,
      detach: attachRules(rules),
    };
  }

  ++references[rules].count;

  return () => {
    --references[rules].count;
    if (references[rules].count === 0) {
      references[rules].detachRules();
      delete references[rules];
    }
  };
};

export const createClassNameMapping = (...args) =>
  (value) => {
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

export const mergeClassNames = (classNames, ...args) =>
  Array.from(
    new Set(
      classNames.map(createClassNameMapping(...args)).filter(Boolean),
    ),
  ).join(' ');
