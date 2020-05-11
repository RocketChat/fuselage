import { createSelector, transpile, referenceRules } from '@rocket.chat/css-in-js';

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

  const rules = [];

  const classList = Array.from(
    new Set(
      mergedProps.className.map((className) => {
        if (typeof className === 'function') {
          rules.push(className(rules));
          return undefined;
        }

        if (typeof className === 'string') {
          return className;
        }

        return undefined;
      }).filter(Boolean),
    ),
  );

  const content = rules.filter(Boolean).join('') || undefined;

  if (!content) {
    return { ...mergedProps, className: classList.join(' ') };
  }

  const [className, encodedClassName] = createSelector(content);
  const parsedRules = transpile(`.${ encodedClassName }`, content);
  referenceRules(parsedRules);

  return { ...mergedProps, className: [...classList, className].join(' ') };
};
