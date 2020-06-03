import { toClassName } from '@rocket.chat/css-in-js';

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
      mergedProps.className.map(toClassName).filter(Boolean),
    ),
  ).join(' ');

  return mergedProps;
};
