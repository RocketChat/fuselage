import { Children, cloneElement, useEffect, useLayoutEffect, useMemo, useState } from 'react';

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
      try {
        baseStyles.unuse();
        styles.unuse();
      } catch (error) {
        console.warn(error);
      }
    };
  }, [styles]);

  return useMemo(() => [
    styles.locals[rootClassName],
    ...flatMap(Object.entries(modifiers), ([modifier, value]) => [
      typeof value === 'boolean' && value && styles.locals[`${ rootClassName }--${ modifier }`],
      typeof value !== 'boolean' && styles.locals[`${ rootClassName }--${ modifier }-${ value }`],
    ]), forwardedClassName].filter(Boolean).join(' '),
  [modifiers, forwardedClassName]);
};

export const useChildrenWithClassName = (styles, rootClassName, childClassName, children) =>
  useMemo(() =>
    Children.map(children, (child) =>
      cloneElement(child, { className: styles[`${ rootClassName }__${ childClassName }`] }), [children]));

const useMediaQueryHook = (effect) => (query, defaultState = true) => {
  const [state, setState] = useState(defaultState);

  effect(() => {
    let mounted = true;
    const mql = window.matchMedia(query);

    const handleChange = () => {
      if (!mounted) {
        return;
      }

      setState(!!mql.matches);
    };

    mql.addListener(handleChange);
    setState(mql.matches);

    return () => {
      mounted = false;
      mql.removeListener(handleChange);
    };
  }, [query]);

  return state;
};

export const useMediaQuery = useMediaQueryHook(useEffect);
export const useLayoutMediaQuery = useMediaQueryHook(useLayoutEffect);
