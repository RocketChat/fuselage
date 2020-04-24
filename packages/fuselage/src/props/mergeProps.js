import { createSelector, transpile, referenceRules } from '@rocket.chat/css-in-js';

import { mapClassNames } from './mapClassNames';
import { mapBoxProps } from './mapBoxProps';
import { mapSpaceProps } from './mapSpaceProps';
import { mapLayoutProps } from './mapLayoutProps';
import { mapFlexBoxProps } from './mapFlexBoxProps';
import { mapColorProps } from './mapColorProps';
import { mapTypographyProps } from './mapTypographyProps';

export const mergeProps = (props, contextProps, ref) => {
  const initialProps = {
    ref,
    ...contextProps,
    ...props,
    className: [
      ...Array.isArray(contextProps?.className) ? contextProps?.className : [contextProps?.className],
      ...Array.isArray(props.className) ? props.className : [props.className],
    ],
    style: {
      ...contextProps?.style,
      ...props.style,
    },
  };

  const mergedProps = [
    mapBoxProps,
    mapClassNames,
    mapSpaceProps,
    mapLayoutProps,
    mapFlexBoxProps,
    mapColorProps,
    mapTypographyProps,
  ].reduceRight((props, transform) => transform(props), initialProps);

  const rules = [];

  mergedProps.className = Array.from(
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

  mergedProps.className = mergedProps.className.join(' ');

  const content = rules.filter(Boolean).join('') || undefined;

  if (!content) {
    return mergedProps;
  }

  const [className, encodedClassName] = createSelector(content);
  const parsedRules = transpile(`.rcx-box.${ encodedClassName }`, content);
  referenceRules(parsedRules);

  mergedProps.className += ` ${ className }`;

  return mergedProps;
};
