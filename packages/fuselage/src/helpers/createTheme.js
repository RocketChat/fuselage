import { fromCameltoKebabCase } from './fromCamelToKebabCase';


export const createTheme = (prefix, themeObject) => new Proxy(themeObject, {
  get: (themeObject, key) => {
    if (typeof key === 'symbol') {
      return themeObject[key];
    }

    if (typeof themeObject[key] === 'undefined') {
      console.log(key);
      throw Error(`missing theme key: ${ key }`);
    }

    if (typeof themeObject[key] === 'object') {
      return themeObject[key];
    }

    if (typeof themeObject[key] === 'function') {
      return (...args) => `var(--${ prefix }-${ fromCameltoKebabCase(key) }, ${ themeObject[key](...args) })`;
    }

    return `var(--${ prefix }-${ fromCameltoKebabCase(key) }, ${ themeObject[key] })`;
  },
});
