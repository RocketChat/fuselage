import { createClassName, escapeName, transpile, referenceRules } from '@rocket.chat/css-in-js';

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
