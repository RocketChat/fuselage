const withPrefix = (prefix) => (modifier) =>
  prefix ? `${prefix}--${modifier}` : modifier;

export const composeClassNames = (prefix) => (...args) => {
  const addPrefix = withPrefix(prefix);

  const classNames = args
    .map((arg) => {
      if (typeof arg === 'string') {
        return arg;
      }

      if (typeof arg === 'object' && Array.isArray(arg)) {
        return arg.filter(Boolean).map(addPrefix).join(' ');
      }

      if (typeof arg === 'object' && arg !== null) {
        return Object.entries(arg)
          .map(([key, value]) => {
            if (typeof value === 'boolean') {
              if (value) {
                return addPrefix(key);
              }

              return null;
            }

            if (typeof value === 'string' || typeof value === 'number') {
              return addPrefix(`${key}-${value}`);
            }

            return null;
          })
          .filter(Boolean)
          .join(' ');
      }

      return null;
    })
    .concat()
    .filter(Boolean)
    .join(' ');

  if (!prefix) {
    return classNames;
  }

  return `${prefix} ${classNames}`;
};
