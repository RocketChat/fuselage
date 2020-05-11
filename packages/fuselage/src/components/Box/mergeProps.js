import { createSelector, transpile, referenceRules } from '@rocket.chat/css-in-js';

import { mapClassNames } from './mapClassNames';
import { mapSpaceProps } from '../../styles/props/spaces';
import { mapLayoutProps } from '../../styles/props/layout';
import { mapFlexBoxProps } from '../../styles/props/flexBox';
import { mapColorProps } from '../../styles/props/colors';
import { mapTypographyProps } from '../../styles/props/typography';
import { mapBorderProps } from '../../styles/props/borders';
import { mapPositionProps } from '../../styles/props/position';
import { mapSpecialProps } from '../../styles/props/special';

export const mergeProps = (props, contextProps, ref) => {
  const initialProps = {
    ref,
    ...contextProps,
    ...props,
    className: [
      'rcx-box',
      ...Array.isArray(contextProps?.className) ? contextProps?.className : [contextProps?.className],
      ...Array.isArray(props.className) ? props.className : [props.className],
    ],
    style: {
      ...contextProps?.style,
      ...props.style,
    },
  };

  const mergedProps = [
    mapSpecialProps,
    mapClassNames,
    mapSpaceProps,
    mapLayoutProps,
    mapColorProps,
    mapTypographyProps,
    mapFlexBoxProps,
    mapBorderProps,
    mapPositionProps,
  ].reduce((props, transform) => transform(props), initialProps);

  mergedProps.className = Array.from(
    new Set(
      mergedProps.className.map((className) => {
        if (typeof className === 'function') {
          const rules = [];
          rules.push(className(rules));

          const content = rules.filter(Boolean).join('') || undefined;

          if (!content) {
            return undefined;
          }

          const [generatedClassName, encodedClassName] = createSelector(content);
          const parsedRules = transpile(`.${ encodedClassName }`, content);
          referenceRules(parsedRules);

          return className.className || generatedClassName;
        }

        if (typeof className === 'string') {
          return className;
        }

        return undefined;
      }).filter(Boolean),
    ),
  ).join(' ');

  return mergedProps;
};
