export const fromCamelToKebabCase = (camelCaseString) =>
  camelCaseString.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();

export const toREM = (length) => {
  if (typeof length === 'number') {
    return `${ length / 16 }rem`;
  }

  return length;
};

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
