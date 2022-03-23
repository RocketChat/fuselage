import { css } from '@rocket.chat/css-in-js';

import { appendClassName } from '../../helpers/appendClassName';
import { fromCamelToKebab } from '../../helpers/fromCamelToKebab';
import { useStyle } from '../../hooks/useStyle';
import { propDefs } from './stylingProps';

export const useStylingProps = (originalProps) => {
  const { htmlSize, ...props } = originalProps;

  const stylingProps = new Map();

  for (const entry of Object.entries(props)) {
    const [propName, propValue] = entry;
    const propDef = propDefs[propName];

    if (!propDef) {
      continue;
    }

    delete props[propName];

    if (propValue === undefined) {
      continue;
    }

    let effectivePropName = propName;
    let effectivePropDef = propDef;

    if (effectivePropDef.aliasOf) {
      if (stylingProps.has(effectivePropDef.aliasOf)) {
        continue;
      }

      effectivePropName = effectivePropDef.aliasOf;
      effectivePropDef = propDefs[effectivePropName];
    }

    let { toStyle } = effectivePropDef;

    if (effectivePropDef.toCSSValue) {
      const cssProperty = fromCamelToKebab(effectivePropName);
      const { toCSSValue } = effectivePropDef;
      toStyle = (value) => {
        const cssValue = toCSSValue(value);
        if (cssValue === undefined) {
          return;
        }

        return css`
          ${cssProperty}: ${cssValue} !important;
        `;
      };
    }

    const style = toStyle(propValue);

    if (style === undefined) {
      continue;
    }

    stylingProps.set(effectivePropName, style);
  }

  const styles = stylingProps.size
    ? Array.from(stylingProps.values())
    : undefined;

  const newClassName = useStyle(
    css`
      ${styles}
    `
  );

  if (newClassName) {
    props.className = appendClassName(props.className, newClassName);
  }

  if (htmlSize) {
    props.size = htmlSize;
  }

  return props;
};
