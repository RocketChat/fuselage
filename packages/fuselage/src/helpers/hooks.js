import { Children, cloneElement, useMemo } from 'react';


const flatMap = (arr, mapFunc) => {
  if (arr.flatMap) {
    return arr.flatMap(mapFunc);
  }

  const result = [];
  for (const [index, elem] of arr.entries()) {
    const x = mapFunc(elem, index, arr);
    // We allow mapFunc() to return non-Arrays
    if (Array.isArray(x)) {
      result.push(...x);
    } else {
      result.push(x);
    }
  }
  return result;
};

export const useStyle = (styles, rootClassName, modifiers = {}, forwardedClassName) =>
  useMemo(() => [
    styles[rootClassName],
    ...flatMap(Object.entries(modifiers), ([modifier, value]) => [
      value && styles[`${ rootClassName }--${ modifier }`],
      typeof value !== 'boolean' && styles[`${ rootClassName }--${ modifier }-${ value }`],
    ]), forwardedClassName].filter(Boolean).join(' '),
  [modifiers, forwardedClassName]);

export const useChildrenWithClassName = (styles, rootClassName, childClassName, children) =>
  useMemo(() =>
    Children.map(children, (child) =>
      cloneElement(child, { className: styles[`${ rootClassName }__${ childClassName }`] }), [children]));
