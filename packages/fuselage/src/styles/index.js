import styledFn from 'styled-components';

import variables from './variables';

const fromCamelToKebabCase = (camelCaseString) =>
  camelCaseString.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();

const mapAttrs = (componentClassName) => ({
  invisible,
  modifiers = {},
}) => ({
  className: [
    componentClassName,
    ...Object.entries({ ...modifiers, invisible })
      .filter(([, value]) => !!value)
      .map(([key, value]) => (typeof value === 'boolean'
        ? `${ componentClassName }--${ fromCamelToKebabCase(key) }`
        : `${ componentClassName }--${ fromCamelToKebabCase(key) }-${ fromCamelToKebabCase(String(value)) }`)),
  ].filter(Boolean).join(' '),
});

export const createStyledComponent = (styles, componentClassName, component = 'div') => {
  if (Array.isArray(styles[componentClassName])) {
    const StyledComponent = styledFn(component)
      .attrs(mapAttrs(componentClassName))
      .withConfig({})([], styles[componentClassName] || []);

    StyledComponent.defaultProps = {
      theme: variables,
    };

    StyledComponent.displayName = componentClassName;

    return StyledComponent;
  }

  const StyledComponent = styledFn(styles[componentClassName])
    .attrs(mapAttrs(componentClassName))
    .attrs(() => ({ as: component }))
    .withConfig({})([], []);

  StyledComponent.defaultProps = {
    theme: variables,
  };

  StyledComponent.displayName = componentClassName;

  return StyledComponent;
};
