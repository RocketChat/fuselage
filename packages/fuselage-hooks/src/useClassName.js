// @flow

import { useMemo } from 'react';

import { fromCamelToKebabCase } from './helpers';

/**
 * Hook to generate a BEM-compatible `className` value for a component.
 *
 * @param componentClassName - the style class which identifies the component
 * @param modifiers - the modifiers applied to the style class
 * @param classNames - the additional style classes appended to the `className`
 * @return a BEM-compatible `className` in the format
 *  `(<block>|<block>__<element>) [...(<block>--<modifier>|<block>__<element>--<modifier>)] [...classNames]`
 */
export const useClassName = (
  componentClassName : string,
  modifiers: Object = {},
  ...classNames: Array<string>
): string =>
  useMemo(
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
