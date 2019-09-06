import { useLayoutEffect } from 'react';

import theme from '../styles/theme';
import { fromCameltoKebabCase } from '../helpers/fromCamelToKebabCase';


const themeStyleId = 'rcx-theme';
let themeStyleElement;
let refCount = 0;

const serialize = (prefix, properties) =>
  Object.entries(properties).reduce((vars, [name, value]) => [
    ...vars,
    ...typeof value === 'object'
      ? serialize(`${ prefix }-${ name }`, value)
      : [`--${ prefix }-${ fromCameltoKebabCase(name) }: ${ value };`],
  ], []);

export const useTheme = () => {
  useLayoutEffect(() => {
    if (!themeStyleElement) {
      themeStyleElement = document.createElement('style');
      themeStyleElement.setAttribute('id', themeStyleId);
      document.head.appendChild(themeStyleElement);
    }

    ++refCount;

    return () => {
      if (--refCount <= 0 && themeStyleElement) {
        themeStyleElement.remove();
        themeStyleElement = null;
      }
    };
  }, []);

  useLayoutEffect(() => {
    themeStyleElement.innerHTML = [
      ':root {',
      ...serialize('theme', theme),
      '}',
    ].join('');
  }, [theme, themeStyleElement]);
};
