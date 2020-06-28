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

const createClassNameMapping = (...args) =>
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

export const mergeProps = (targetProps, sourceProps, transforms = []) => {
  const initialProps = {
    ...targetProps,
    ...sourceProps,
    className: [
      ...Array.isArray(targetProps?.className) ? targetProps?.className : [targetProps?.className],
      ...Array.isArray(sourceProps?.className) ? sourceProps?.className : [sourceProps?.className],
    ],
    style: {
      ...targetProps?.style,
      ...sourceProps?.style,
    },
  };

  const mergedProps = transforms.reduce((props, transform) => transform(props), initialProps);

  mergedProps.className = Array.from(
    new Set(
      mergedProps.className.map(createClassNameMapping(sourceProps)).filter(Boolean),
    ),
  ).join(' ');

  return mergedProps;
};
