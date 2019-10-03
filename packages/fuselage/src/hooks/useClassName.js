import { useMemo } from 'react';

import { fromCamelToKebabCase } from '../helpers';

export const useClassName = (componentClassName, modifiers = {}, ...classNames) => useMemo(
  () => [
    componentClassName,
    ...Object.entries(modifiers)
      .filter(([, value]) => !!value)
      .map(([key, value]) => (typeof value === 'boolean'
        ? `${ componentClassName }--${ fromCamelToKebabCase(key) }`
        : `${ componentClassName }--${ fromCamelToKebabCase(key) }-${ fromCamelToKebabCase(String(value)) }`)),
    ...classNames,
  ].filter(Boolean).join(' '),
  [
    componentClassName,
    Object.entries(modifiers).reduce((deps, [name, value]) => [...deps, name, value], []),
    JSON.stringify(classNames),
  ]
);
