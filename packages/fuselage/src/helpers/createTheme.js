import { fromCameltoKebabCase } from './fromCamelToKebabCase';


export const createTheme = (prefix, themeObject) => new Proxy(themeObject, {
  get: (target, property) => {
    if (typeof target[property] === 'object') {
      return target[property];
    }

    if (typeof target[property] === 'function') {
      return (...args) => `var(--${ prefix }-${ fromCameltoKebabCase(property) }, ${ target[property](...args) })`;
    }

    return `var(--${ prefix }-${ fromCameltoKebabCase(property) }, ${ target[property] })`;
  },
});
