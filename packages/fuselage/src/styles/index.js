import nanoMemoize from 'nano-memoize';
import styled from 'styled-components';

import variables from './variables';

const camelCaseRegex = /([a-z0-9]|(?=[A-Z]))([A-Z])/g;

const fromCamelToKebabCase = nanoMemoize((camelCaseString) =>
  camelCaseString.replace(camelCaseRegex, '$1-$2').toLowerCase());

const mapAttrs = (componentClassName) => nanoMemoize(({
  invisible,
  modifiers = {},
}) => ({
  className: [
    invisible && `${ componentClassName }--invisible`,
    ...Object.entries(modifiers)
      .filter(([, value]) => !!value)
      .map(([key, value]) => (typeof value === 'boolean'
        ? `${ componentClassName }--${ fromCamelToKebabCase(key) }`
        : `${ componentClassName }--${ fromCamelToKebabCase(key) }-${ fromCamelToKebabCase(String(value)) }`)),
  ].filter(Boolean).join(' '),
}));

const mapModifiers = (componentClassName) => (props) => {
  const classNames = [];

  for (const propName of Object.keys(props)) {
    if (!props[propName] || propName.slice(0, 4) !== 'mod-') {
      continue;
    }

    const modifierName = propName.slice(4);

    if (typeof props[propName] === 'boolean') {
      classNames.push(`${ componentClassName }--${ modifierName }`);
      continue;
    }

    classNames.push(`${ componentClassName }--${ modifierName }-${ props[propName] }`);
  }
  return {
    className: classNames.join(' '),
  };
};

const mapTheme = nanoMemoize(() => ({ theme: variables }));

const mapAs = (component) => nanoMemoize(() => ({ as: component }));

export const createStyledComponent = (styles, componentClassName, component = 'div') => {
  if (Array.isArray(styles[componentClassName])) {
    const StyledComponent = styled(component)
      .attrs(mapAttrs(componentClassName))
      .attrs(mapModifiers(componentClassName))
      .attrs(mapTheme)
      .withConfig({ componentId: componentClassName })([], styles[componentClassName] || []);

    StyledComponent.displayName = componentClassName;

    return StyledComponent;
  }

  const StyledComponent = styled(styles[componentClassName])
    .attrs(mapAttrs(componentClassName))
    .attrs(mapModifiers(componentClassName))
    .attrs(mapTheme)
    .attrs(mapAs(component))
    .withConfig({ componentId: componentClassName })([], []);

  StyledComponent.displayName = componentClassName;

  return StyledComponent;
};
