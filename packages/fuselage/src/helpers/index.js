export const fromCamelToKebabCase = (camelCaseString) =>
  camelCaseString.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();

export const toREM = (length) => {
  if (typeof length === 'number') {
    return `${ length / 16 }rem`;
  }

  return length;
};

const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

export const asThemeVariable = (componentName, name, value) => {
  if (isIE11) {
    return value;
  }

  return `var(--rcx-${ componentName }-${ name }, ${ value })`;
};

export const createTheme = (componentName, variables) => {
  if (isIE11) {
    return variables;
  }

  return Object.entries(variables).reduce((variables, [name, value]) => ({
    ...variables,
    [name]: typeof value === 'object'
      ? createTheme(`${ componentName }-${ fromCamelToKebabCase(name) }`, value)
      : asThemeVariable(componentName, fromCamelToKebabCase(name), value),
  }), {});
};

export const createThemeVariant = (componentName, variantName, variables) =>
  createTheme(`${ componentName }-${ variantName }`, variables);

export const rebuildClassName = (baseClassName) => ({
  className,
  ...props
}) => ({
  className: [
    `rcx-${ baseClassName }`,
    ...Object.entries(props).map(([modifier, value]) =>
      typeof value === 'boolean' && value && `rcx-${ baseClassName }--${ modifier }`,
    ),
    className,
  ].filter(Boolean).join(' '),
  ...props,
});
