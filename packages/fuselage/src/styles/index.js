import styledFn from 'styled-components';

import variables from './variables';

const fromCamelToKebabCase = (camelCaseString) =>
  camelCaseString.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();

const mapAttrs = (componentClassName) => ({
  className,
  modifiers = {},
}) => ({
  className: [
    componentClassName,
    ...Object.entries(modifiers)
      .filter(([, value]) => !!value)
      .map(([key, value]) => (typeof value === 'boolean'
        ? `${ componentClassName }--${ fromCamelToKebabCase(key) }`
        : `${ componentClassName }--${ fromCamelToKebabCase(key) }-${ fromCamelToKebabCase(String(value)) }`)),
    className,
  ].filter(Boolean).join(' '),
});

export const createStyledComponent = (styles, componentClassName, component = 'div') => {
  const StyledComponent = styledFn(component)
    .attrs(mapAttrs(componentClassName))
    .withConfig({})([], styles[componentClassName] || []);

  StyledComponent.defaultProps = {
    theme: variables,
  };

  StyledComponent.displayName = componentClassName;

  return StyledComponent;
};
