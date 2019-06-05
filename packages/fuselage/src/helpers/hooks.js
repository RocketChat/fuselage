import { Children, cloneElement, useLayoutEffect, useMemo } from 'react';

import baseStyles from '../styles/index.scss';


const flatMap = (arr, map = (x) => x) => {
  if (arr.flatMap) {
    return arr.flatMap(map);
  }

  const result = [];

  for (const [index, elem] of arr.entries()) {
    const x = map(elem, index, arr);

    if (Array.isArray(x)) {
      result.push(...x);
    } else {
      result.push(x);
    }
  }

  return result;
};

export const useStyle = (styles, rootClassName, modifiers = {}, forwardedClassName) => {
  useLayoutEffect(() => {
    baseStyles.use();
    styles.use();
    return () => {
      baseStyles.unuse();
      styles.unuse();
    };
  }, [styles]);

  return useMemo(() => [
    styles.locals[rootClassName],
    ...flatMap(Object.entries(modifiers), ([modifier, value]) => [
      value && styles.locals[`${ rootClassName }--${ modifier }`],
      typeof value !== 'boolean' && styles.locals[`${ rootClassName }--${ modifier }-${ value }`],
    ]), forwardedClassName].filter(Boolean).join(' '),
  [modifiers, forwardedClassName]);
};

export const useChildrenWithClassName = (styles, rootClassName, childClassName, children) =>
  useMemo(() =>
    Children.map(children, (child) =>
      cloneElement(child, { className: styles[`${ rootClassName }__${ childClassName }`] }), [children]));
