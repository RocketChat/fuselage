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
