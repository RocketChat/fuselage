export const fromCamelToKebabCase = (camelCaseString) =>
  camelCaseString.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();

export const toREM = (length) => {
  if (typeof length === 'number') {
    return `${ length / 16 }rem`;
  }

  return length;
};

const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

export const themeVar = (component, name, value) => {
  if (isIE11) {
    return value;
  }

  return `var(--rcx-${ fromCamelToKebabCase(component) }-${ fromCamelToKebabCase(name) }, ${ value })`;
};

export const themeVars = (component, variables) => {
  if (isIE11) {
    return variables;
  }

  return Object.entries(variables).reduce((variables, [name, value]) => ({
    ...variables,
    [name]: typeof value === 'object'
      ? themeVars(`${ component }-${ name }`, value)
      : themeVar(component, name, value),
  }), {});
};

export const variantThemeVars = (component, variantName, variables) =>
  themeVars(`${ component }-${ variantName }`, variables);

export const rebuildClassName = (baseClassName) => ({
  className,
  ...props
}) => ({
  className: [
    baseClassName,
    ...Object.entries(props).map(([modifier, value]) =>
      typeof value === 'boolean' && value && `${ baseClassName }--${ modifier }`,
    ),
    className,
  ].filter(Boolean).join(' '),
  ...props,
});
