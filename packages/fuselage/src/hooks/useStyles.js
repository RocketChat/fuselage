import { useLayoutEffect, useMemo } from 'react';

import { flatMap } from '../helpers/flatMap';
import { fromCameltoKebabCase } from '../helpers/fromCamelToKebabCase';


export const useStyles = (styles, root, modifiers = {}, forwardedClassName) => {
  useLayoutEffect(() => {
    styles.use();

    return () => {
      styles.unuse();
    };
  }, [styles]);

  const rootClassName = `rcx-${ fromCameltoKebabCase(root) }`;

  const modifiersEntries = Object.entries(modifiers)
    .map(([name, value]) => [fromCameltoKebabCase(name), value]);

  const modifiersClassNames = useMemo(() => flatMap(
    modifiersEntries.map(([name, value]) => [
      typeof value === 'boolean' && value && `${ rootClassName }--${ name }`,
      typeof value === 'string' && value && `${ rootClassName }--${ name }-${ fromCameltoKebabCase(value) }`,
    ])
  ), [rootClassName, ...flatMap(modifiersEntries)]);

  return useMemo(() => [
    ...[rootClassName, ...flatMap(modifiersClassNames)]
      .filter((className) => !!styles.locals[className])
      .map((className) => `${ className } ${ styles.locals[className] }`),
    forwardedClassName,
  ].join(' '), [rootClassName, modifiersClassNames, forwardedClassName]);
};
